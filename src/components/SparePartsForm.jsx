// SparePartsForm.jsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const fetchCategories = async () => {
  const { data } = await axios.get("http://localhost:7777/get-categories");
  return data.data;
};

const renderOptions = (cats, level = 0) => {
  return cats.map((c) => (
    <React.Fragment key={c._id}>
      <option value={c._id}>
        {Array(level).fill("⎯⎯").join("")} {c.name}
      </option>
      {c.children && renderOptions(c.children, level + 1)}
    </React.Fragment>
  ));
};

const SparePartsForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parent_category_id: "",
    image: null,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return axios.post("http://localhost:7777/add-category", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries(["categories"]);
      setFormData({
        name: "",
        description: "",
        parent_category_id: "",
        image: null,
      });

      Swal.fire({
        title: "✅ Success!",
        text: res.data.message || "Category added successfully",
        icon: "success",
        background: "#f9fafb",
        color: "#1f2937",
        confirmButtonColor: "#2563eb",
        confirmButtonText: "Great!",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "❌ Error",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
        background: "#fef2f2",
        color: "#991b1b",
        confirmButtonColor: "#dc2626",
        confirmButtonText: "Try Again",
      });
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("description", formData.description); // added description
    if (formData.parent_category_id)
      fd.append("parent_category_id", formData.parent_category_id);
    if (formData.image) fd.append("image", formData.image);
    mutation.mutate(fd);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 border rounded shadow-lg bg-white"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Category name"
        className="input input-bordered w-full"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description (Optional)"
        className="textarea textarea-xl w-full"
      ></textarea>
      <select
        name="parent_category_id"
        value={formData.parent_category_id}
        onChange={handleChange}
        className="select select-bordered w-full"
      >
        <option value="">None (Parent Category)</option>
        {renderOptions(categories)}
      </select>

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="file-input w-full"
      />

      <button type="submit" className="btn btn-primary w-full">
        {mutation.isLoading ? "Adding..." : "Add Category"}
      </button>
    </form>
  );
};

export default SparePartsForm;
