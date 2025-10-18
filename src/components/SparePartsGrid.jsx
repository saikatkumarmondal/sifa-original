import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useCategories from "../hooks/useCategories";
import Loading from "./Loading";
import SparePartsSidebar from "./SparePartsSidebar";
import { motion } from "framer-motion";

const buildUrl = (img) => {
  if (!img) return null;
  img = img.replace(/\\/g, "/");
  img = img.replace(/^.*uploads/, "uploads");
  return `http://148.66.154.205:7777/${img}`;
};

// Get first image from category or its children recursively
const getFirstImage = (cat) => {
  if (cat.image && cat.image.trim() !== "") return cat.image;
  if (Array.isArray(cat.images) && cat.images.length > 0) return cat.images[0];
  if (cat.children && cat.children.length > 0) {
    for (let child of cat.children) {
      const img = getFirstImage(child);
      if (img) return img;
    }
  }
  return null;
};

export default function SparePartsGrid() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(id);

  // Fetch categories for the current selected id
  const { data: categories, isLoading } = useCategories(selectedId);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setSelectedId(id);
    setCurrentPage(1);
  }, [id]);

  if (isLoading) return <Loading />;

  if (!categories || categories.length === 0) {
    navigate(`/spare-parts/${selectedId}`);
    return null;
  }

  // ------------------------
  // Determine grid items
  // ------------------------
  let gridItems = [];
  categories.forEach((cat) => {
    const hasChildren = cat.children && cat.children.length > 0;
    const hasGrandchildren = hasChildren
      ? cat.children.some(
          (child) => child.children && child.children.length > 0
        )
      : false;

    if (!hasChildren) {
      // Leaf → show itself
      gridItems.push(cat);
    } else if (!hasGrandchildren) {
      // Only children → show all children in grid
      gridItems = gridItems.concat(cat.children);
    }
    // else: parent with children having grandchildren → grid empty
  });

  const totalItems = gridItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = gridItems.slice(startIndex, startIndex + itemsPerPage);

  const handleClick = (cat) => {
    const hasChildren = cat.children && cat.children.length > 0;
    if (hasChildren) {
      navigate(`/spare-parts-grid/${cat._id}`);
    } else {
      navigate(`/spare-parts/${cat._id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Spare Parts Categories
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1">
          <SparePartsSidebar selectedId={selectedId} />
        </div>

        {/* Grid */}
        <div className="col-span-3">
          {currentItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              Select a child to view its parts
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {currentItems.map((cat) => {
                const firstImage = getFirstImage(cat);
                const imgSrc = buildUrl(firstImage) || "/placeholder.png";

                return (
                  <motion.div
                    key={cat._id}
                    onClick={() => handleClick(cat)}
                    className="relative cursor-pointer bg-white rounded-lg shadow-md p-4 border border-transparent overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded mb-3">
                      {imgSrc === "/placeholder.png" ? (
                        <span className="text-gray-400">
                          No image available
                        </span>
                      ) : (
                        <motion.img
                          src={imgSrc}
                          alt={cat.name}
                          className="w-full h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = "/placeholder.png";
                          }}
                        />
                      )}
                    </div>
                    <h3 className="text-center text-gray-700 font-semibold">
                      {cat.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {currentItems.length > 0 && (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                Prev
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
