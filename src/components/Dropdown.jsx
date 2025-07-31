import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative list-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
      <button className="text-black font-semibold px-4 py-2 hover:text-blue-600">
        {title}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded shadow z-50 overflow-y-auto max-h-60 p-2 space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="relative group">
              <div className="flex justify-between items-center px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                {item.label}
                {item.submenu && <span className="ml-2">▶</span>}
              </div>

              {/* Submenu */}
              {item.submenu && (
                <ul className="absolute top-0 left-full ml-2 w-56 bg-white shadow rounded z-50 overflow-y-auto max-h-60 p-2 space-y-1 hidden group-hover:block">
                  {item.submenu.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
