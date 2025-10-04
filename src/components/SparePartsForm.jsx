import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function AddCategoryForm() {
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parent_category_id: "",
    child_category_id: "",
    grandchild_category_id: "",
    brand: "",
    partType: "",
    placeOfOrigin: "",
    material: "",
    dimensions: "",
    installSize: "",
    faceplateSize: "",
    weight: "",
    application: "",
    warrantyTime: "",
    certificates: "",
    moq: "",
    shippingTerms: "",
    paymentTerms: "",
    paymentCurrency: "",
    packing: "",
    images: [],
  });

  // ✅ Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  // ✅ Mutation
  const mutation = useMutation({
    mutationFn: async (data) => {
      const form = new FormData();
      for (let key in data) {
        if (key === "images") {
          for (let i = 0; i < data.images.length; i++) {
            form.append("images", data.images[i]);
          }
        } else {
          form.append(key, data[key]);
        }
      }

      return axiosInstance.post("/add-category", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries(["categories"]);
      setFormData({
        name: "",
        description: "",
        parent_category_id: "",
        child_category_id: "",
        grandchild_category_id: "",
        brand: "",
        partType: "",
        placeOfOrigin: "",
        material: "",
        dimensions: "",
        installSize: "",
        faceplateSize: "",
        weight: "",
        application: "",
        warrantyTime: "",
        certificates: "",
        moq: "",
        shippingTerms: "",
        paymentTerms: "",
        paymentCurrency: "",
        packing: "",
        images: [],
      });

      Swal.fire({
        title: "✅ Success!",
        text: res.data.message || "Category added successfully",
        icon: "success",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "❌ Error",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    },
  });

  // ✅ Fields in steps (5 per step)
  const fields = [
    { name: "name", label: "Name" },
    { name: "description", label: "Description" },
    { name: "brand", label: "Brand" },
    { name: "partType", label: "Part Type" },
    { name: "placeOfOrigin", label: "Place of Origin" },

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

  const start = (step - 1) * 5;
  const currentFields = fields.slice(start, start + 5);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Step {step}</h2>

      {/* Parent - Child - Grandchild */}
      <div className="mb-3">
        <label className="block text-sm mb-1">Parent Category</label>
        <select
          name="parent_category_id"
          value={formData.parent_category_id}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">-- Select Parent --</option>
          <option value="1">Parent A</option>
          <option value="2">Parent B</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-1">Child Category</label>
        <select
          name="child_category_id"
          value={formData.child_category_id}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">-- Select Child --</option>
          <option value="11">Child A1</option>
          <option value="12">Child A2</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-1">Grandchild Category</label>
        <select
          name="grandchild_category_id"
          value={formData.grandchild_category_id}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">-- Select Grandchild --</option>
          <option value="111">Grandchild A1-1</option>
          <option value="112">Grandchild A1-2</option>
        </select>
      </div>

      {/* Step fields */}
      {currentFields.map((field) => (
        <div key={field.name} className="mb-3">
          <label className="block text-sm mb-1">{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      ))}

      {/* File upload */}
      {step === 4 && (
        <div className="mb-3">
          <label className="block text-sm mb-1">Images</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => mutation.mutate(formData)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
