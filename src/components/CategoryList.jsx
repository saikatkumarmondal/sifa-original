import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router";

const API_URL = "http://localhost:7777"; // backend base URL

// Fetch all categories (nested)
const fetchCategories = async () => {
  const { data } = await axios.get(`${API_URL}/get-categories`);
  return data.data || [];
};

const CategoryList = ({ setEditingCategoryId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const paginatedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Delete category mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/categories/${id}`),
    onSuccess: () => {
      Swal.fire("Deleted!", "Category deleted successfully.", "success");
      queryClient.invalidateQueries(["categories"]);
    },
    onError: () => Swal.fire("Error", "Failed to delete category.", "error"),
  });

  // View category
  const handleView = (cat) => {
    Swal.fire({
      title: cat.name,
      text: `Category ID: ${cat._id}`,
      imageUrl: cat.image ? `${API_URL}/${cat.image}` : undefined,
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: "Close",
    });
  };

  // ✅ Edit category → navigate and update layout state
  // const handleEdit = (id) => {
  //   navigate(`/dashboard/edit-category/${id}`); // navigate to URL
  //   if (setEditingCategoryId) setEditingCategoryId(id); // update DashboardLayout state
  // };

  // Delete category (with confirmation)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the category and all its children!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        queryClient.setQueryData(["categories"], (oldData) => {
          const removeCategoryRecursively = (cats, targetId) =>
            cats
              .filter((cat) => cat._id !== targetId)
              .map((cat) => ({
                ...cat,
                children: cat.children
                  ? removeCategoryRecursively(cat.children, targetId)
                  : [],
              }));
          return removeCategoryRecursively(oldData, id);
        });
        deleteMutation.mutate(id);
      }
    });
  };

  // Recursive render for nested categories
  const renderCategories = (cats, level = 0) =>
    cats.map((cat) => (
      <div
        key={cat._id}
        className={`pl-${level * 4} my-2`}
        style={{ marginLeft: `${level * 20}px` }}
      >
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm">
          <div className="flex items-center gap-2">
            <img
              src={
                cat.image
                  ? `${API_URL}/${cat.image}`
                  : `${API_URL}/default-category.png`
              }
              alt={cat.name}
              className="w-6 h-6 object-cover rounded"
            />
            <span
              className={`${level === 0 ? "text-lg" : "text-sm"} font-medium`}
            >
              {cat.name}
            </span>
          </div>
          <div className="flex gap-3">
            <button className="text-blue-500" onClick={() => handleView(cat)}>
              <FaEye />
            </button>
            <Link
              to={`/dashboard/edit-category/${cat._id}`}
              className="text-green-500"
              // onClick={() => handleEdit(cat._id)}
            >
              <FaEdit />
            </Link>
            <button
              className="text-red-500"
              onClick={() => handleDelete(cat._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
        {cat.children && cat.children.length > 0 && (
          <div>{renderCategories(cat.children, level + 1)}</div>
        )}
      </div>
    ));

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Spare Parts Categories</h2>
      {paginatedCategories.length ? (
        renderCategories(paginatedCategories)
      ) : (
        <p className="text-gray-500">No categories found</p>
      )}

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
