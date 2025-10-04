import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import PartNode from "./PartNode";
import Swal from "sweetalert2";

const BACKEND_URL = "http://localhost:7777";

const SparePartsTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Number of parents per page

  const fetchParts = async () => {
    try {
    const res = await axiosInstance.get(`/api/spareparts`);
      setData(res.data);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to fetch spare parts", "error");
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil((data?.length || 0) / pageSize);
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-4">
      {/* Render parent nodes for current page */}
      {paginatedData?.map((part) => (
        <PartNode
          key={part._id?.toString()}
          node={part}
          onRefetch={fetchParts} // refresh tree after update/delete/add
        />
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-4 justify-center items-center">
          <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-xl shadow-lg">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
              Page{" "}
              <span className="font-bold text-indigo-600">{currentPage}</span>{" "}
              of <span className="font-bold text-indigo-600">{totalPages}</span>
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Next
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SparePartsTable;
