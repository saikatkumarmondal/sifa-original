import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

import { FaArrowLeft } from "react-icons/fa";
import axiosInstance from "../api/axiosInstance";

const SparepartById = () => {
  const { id } = useParams();
  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPart = async () => {
      try {
        const res = await axiosInstance.get(`/spare-parts/${id}`);
        setPart(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || "Failed to fetch spare part");
        setLoading(false);
      }
    };
    fetchPart();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10">Loading spare part...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!part) return <p className="text-center mt-10">No spare part found.</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/dashboard/all-spareParts"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700"
        >
          <FaArrowLeft /> Back to Spare Parts
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 p-6">
          <h1 className="text-3xl font-bold">{part.name}</h1>
          <p className="text-gray-600 mt-1">
            Category:{" "}
            <span className="font-semibold">
              {part.categoryId?.name || "N/A"}
            </span>
          </p>
          <p className="text-gray-600 mt-1">
            Brand: <span className="font-semibold">{part.brand || "N/A"}</span>
          </p>
        </div>

        {/* Images */}
        {part.images?.length > 0 && (
          <div className="flex flex-wrap gap-4 p-6 justify-center">
            {part.images.map((img, index) => (
              <img
                key={index}
                src={`http://nbsifa.comuploads/${img}`}
                alt={part.name}
                className="w-40 h-40 object-cover rounded shadow-sm"
              />
            ))}
          </div>
        )}

        {/* Details */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-200">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Part Type:</span>{" "}
              {part.partType || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Material:</span>{" "}
              {part.material || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span>{" "}
              {part.dimensions || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Install Size:</span>{" "}
              {part.installSize || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Faceplate Size:</span>{" "}
              {part.faceplateSize || "N/A"}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Weight:</span>{" "}
              {part.weight || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Application:</span>{" "}
              {part.application || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {part.warrantyTime || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Certificates:</span>{" "}
              {part.certificates || "N/A"}
            </p>
            <p>
              <span className="font-semibold">MOQ:</span> {part.moq || "N/A"}
            </p>
          </div>
        </div>

        {/* Description */}
        {part.description && (
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{part.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SparepartById;
