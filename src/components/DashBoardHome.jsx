import React from "react";
import { FaListAlt } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { Link } from "react-router";
const DashBoardHome = () => {
  return (
    <div>
      <div className="flex gap-6 mt-4">
        {/* Box 1: Simple Hover Effect - Icon and Text are side-by-side */}
        <div
          className="
            h-28 w-48 
            bg-amber-600 
            hover:bg-amber-500 
            hover:shadow-xl 
            hover:scale-105 
            transition-all 
            duration-300 
            flex items-center justify-center 
            text-white 
            rounded-lg 
            shadow-lg 
            cursor-pointer
        "
        >
          {/* The icon and text are centered horizontally */}
          <GiGearHammer className="mr-2" size={20} />
          <span className="text-base font-semibold">All Categories</span>
        </div>

        {/* Box 2: Simple Hover Effect - Icon and Text are stacked (flex-col) */}
        <Link
          className="
            h-28 w-48 
            bg-amber-600 
            hover:bg-amber-500 
            hover:shadow-xl 
            hover:scale-105 
            transition-all 
            duration-300 
            flex flex-col items-center justify-center 
            text-white 
            rounded-lg 
            shadow-lg 
            cursor-pointer
        "
        >
          {/* Icon is above the text */}
          <FaListAlt className="text-white mb-1" size={24} />
          <span className="text-base font-semibold">All Categories</span>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardHome;
