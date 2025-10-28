import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "./Loading";

const API_URL = "http://148.66.154.205:7777";

const fetchCategories = async () => {
  const { data } = await axiosInstance.get("/categories");
  return data || [];
};

const CategoryList = ({ setEditingCategoryId }) => {
  const queryClient = useQueryClient();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/categories/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

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
        deleteMutation.mutate(id);
      }
    });
  };

  const renderCategories = (cats, level = 0) =>
    cats.map((cat) => (
      <div key={cat._id} style={{ marginLeft: level * 20 }}>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded mb-2">
          <div className="flex items-center gap-2">
            <img
              src={
                cat.image
                  ? `${API_URL}/uploads/${cat.image}`
                  : `${API_URL}/default-category.png`
              }
              alt={cat.name}
              className="w-6 h-6 object-cover rounded"
            />
            <span className={`${level === 0 ? "font-medium" : "text-sm"}`}>
              {cat.name}
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => Swal.fire(cat.name)}>
              <FaEye />
            </button>
            <Link to={`/dashboard/edit-category/${cat._id}`}>
              <FaEdit />
            </Link>
            <button onClick={() => handleDelete(cat._id)}>
              <FaTrash />
            </button>
          </div>
        </div>
        {cat.children &&
          cat.children.length > 0 &&
          renderCategories(cat.children, level + 1)}
      </div>
    ));

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {categories.length ? (
        renderCategories(categories)
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default CategoryList;
