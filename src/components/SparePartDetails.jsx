import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "./Loading";
import { FaCogs, FaTimes } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const SparePartDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomed, setZoomed] = useState(false); // track image zoom state

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:7777/category/${id}`);
        if (res.data.success) {
          setCategory(res.data.data);
        } else {
          setError("Category not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex justify-center p-6 relative">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl rounded-2xl">
        {/* Image Section */}
        <figure className="px-10 pt-10 cursor-pointer">
          {category.image ? (
            <img
              src={`http://localhost:7777/${category.image}`}
              alt={category.name}
              className="rounded-xl w-full h-96 object-contain transition-transform duration-300 hover:scale-105"
              onClick={() => setZoomed(true)} // open zoom
            />
          ) : (
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-xl">
              <FaCogs className="text-6xl text-gray-400" />
            </div>
          )}
        </figure>

        {/* Content Section */}
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaCogs className="text-green-600" />
            {category.name}
          </h2>

          {/* Description */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700 mb-2">
              <MdDescription className="text-blue-500" /> Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {category.description
                ? category.description
                : "No description available for this spare part. Please contact support for more details."}
            </p>
          </div>

          {/* Subcategories */}
          {category.children && category.children.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Sub Categories
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
                {category.children.map((child) => (
                  <li key={child._id}>{child.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400"
            onClick={() => setZoomed(false)}
          >
            <FaTimes />
          </button>
          <img
            src={`http://localhost:7777/${category.image}`}
            alt={category.name}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default SparePartDetails;
