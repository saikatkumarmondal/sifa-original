// CategoryList.jsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import Loading from "./Loading";

const API_URL = "http://localhost:7777"; // backend base URL

// Fetch all categories (nested)
const fetchCategories = async () => {
  const { data } = await axios.get(`${API_URL}/get-categories`);
  return data.data || []; // Use `data.data` because your API returns { success, message, data }
};

const CategoryList = () => {
  const queryClient = useQueryClient();

  // Fetch categories
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Delete category
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/categories/${id}`),
    onSuccess: () => {
      Swal.fire("Deleted!", "Category deleted successfully.", "success");
      queryClient.invalidateQueries(["categories"]);
    },
    onError: () => Swal.fire("Error", "Failed to delete category.", "error"),
  });

  // Update category
  const updateMutation = useMutation({
    mutationFn: ({ id, name, file }) => {
      const formData = new FormData();
      formData.append("name", name);
      if (file) formData.append("image", file);
      return axios.put(`${API_URL}/update-category/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      Swal.fire("Updated!", "Category updated successfully.", "success");
      queryClient.invalidateQueries(["categories"]);
    },
    onError: () => Swal.fire("Error", "Failed to update category.", "error"),
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

  // Edit category
  const handleEdit = (cat) => {
    const container = document.createElement("div");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = cat.name;
    nameInput.className = "swal2-input";
    container.appendChild(nameInput);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.className = "swal2-file";
    container.appendChild(fileInput);

    Swal.fire({
      title: "Edit Category",
      html: container,
      showCancelButton: true,
      confirmButtonText: "Update",
      focusConfirm: false,
      preConfirm: () => {
        return { name: nameInput.value, file: fileInput.files[0] };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        updateMutation.mutate({
          id: cat._id,
          name: result.value.name,
          file: result.value.file,
        });
      }
    });
  };

  // Delete category (optimistic)
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
      <div key={cat._id} className={`ml-${level * 4} border-l pl-4 my-2`}>
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm">
          <div className="flex items-center gap-2">
            <img
              src={
                cat.image
                  ? `${API_URL}/${cat.image}`
                  : `${API_URL}/default-category.png` // fallback image
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
            <button className="text-green-500" onClick={() => handleEdit(cat)}>
              <FaEdit />
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDelete(cat._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
        {cat.children && cat.children.length > 0 && (
          <div className="ml-6">
            {renderCategories(cat.children, level + 1)}
          </div>
        )}
      </div>
    ));

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {categories.length ? (
        renderCategories(categories)
      ) : (
        <p className="text-gray-500">No categories found</p>
      )}
    </div>
  );
};

export default CategoryList;
