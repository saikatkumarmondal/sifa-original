import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SparePartsForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
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
    deliveryTime: "", // will store as string (YYYY-MM-DD)
    categoryId: "",
  });
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File input handler
  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // deliveryTime is already a string "YYYY-MM-DD"
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    Array.from(images).forEach((img) => data.append("images", img));

    try {
      await axiosInstance.post("/spare-parts", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      MySwal.fire({
        html: (
          <p className="text-green-700 text-lg font-semibold">
            Spare part created successfully!
          </p>
        ),
        icon: "success",
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
          popup: "bg-green-50 border border-green-300 rounded-lg p-6 shadow-lg",
          confirmButton:
            "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md",
        },
      });

      // Reset all fields after success
      setFormData({
        name: "",
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
        deliveryTime: "",
        categoryId: "",
      });
      setImages([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      MySwal.fire({
        html: (
          <p className="text-red-700 text-lg font-semibold">
            Failed to create spare part
          </p>
        ),
        icon: "error",
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
          popup: "bg-red-50 border border-red-300 rounded-lg p-6 shadow-lg",
          confirmButton:
            "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md",
        },
      });
    }
  };

  const renderCategoryOptions = (cats, prefix = "") =>
    cats.map((cat) => (
      <React.Fragment key={cat._id}>
        <option value={cat._id}>{prefix + cat.name}</option>
        {cat.children && renderCategoryOptions(cat.children, prefix + "— ")}
      </React.Fragment>
    ));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">🧩 Add New Spare Part</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Spare Part Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        {/* Brand */}
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Category */}
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          {renderCategoryOptions(categories)}
        </select>

        {/* Part Type */}
        <input
          type="text"
          name="partType"
          placeholder="Part Type"
          value={formData.partType}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Material */}
        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Dimensions */}
        <input
          type="text"
          name="dimensions"
          placeholder="Dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Install Size */}
        <input
          type="text"
          name="installSize"
          placeholder="Install Size"
          value={formData.installSize}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Faceplate Size */}
        <input
          type="text"
          name="faceplateSize"
          placeholder="Faceplate Size"
          value={formData.faceplateSize}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Weight */}
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Application */}
        <input
          type="text"
          name="application"
          placeholder="Application"
          value={formData.application}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Warranty */}
        <input
          type="text"
          name="warrantyTime"
          placeholder="Warranty Time"
          value={formData.warrantyTime}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Certificates */}
        <input
          type="text"
          name="certificates"
          placeholder="Certificates"
          value={formData.certificates}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* MOQ */}
        <input
          type="text"
          name="moq"
          placeholder="Minimum Order Quantity"
          value={formData.moq}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Shipping Terms */}
        <input
          type="text"
          name="shippingTerms"
          placeholder="Shipping Terms"
          value={formData.shippingTerms}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Payment Terms */}
        <input
          type="text"
          name="paymentTerms"
          placeholder="Payment Terms"
          value={formData.paymentTerms}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Currency */}
        <input
          type="text"
          name="paymentCurrency"
          placeholder="Payment Currency"
          value={formData.paymentCurrency}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Packing */}
        <input
          type="text"
          name="packing"
          placeholder="Packing Details"
          value={formData.packing}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Delivery Time */}
        <input
          type="text"
          name="deliveryTime"
          placeholder="Delivery Time"
          value={formData.deliveryTime}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        {/* Images */}
        <div className="md:col-span-2">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
            ref={fileInputRef}
          />
          <div className="flex flex-wrap gap-3 mt-3">
            {Array.from(images).map((file, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-full overflow-hidden border border-base-300 shadow-sm cursor-pointer group"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover rounded-full"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newImages = Array.from(images).filter(
                      (_, i) => i !== index
                    );
                    setImages(newImages);
                  }}
                  className="absolute top-[10px] right-[10px] bg-red-500/85 text-white rounded-full p-[3px] text-[10px] hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full md:col-span-2">
          Add Spare Part
        </button>
      </form>
    </div>
  );
};

export default SparePartsForm;
