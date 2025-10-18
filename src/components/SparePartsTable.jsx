import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";

const SparePartsTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of parts per page
  const [loading, setLoading] = useState(false);

  const fetchParts = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/spare-parts`);
      setData(res.data);
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error",
        text: "Failed to fetch spare parts",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the spare part",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/spare-parts/${id}`);
        Swal.fire("Deleted!", "Spare part has been deleted.", "success");
        fetchParts();
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete spare part", "error");
      }
    }
  };

  // Pagination
  const totalPages = Math.ceil((data?.length || 0) / pageSize);
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Spare Parts Management
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading spare parts...</div>
      ) : (
        <div className="space-y-4">
          {paginatedData.map((part) => (
            <div
              key={part._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Part Info */}
              <div className="flex items-center gap-4">
                {part.image ? (
                  <img
                    src={`${axiosInstance.defaults.baseURL || ""}/uploads/${
                      part.image
                    }`}
                    alt={part.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    {part.name}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Category: {part.categoryId?.name || "Unassigned"}
                  </p>
                  <p className="text-gray-500 text-sm">{part.description}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => Swal.fire("Edit functionality coming soon")}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(part._id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 rounded">
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SparePartsTable;
