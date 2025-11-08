import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../api/axiosInstance";

export default function SparePartsSidebar() {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setCategories([]);
      });
  }, []);

  const toggleExpand = (categoryId) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const isCategoryActive = (categoryId, children) => {
    if (String(categoryId) === id) return true;
    if (children) {
      return children.some((child) =>
        isCategoryActive(child._id, child.children)
      );
    }
    return false;
  };

  const renderChildren = (children, level = 1) => {
    if (!children || children.length === 0) return null;

    return (
      <ul className={`ml-${level * 4} mt-1 space-y-1 w-full`}>
        {children.map((child) => {
          const isActive = String(child._id) === id;
          const isExpandable = child.children?.length > 0;

          const baseClasses =
            "flex items-center justify-between cursor-pointer px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out w-full";
          const hoverClasses = "hover:bg-green-50 hover:text-green-700";
          const activeClasses = isActive
            ? "bg-green-600 text-white font-medium shadow-sm"
            : "text-gray-700";
          const iconClasses = isActive ? "text-white" : "text-gray-400";

          return (
            <li key={child._id} className="w-full">
              <div
                className={`${baseClasses} ${hoverClasses} ${activeClasses}`}
                onClick={() =>
                  isExpandable
                    ? toggleExpand(child._id)
                    : navigate(`/spare-parts-grid/${child._id}`)
                }
              >
                <span className="flex-1 text-left text-sm">{child.name}</span>
                {isExpandable && (
                  <motion.div
                    animate={{ rotate: expanded[child._id] ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiChevronRight className={`h-5 w-5 ${iconClasses}`} />
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {expanded[child._id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {renderChildren(child.children, level + 1)}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <aside className="w-80 bg-sky-300 shadow-lg border-r border-gray-200 overflow-y-auto p-4 flex flex-col items-center rounded-4xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 w-full text-center pb-2 whitespace-nowrap">
        Spare Parts Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-sm text-gray-500 text-center mt-2">
          No categories available.
        </p>
      ) : (
        <ul className="space-y-1 w-full">
          {categories.map((parent) => {
            const isActive =
              String(parent._id) === id ||
              isCategoryActive(null, parent.children);
            const isExpandable = parent.children?.length > 0;

            const baseClasses =
              "flex items-center justify-between cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ease-in-out w-full";
            const hoverClasses = "hover:bg-green-50 hover:text-green-700";
            const activeClasses = isActive
              ? "bg-green-600 text-white font-semibold shadow-md"
              : "text-gray-800 font-medium";
            const iconClasses = isActive ? "text-white" : "text-gray-500";

            return (
              <li key={parent._id} className="w-full">
                <div
                  className={`${baseClasses} ${hoverClasses} ${activeClasses}`}
                  onClick={() =>
                    isExpandable
                      ? toggleExpand(parent._id)
                      : navigate(`/spare-parts-grid/${parent._id}`)
                  }
                >
                  <span className="flex-1 text-left text-base">
                    {parent.name}
                  </span>
                  {isExpandable && (
                    <motion.div
                      animate={{ rotate: expanded[parent._id] ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiChevronRight className={`h-5 w-5 ${iconClasses}`} />
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {expanded[parent._id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {renderChildren(parent.children, 1)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}
