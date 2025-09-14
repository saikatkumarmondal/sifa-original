// src/components/SparePartDetails.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ChildItem from "./ChildItem";

const getMainImage = (part) => {
  if (part?.images?.length > 0) return part.images[0];
  if (part?.image) return part.image;
  return null;
};

const SparePartDetails = ({ allParts = [] }) => {
  const location = useLocation();
  const initialFromLocation = location.state?.sparePart ?? null;

  const [selectedPart, setSelectedPart] = useState(
    initialFromLocation ?? allParts[0] ?? null
  );
  const [globalExpand, setGlobalExpand] = useState(null);

  useEffect(() => {
    if (initialFromLocation) {
      setSelectedPart(initialFromLocation);
    } else if (!selectedPart && allParts.length > 0) {
      setSelectedPart(allParts[0]);
    }
  }, [initialFromLocation, allParts]);

  if (!selectedPart)
    return (
      <p className="p-6 text-center text-gray-500 italic">
        No spare part selected.
      </p>
    );

  const mainImage = getMainImage(selectedPart);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <main className="col-span-9">
        <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.01]">
          {mainImage && (
            <figure className="mb-6 rounded overflow-hidden">
              <img
                src={mainImage}
                alt={selectedPart.title}
                className="object-contain h-80 w-full rounded-lg border border-gray-200"
              />
            </figure>
          )}

          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            {selectedPart.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            {selectedPart.description}
          </p>

          {/* Extra images */}
          {selectedPart?.images?.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {selectedPart.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedPart.title}-${i}`}
                  className="w-28 h-28 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          )}

          {/* Children + global expand/collapse */}
          {selectedPart.children?.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-xl text-gray-700">
                  Children Parts
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => setGlobalExpand(true)}
                    className="px-4 py-2 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 shadow"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={() => setGlobalExpand(false)}
                    className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 shadow"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              <ul className="space-y-3">
                {selectedPart.children?.length > 1 && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-xl text-gray-700">
                        Children Parts
                      </h3>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setGlobalExpand(true)}
                          className="px-4 py-2 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 shadow"
                        >
                          Expand All
                        </button>
                        <button
                          onClick={() => setGlobalExpand(false)}
                          className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 shadow"
                        >
                          Collapse All
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {selectedPart.children.map((child, i) => (
                        <ChildItem
                          key={child._id || `${child.title}-${i}`}
                          child={child}
                          index={i}
                          globalExpand={globalExpand}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SparePartDetails;
