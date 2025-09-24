// NestedCategory.jsx
import React from "react";

const NestedCategory = ({ category }) => {
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li className="relative group">
      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <span>{category.name}</span>
        {hasChildren && <span className="ml-2">▸</span>}
      </div>

      {hasChildren && (
        <ul className="absolute  top-0 left-full ml-1 hidden group-hover:block bg-white border rounded shadow-lg z-50 w-[250px] max-h-[400px] ">
          {category.children.map((child) => (
            <NestedCategory key={child._id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NestedCategory;
