// src/components/ChildItem.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const getMainImage = (part) => {
  if (part?.images?.length > 0) return part.images[0];
  if (part?.image) return part.image;
  return null;
};

const ChildItem = ({ child, index = 0, globalExpand = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const childImg = getMainImage(child);

  // Sync with global expand/collapse state (null = no change)
  useEffect(() => {
    if (globalExpand === true) setIsOpen(true);
    if (globalExpand === false) setIsOpen(false);
  }, [globalExpand]);

  return (
    <li className="border-l border-gray-300 pl-2">
      <div className="flex items-center gap-2">
        {child.children?.length > 0 && (
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-sm font-bold w-6 h-6 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? "−" : "+"}
          </button>
        )}

        {childImg && (
          <img
            src={childImg}
            alt={child.title}
            className="w-10 h-10 object-cover rounded"
            onError={(e) => {
              // friendly fallback if image path is relative
              /* e.target.src = '/fallback.jpg' */
            }}
          />
        )}

        <Link
          to={`/spareparts/${child._id || `${child.title}-${index}`}`}
          state={{ sparePart: child }}
          className="font-medium text-blue-600 hover:underline"
        >
          {child.title}
        </Link>
      </div>

      {child.children?.length > 0 && isOpen && (
        <ul className="ml-6 mt-2 space-y-2">
          {child.children.map((nested, i) => (
            <ChildItem
              key={nested._id || `${nested.title}-${i}`}
              child={nested}
              index={i}
              globalExpand={globalExpand}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ChildItem;
