import React, { useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../api/axiosInstance";

const levelStyles = [
  "bg-indigo-50 border-indigo-300", // parent
  "bg-purple-50 border-purple-300", // child
  "bg-pink-50 border-pink-300", // grandchild
];

const PartNode = ({ node, onRefetch, level = 0 }) => {
  const [expanded, setExpanded] = useState(true);

  if (!node) return null; // safely handle undefined node

  // Ensure children is always an array
  const children = Array.isArray(node.children) ? node.children : [];

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete this category and all its children",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/categories/${id}`);
        Swal.fire(
          "Deleted!",
          "Category and its children have been deleted.",
          "success"
        );
        onRefetch();
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete category", "error");
      }
    }
  };

  return (
    <div
      className={`border-l-4 p-3 mb-2 rounded-lg ${
        levelStyles[level] || "bg-gray-50 border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {children.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-gray-700 font-bold"
            >
              {expanded ? "▼" : "▶"}
            </button>
          )}
          <span className={`font-semibold text-gray-800`}>{node.name}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => Swal.fire("Edit functionality coming soon")}
            className="px-2 py-1 text-xs text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(node._id)}
            className="px-2 py-1 text-xs text-white bg-red-600 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>

      {node.description && (
        <p className="text-sm text-gray-600 mt-1 ml-6">{node.description}</p>
      )}

      {expanded && children.length > 0 && (
        <div className="mt-2 ml-6">
          {children.map((child) => (
            <PartNode
              key={child._id}
              node={child}
              onRefetch={onRefetch}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PartNode;
