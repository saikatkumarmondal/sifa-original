import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

export default function SparePartsDropdown() {
  const [spareParts, setSpareParts] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeParent, setActiveParent] = useState(null);
  const [activeChild, setActiveChild] = useState(null);

  useEffect(() => {
    fetch("http://148.66.154.205:7777/get-categories")
      .then((res) => res.json())
      .then((data) => setSpareParts(Array.isArray(data.data) ? data.data : []))
      .catch(() => setSpareParts([]));
  }, []);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => {
        setOpenDropdown(false);
        setActiveParent(null);
        setActiveChild(null);
      }}
    >
      <button className="flex items-center cursor-pointer text-gray-800 hover:text-blue-600">
        Spare Parts <HiChevronDown className="ml-1" />
      </button>

      {openDropdown && (
        <div className="absolute left-0 top-full mt-2 flex bg-white shadow-lg rounded z-50">
          {/* Parent List */}
          <ul className="w-[120px] border-r max-h-72 overflow-y-auto">
            {spareParts.map((parent) => (
              <li
                key={parent._id}
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseEnter={() => {
                  setActiveParent(parent);
                  setActiveChild(null);
                }}
              >
                <Link
                  to={`/spareparts/${parent._id}`}
                  className="flex justify-between items-center text-gray-800 hover:text-blue-600"
                >
                  {parent.name}
                  {parent.children?.length > 0 && <HiChevronRight />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Child List */}
          {activeParent && activeParent.children?.length > 0 && (
            <ul className="w-[120px] border-r max-h-72 overflow-y-auto">
              {activeParent.children.map((child) => (
                <li
                  key={child._id}
                  className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseEnter={() => setActiveChild(child)}
                >
                  <Link
                    to={`/spareparts/${child._id}`}
                    className="flex justify-between items-center text-gray-800 hover:text-blue-600"
                  >
                    {child.name}
                    {child.children?.length > 0 && <HiChevronRight />}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Grandchild List */}
          {activeChild && activeChild.children?.length > 0 && (
            <ul className="w-[120px] max-h-72 overflow-y-auto">
              {activeChild.children.map((grandchild) => (
                <li
                  key={grandchild._id}
                  className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link
                    to={`/spareparts/${grandchild._id}`}
                    className="text-gray-800 hover:text-blue-600"
                  >
                    {grandchild.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}
