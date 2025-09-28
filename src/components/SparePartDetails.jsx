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
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:7777/category/${id}`);
        if (res.data.success) {
          setCategory(res.data.data);

          // Set first image as mainImage by default
          if (res.data.data.images?.length > 0) {
            setMainImage(res.data.data.images[0]);
          } else if (res.data.data.image) {
            setMainImage(res.data.data.image);
          }
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
    <div class="grid grid-cols-12 text-black p-8 rounded-xl shadow-2xl border-t-4 border-yellow-500 max-w-9xl mx-auto">
      <div
        class="col-span-12 md:col-span-3 
                text-center md:text-right 
                border-b-2 md:border-b-0 md:border-r-2 
                border-yellow-600 
                pb-4 md:pb-0 md:pr-4"
      >
        <h1
          class="text-3xl md:text-5xl font-extrabold 
                   text-yellow-400 
                   tracking-widest uppercase"
        >
          Om Namah Shivaya
        </h1>
      </div>

      <div
        class="col-span-12 md:col-span-9 
                text-center md:text-left 
                pt-4 md:pt-0 md:pl-6 
                flex items-center"
      >
        <div className="flex justify-center items-center">
          <div>
            {/* image */}
            <figure className="px-10 pt-10 cursor-pointer flex justify-center items-center">
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
          </div>
          <div className="">
            <h2 className="text-4xl">{category.name}</h2>
            <p>
              <strong>Brand:</strong> <span>{category.brand}</span>
            </p>
            <p>
              <strong>Brand:</strong> <span>{category.brand}</span>
            </p>
            <p>
              <strong>Brand:</strong> <span>{category.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartDetails;
