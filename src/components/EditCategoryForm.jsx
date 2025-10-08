import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "./Loading";

const allFields = [
  { name: "name", label: "Name" },
  { name: "description", label: "Description" },
  { name: "brand", label: "Brand" },
  { name: "partType", label: "Part Type" },
  { name: "material", label: "Material" },
  { name: "dimensions", label: "Dimensions" },
  { name: "installSize", label: "Install Size" },
  { name: "faceplateSize", label: "Faceplate Size" },
  { name: "weight", label: "Weight" },
  { name: "application", label: "Application" },
  { name: "warrantyTime", label: "Warranty Time" },
  { name: "certificates", label: "Certificates" },
  { name: "moq", label: "MOQ" },
  { name: "shippingTerms", label: "Shipping Terms" },
  { name: "paymentTerms", label: "Payment Terms" },
  { name: "paymentCurrency", label: "Payment Currency" },
  { name: "packing", label: "Packing" },
];

const EditCategoryForm = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://148.66.154.205:7777/category/${id}`
      );
      return data.data; // actual category object
    },
    enabled: !!id,
  });

  const [formData, setFormData] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  useEffect(() => {
    if (category) {
      setFormData(category);
      setPreviewImages(category.images || []);
    }
  }, [category]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
    setFormData({ ...formData, newFiles: files }); // store new files
  };

  const handleRemoveImage = (imgSrc, index) => {
    // If existing image, mark it removed
    if (category.images.includes(imgSrc)) {
      setRemovedImages((prev) => [...prev, imgSrc]);
    }
    // Remove from preview
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const data = new FormData();

      // Add all fields
      for (let key in formData) {
        if (key !== "newFiles") data.append(key, formData[key]);
      }

      // Add new files
      if (formData.newFiles) {
        formData.newFiles.forEach((file) => {
          data.append("images", file);
        });
      }

      // Add removed images info
      if (removedImages.length > 0) {
        data.append("removedImages", JSON.stringify(removedImages));
      }

      const res = await axios.put(
        `http://148.66.154.205:7777/update-category/${id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      });
      setRemovedImages([]);
      setFormData({});
      setPreviewImages([]);
      queryClient.invalidateQueries({ queryKey: ["category", id] });
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || err.message,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {allFields.map((field) => (
          <div key={field.name}>
            <label className="block font-medium">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mt-1"
          />
        </div>

        <div className="flex flex-wrap mt-2 gap-2">
          {previewImages.map((imgSrc, idx) => (
            <div key={idx} className="relative">
              <img
                src={imgSrc}
                alt={`thumbnail-${idx}`}
                className="w-20 h-20 object-cover border rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(imgSrc, idx)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Category
        </button>
      </form>
    </div>
  );
};

export default EditCategoryForm;
