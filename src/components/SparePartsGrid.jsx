// src/pages/SparePartsGrid.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosInstance from "../api/axiosInstance";
import Loading from "./Loading";
import { motion } from "framer-motion";

export default function SparePartsGrid() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spareParts, setSpareParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    setLoading(true);
    setError(null);

    axiosInstance
      .get(`/categories/${id}/spareparts`)
      .then((res) => {
        setSpareParts(res.data);
        setLoading(false);
        setCurrentPage(1); // reset page when category changes
      })
      .catch((err) => {
        console.error("Failed to fetch spare parts:", err);
        setError("Failed to fetch spare parts");
        setSpareParts([]);
        setLoading(false);
      });
  }, [id]);

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

  // Pagination calculations
  const totalPages = Math.ceil(spareParts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = spareParts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Spare Parts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((part) => (
          <motion.div
            key={part._id}
            className="rounded-lg overflow-hidden cursor-pointer relative"
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate(`/spare-parts-details/${part._id}`)}
          >
            <div className="bg-white shadow-lg rounded-lg p-4 relative z-10 h-full flex flex-col">
              {part.image ? (
                <img
                  src={`http://localhost:7777/uploads/${part.image}`}
                  alt={part.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-md mb-2 text-gray-400">
                  No Image
                </div>
              )}
              <h3 className="font-medium text-lg">{part.name}</h3>
              {part.categoryId?.name && (
                <p className="text-sm text-gray-500">{part.categoryId.name}</p>
              )}
              {part.description && (
                <p className="text-sm text-gray-600 mt-1 flex-grow">
                  {part.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded bg-yellow-500 text-white font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Previous
        </button>

        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded bg-yellow-500 text-white font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
