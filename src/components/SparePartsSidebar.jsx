import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const SidebarItem = ({ item, level = 0, selectedId, onItemClick }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const hasGrandchildren = hasChildren
    ? item.children.some((child) => child.children && child.children.length > 0)
    : false;

  return (
    <div className="mb-1" style={{ paddingLeft: `${level * 16}px` }}>
      <motion.button
        onClick={() => {
          if (!hasChildren) {
            // Leaf → navigate to details
            onItemClick(item._id, "details");
          } else if (hasGrandchildren) {
            // Parent with children having grandchildren → expand only
            setOpen(!open);
          } else {
            // Parent with only children → show in grid
            onItemClick(item._id, "grid");
            setOpen(!open);
          }
        }}
        className={`w-full flex items-center py-2 px-3 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-teal-500 ${
          selectedId === item._id ? "bg-teal-100" : "bg-white"
        }`}
      >
        <span className="flex-1 text-gray-800 font-semibold truncate">
          {item.name}
        </span>
        {hasChildren &&
          (open ? (
            <HiChevronDown className="text-teal-500 w-4 h-4 ml-2" />
          ) : (
            <HiChevronRight className="text-gray-400 w-4 h-4 ml-2" />
          ))}
      </motion.button>

      {hasChildren && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          className="overflow-hidden ml-4 border-l border-teal-100"
        >
          {item.children.map((child) => (
            <SidebarItem
              key={child._id}
              item={child}
              level={level + 1}
              selectedId={selectedId}
              onItemClick={onItemClick}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const SparePartsSidebar = ({ selectedId }) => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/get-categories");
      if (!res.data.success) throw new Error(res.data.message || "Failed");
      return res.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const handleItemClick = (id, type) => {
    if (type === "details") {
      navigate(`/spare-parts/${id}`);
    } else if (type === "grid") {
      navigate(`/spare-parts-grid/${id}`);
    }
  };

  if (isLoading) return <p className="p-4 text-gray-500">Loading...</p>;
  if (isError)
    return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-72 h-screen p-6 bg-white border-r border-teal-100 shadow-xl flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 rounded-xl">
      <h2 className="text-2xl font-bold text-teal-700 mb-6 border-b border-teal-200 pb-4">
        Parts Inventory
      </h2>
      <div className="space-y-1">
        {data?.map((category) => (
          <SidebarItem
            key={category._id}
            item={category}
            selectedId={selectedId}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SparePartsSidebar;
