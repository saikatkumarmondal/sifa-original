import React, { useState } from "react";
import { useNavigate } from "react-router";

const NestedCategory = ({ category }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const hasChildren = category.children && category.children.length > 0;

  return (
    <li className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          if (hasChildren) {
            setOpen(!open);
          } else {
            // Navigate to SparePartDetails page
            navigate(`/spareparts/${category._id}`);
          }
        }}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center rounded-md"
      >
        <div className="flex items-center gap-2">
          {category.image && (
            <img
              src={`http://localhost:7777/${category.image}`}
              alt={category.name}
              className="w-6 h-6 object-cover rounded"
            />
          )}
          <span>{category.name}</span>
        </div>
        {hasChildren && <span>{open ? "▲" : "▼"}</span>}
      </div>

      {hasChildren && open && (
        <ul className="ml-4 mt-1 border-l border-gray-200">
          {category.children.map((child) => (
            <NestedCategory key={child._id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NestedCategory;
