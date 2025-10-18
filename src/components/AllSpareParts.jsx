import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { FaEye } from "react-icons/fa";
import axiosInstance from "../api/axiosInstance";
import Loading from "./Loading";

const AllSpareParts = () => {
  const [spareParts, setSpareParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpareParts = async () => {
      try {
        const res = await axiosInstance.get("/spare-parts");
        setSpareParts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch spare parts:", error);
        setLoading(false);
      }
    };
    fetchSpareParts();
  }, []);

  if (loading) return <Loading></Loading>;

  // Pagination calculations
  const totalPages = Math.ceil(spareParts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentParts = spareParts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      {/* Add Spare Part Button */}
      <div className="flex justify-end mb-4">
        <Link
          to="/dashboard/add-spareParts"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Spare Part
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 hidden sm:table-header-group">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentParts.map((part) => (
              <tr
                key={part._id}
                className="border-t border-gray-200 hover:bg-gray-50 block sm:table-row mb-4 sm:mb-0"
              >
                {/* Image */}
                <td
                  className="px-4 py-2 flex justify-between sm:table-cell"
                  data-label="Image"
                >
                  {part.images && part.images.length > 0 ? (
                    <img
                      src={`http://localhost:7777/uploads/${part.images[0]}`}
                      alt={part.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>

                {/* Name */}
                <td
                  className="px-4 py-2 flex justify-between sm:table-cell"
                  data-label="Name"
                >
                  {part.name}
                </td>

                {/* Category */}
                <td
                  className="px-4 py-2 flex justify-between sm:table-cell"
                  data-label="Category"
                >
                  {part.categoryId?.name || "N/A"}
                </td>

                {/* Brand */}
                <td
                  className="px-4 py-2 flex justify-between sm:table-cell"
                  data-label="Brand"
                >
                  {part.brand}
                </td>

                {/* Action */}
                <td
                  className="px-4 py-2 flex justify-between sm:table-cell"
                  data-label="Action"
                >
                  <button
                    onClick={() =>
                      navigate(`/dashboard/single-sparePart/${part._id}`)
                    }
                    className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    <FaEye /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllSpareParts;
