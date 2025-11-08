import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { motion } from "framer-motion";

const MySwal = withReactContent(Swal);

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({}); // Track expanded rows
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Delete category (with confirmation)
  const handleDelete = async (id) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "This will delete the category and all its subcategories!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton:
          "bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md",
        cancelButton:
          "bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md",
        actions: "flex justify-center gap-3 mt-4", // <-- gap between buttons
      },
      buttonsStyling: false,
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/categories/${id}`);
        MySwal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Category and all its subcategories have been deleted.",
          timer: 2000,
          showConfirmButton: false,
        });
        fetchCategories(); // refresh after delete
      } catch (err) {
        console.error(err);
        MySwal.fire({
          icon: "error",
          title: "Failed!",
          text: "Something went wrong while deleting.",
        });
      }
    }
  };

  // Recursive render for nested categories
  const renderCategoryRow = (cat, level = 0) => {
    const hasChildren = cat.children && cat.children.length > 0;
    const isExpanded = expanded[cat._id];

    return (
      <React.Fragment key={cat._id}>
        <tr
          className={`border-b ${
            level === 0
              ? "bg-gray-50"
              : level === 1
              ? "bg-gray-100"
              : "bg-gray-200"
          }`}
        >
          {/* Image */}
          <td className="p-3 text-center">
            {cat.image ? (
              <img
                src={`https://nbsifa.com/uploads/${cat.image}`}
                alt={cat.name}
                className="w-12 h-12 object-cover rounded-md mx-auto"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-md mx-auto" />
            )}
          </td>

          {/* Name + Expand/Collapse */}
          <td className="p-3 font-medium text-gray-800">
            <div className="flex items-center">
              <span style={{ marginLeft: `${level * 20}px` }} className="mr-2">
                {hasChildren && (
                  <button
                    onClick={() => toggleExpand(cat._id)}
                    className="text-gray-600 font-bold focus:outline-none"
                  >
                    {isExpanded ? "⊖" : "⊕"}
                  </button>
                )}
              </span>
              <span>{cat.name}</span>
            </div>
          </td>

          {/* Subcategory Count */}
          <td className="p-3 text-center text-gray-600">
            {cat.children?.length || 0}
          </td>

          {/* Actions */}
          <td className="p-3 flex justify-center gap-3">
            <Link to={`/dashboard/edit-category/${cat._id}`}>
              <button className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 transition">
                <FaEdit size={16} />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(cat._id)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
            >
              <FaTrash size={16} />
            </button>
          </td>
        </tr>

        {/* Render children if expanded */}
        {hasChildren &&
          isExpanded &&
          cat.children.map((child) => renderCategoryRow(child, level + 1))}
      </React.Fragment>
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-emerald-700">All Categories</h1>
        <Link to="/dashboard/add-category">
          <motion.div
            whileHover={{
              scale: 1.08,
              background: [
                "linear-gradient(90deg, #059669, #10B981)",
                "linear-gradient(90deg, #10B981, #34D399)",
                "linear-gradient(90deg, #34D399, #059669)",
              ],
              boxShadow: "0px 6px 20px rgba(16, 185, 129, 0.4)",
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md shadow cursor-pointer transition-all duration-300"
          >
            <FaPlus />
            <span>Add Category</span>
          </motion.div>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-center">Subcategories</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentCategories.map((cat) => renderCategoryRow(cat))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page
                ? "bg-emerald-700 text-white"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllCategories;
