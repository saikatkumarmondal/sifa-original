// src/pages/SparePartsGrid.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // CORRECTED: Imported from react-router-dom
import axiosInstance from "../api/axiosInstance";
import Loading from "./Loading";
import { motion } from "framer-motion";
import SparePartsLogo from "/SpareParts.png";
import Footer from "./Footer";

// Framer Motion variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// --- Custom Spring Transition for HOVER (for the card) ---
const cardHoverSpring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

// --- Custom Transition for Image Scale ---
const imageScaleSpring = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  mass: 0.5,
};

export default function SparePartsGrid() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spareParts, setSpareParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  // ✅ Base URL for images
  const backendURL = import.meta.env.VITE_API_BASE_URL;
  // or your deployed backend URL

  useEffect(() => {
    setLoading(true);
    setError(null);

    axiosInstance
      .get(`/categories/${id}/spareparts`)
      .then((res) => {
        setSpareParts(res.data);
        setLoading(false);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.error("Failed to fetch spare parts:", err);
        setError("Failed to fetch spare parts");
        setSpareParts([]);
        setLoading(false);
      });
  }, [id]);

  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="p-4 text-center text-red-600 font-medium">{error}</div>
    );

  if (!spareParts.length)
    return (
      <div className="p-4 text-center text-gray-600 font-medium">
        No spare parts found for this category.
      </div>
    );

  const totalPages = Math.ceil(spareParts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = spareParts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      <img
        src={SparePartsLogo}
        alt="Spare Parts"
        className="w-screen object-contain rounded-lg"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Spare Parts
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          key={id + currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentItems.map((part) => (
            <motion.div
              key={part._id}
              variants={itemVariants}
              className="
              bg-white 
              rounded-xl 
              overflow-hidden 
              cursor-pointer 
              relative 
              shadow-lg 
              border border-green-200 
              transition duration-300
              hover:shadow-2xl 
              hover:border-green-500
            "
              whileHover={{
                y: -3,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 128, 0, 0.1), 0 10px 10px -5px rgba(0, 128, 0, 0.04)",
              }}
              transition={cardHoverSpring}
              onClick={() => navigate(`/spare-parts-details/${part._id}`)}
            >
              <div className="p-4 relative z-10 h-full flex flex-col">
                {part.image ? (
                  <div className="w-full h-40 overflow-hidden rounded-md mb-3">
                    <motion.img
                      src={`${backendURL}${part.image}`} // image already has /uploads/...
                      alt={part.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={imageScaleSpring}
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-md mb-3 text-gray-400">
                    No Image
                  </div>
                )}
                <h3 className="font-bold text-xl text-green-700">
                  {part.name}
                </h3>
                {part.categoryId?.name && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    Category: {part.categoryId.name}
                  </p>
                )}
                {part.description && (
                  <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-2">
                    {part.description}
                  </p>
                )}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <span className="text-sm font-semibold text-green-600">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Previous
          </button>

          <span className="font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
