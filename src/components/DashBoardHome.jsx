import React, { useState, useEffect } from "react";
import { FaListAlt, FaBoxes, FaPlusCircle } from "react-icons/fa"; // Added FaPlusCircle
import { Link } from "react-router";
import { GiGearHammer } from "react-icons/gi";
import axiosInstance from "../api/axiosInstance"; // ADDED: Import axiosInstance

const DashBoardHome = () => {
  const [categoryCount, setCategoryCount] = useState(0);
  const [sparePartCount, setSparePartCount] = useState(0);

  // Fetch counts from the API on mount
  useEffect(() => {
    // Fetch Category Count
    axiosInstance
      .get("/categories/")
      .then((res) => {
        // Assuming the response is an array of categories
        setCategoryCount(res.data.length);
      })
      .catch((err) => console.error("Failed to fetch category count:", err));

    // Fetch Spare Parts Count
    axiosInstance
      .get("/spare-parts/")
      .then((res) => {
        // Assuming the response is an array of spare parts
        setSparePartCount(res.data.length);
      })
      .catch((err) => console.error("Failed to fetch spare part count:", err));
  }, []);

  return (
    <div className="p-4">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Overview Metrics
      </h3>

      <div className="flex flex-wrap gap-6 mt-4">
        {/* Card 1: All Categories - View and Count */}
        <Link
          to="/dashboard/all-categories"
          className="
            h-32 w-60 
            bg-white 
            border-l-4 border-amber-500 
            flex flex-col justify-between 
            p-5 
            rounded-lg 
            shadow-xl 
            cursor-pointer 
            transition-all 
            duration-300
            transform 
            hover:scale-[1.03] 
            hover:shadow-2xl 
            relative
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500 uppercase">
              Product Categories
            </span>
            <GiGearHammer className="text-amber-500 opacity-80" size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800">
              Total {categoryCount}
            </span>
            <span className="text-xs text-amber-600 font-semibold mt-1">
              View & Manage →
            </span>
          </div>
        </Link>

        {/* Card 2: All Spare Parts - View and Count */}
        <Link
          to="/dashboard/all-spareparts"
          className="
            h-32 w-60 
            bg-white 
            border-l-4 border-green-500 
            flex flex-col justify-between 
            p-5 
            rounded-lg 
            shadow-xl 
            cursor-pointer 
            transition-all 
            duration-300
            transform 
            hover:scale-[1.03] 
            hover:shadow-2xl 
            relative
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500 uppercase">
              All Spare Parts
            </span>
            <FaListAlt className="text-green-500 opacity-80" size={30} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800">
              Total {sparePartCount}
            </span>
            <span className="text-xs text-green-600 font-semibold mt-1">
              View & Manage →
            </span>
          </div>
        </Link>

        {/* Card 3: Add New Category */}
        <Link
          to="/dashboard/add-category"
          className="
            h-32 w-60 
            bg-white 
            border-l-4 border-blue-500 
            flex flex-col justify-between 
            p-5 
            rounded-lg 
            shadow-xl 
            cursor-pointer 
            transition-all 
            duration-300
            transform 
            hover:scale-[1.03] 
            hover:shadow-2xl 
            relative
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500 uppercase">
              Add New Category
            </span>
            <FaBoxes className="text-blue-500 opacity-80" size={30} />
          </div>
          <div className="flex flex-col mt-4">
            <Link
              to="/dashboard/add-spareParts"
              className="text-base text-blue-600 font-semibold"
            >
              Go to Form →
            </Link>
          </div>
        </Link>

        {/* Card 4: Add New Spare Part */}
        <Link
          to="/dashboard/add-spareParts"
          className="
            h-32 w-60 
            bg-white 
            border-l-4 border-pink-500 
            flex flex-col justify-between 
            p-5 
            rounded-lg 
            shadow-xl 
            cursor-pointer 
            transition-all 
            duration-300
            transform 
            hover:scale-[1.03] 
            hover:shadow-2xl 
            relative
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500 uppercase">
              Add New Spare Part
            </span>
            <FaPlusCircle className="text-pink-500 opacity-80" size={30} />
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-base text-pink-600 font-semibold">
              Go to Form →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardHome;
