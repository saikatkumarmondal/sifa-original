import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const CategoryDropdown = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);

  // 1️⃣ Fetch categories when the component loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/get-categories");
        setCategories(res.data.data); // save nested categories
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  // 2️⃣ Function to render categories recursively
  const renderCategories = (cats) => {
    return (
      <ul className="pl-4">
        {cats.map((cat) => (
          <li key={cat._id} className="relative group">
            {/* Call onSelect when user clicks */}
            <button
              onClick={() => onSelect(cat)}
              className="py-1 px-2 hover:bg-gray-200 rounded w-full text-left"
            >
              {cat.name}
            </button>

            {/* If there are children, show them on hover */}
            {cat.children && cat.children.length > 0 && (
              <div className="absolute top-0 left-full hidden group-hover:block bg-white shadow-lg z-10">
                {renderCategories(cat.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="relative">{renderCategories(categories)}</div>;
};

export default CategoryDropdown;
