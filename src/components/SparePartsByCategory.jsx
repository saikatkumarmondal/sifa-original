import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../api/axiosInstance";

export default function SparePartsByCategory() {
  const { categoryId } = useParams();
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const res = await axiosInstance.get(
          `/categories/${categoryId}/spareparts`
        );
        setParts(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
        setParts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchParts();
  }, [categoryId]);

  if (loading)
    return <p className="text-center mt-10">Loading spare parts...</p>;
  if (!parts.length)
    return <p className="text-center mt-10">No spare parts found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Spare Parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parts.map((part) => (
          <div
            key={part._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={
                part.images?.[0]
                  ? `/uploads/${part.images[0]}`
                  : "/placeholder.png"
              }
              alt={part.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{part.name}</h3>
              <p className="text-sm text-gray-500">
                Category: {part.categoryId?.name || "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                Brand: {part.brand || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
