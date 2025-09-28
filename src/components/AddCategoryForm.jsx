import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { FaTimes } from "react-icons/fa";

export default function AddCategoryForm() {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    parent_category_id: "",
    brand: "",
    partType: "",
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
    description: "",
    images: [],
  });

  // Fetch categories
  useEffect(() => {
    axios
      .get("http://localhost:7777/get-categories")
      .then((res) => {
        if (res.data.success) setCategories(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch single category for edit
  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:7777/category/${id}`)
      .then((res) => {
        if (res.data.success) {
          const cat = res.data.data;
          setFormData({
            name: cat.name || "",
            parent_category_id: cat.parent_category_id || "",
            brand: cat.brand || "",
            partType: cat.partType || "",
            material: cat.material || "",
            dimensions: cat.dimensions || "",
            installSize: cat.installSize || "",
            faceplateSize: cat.faceplateSize || "",
            weight: cat.weight || "",
            application: cat.application || "",
            warrantyTime: cat.warrantyTime || "",
            certificates: cat.certificates || "",
            moq: cat.moq || "",
            shippingTerms: cat.shippingTerms || "",
            paymentTerms: cat.paymentTerms || "",
            paymentCurrency: cat.paymentCurrency || "",
            packing: cat.packing || "",
            description: cat.description || "",
            images: [],
          });
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Flatten categories
  const flattenCategories = (cats, depth = 0) => {
    let result = [];
    cats.forEach((cat) => {
      result.push({
        _id: cat._id,
        name: `${"— ".repeat(depth)}${cat.name}`,
        parent_category_id: cat.parent_category_id || null,
      });
      if (cat.children?.length) {
        result = result.concat(flattenCategories(cat.children, depth + 1));
      }
    });
    return result;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      for (let key in formData) {
        if (key === "images") {
          for (let i = 0; i < formData.images.length; i++) {
            form.append("images", formData.images[i]);
          }
        } else {
          form.append(key, formData[key]);
        }
      }

      const url = id
        ? `http://localhost:7777/category/${id}`
        : "http://localhost:7777/add-category";

      const res = await axios.post(url, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        title: "Success!",
        text: res.data.message || "Category added successfully!",
        icon: "success",
        background: "#f0fdf4",
        color: "#166534",
        confirmButtonColor: "#16a34a",
        confirmButtonText: "Great!",
        timer: 2500,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        parent_category_id: "",
        brand: "",
        partType: "",
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
        description: "",
        images: [],
      });
      setStep(1);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Something went wrong.",
        icon: "error",
        background: "#fef2f2",
        color: "#991b1b",
        confirmButtonColor: "#dc2626",
        confirmButtonText: "Try Again",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

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

  const start = (step - 1) * 5;
  const currentFields = allFields.slice(start, start + 5);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Step {step}</h2>

      {/* Parent Category */}
      {step === 1 && (
        <div className="mb-4">
          <label className="block text-sm mb-1">Parent Category</label>
          <select
            name="parent_category_id"
            value={formData.parent_category_id}
            onChange={handleChange}
            className="w-full border rounded p-2 max-h-48 overflow-y-auto"
            size={Math.min(categories.length + 1, 6)}
          >
            <option value="">-- Select Parent Category --</option>
            {flattenCategories(categories).map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Current Step Fields */}
      {currentFields.map((field) => (
        <div key={field.name} className="mb-">
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

      {/* File Upload & Thumbnail Preview */}
      {step === Math.ceil(allFields.length / 5) && (
        <div className="mb-4">
          <label className="block text-sm mb-1">Images</label>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                images: [...prev.images, ...Array.from(e.target.files)],
              }))
            }
          />
          <div className="flex flex-wrap gap-2 mt-5 max-h-64 overflow-y-auto">
            {formData.images.length > 0 &&
              formData.images.map((file, index) => (
                <div key={index} className="relative w-20 h-20">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover rounded-full border"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        images: prev.images.filter((_, i) => i !== index),
                      }))
                    }
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 shadow-lg z-10"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {step < Math.ceil(allFields.length / 5) ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
