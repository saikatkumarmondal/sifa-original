// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight, HiMenu, HiX } from "react-icons/hi";
import axiosInstance from "../api/axiosInstance";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sparePartsCategories, setSparePartsCategories] = useState([]);
  const [openParent, setOpenParent] = useState(null);
  const [openChild, setOpenChild] = useState(null);
  const [isSparePartsOpen, setIsSparePartsOpen] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/categories/")
      .then((res) => {
        console.log("✅ Categories fetched successfully:", res.data);
        setSparePartsCategories(res.data);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch categories:", err.message);
        setSparePartsCategories([]);
      });
  }, []);

  const toggleParent = (id) => {
    setOpenParent(openParent === id ? null : id);
    setOpenChild(null);
  };

  const toggleChild = (id) => {
    setOpenChild(openChild === id ? null : id);
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50 text-black">
      <nav className="w-full relative">
        <div className="w-full px-4 lg:px-8 py-3 flex items-center justify-between">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          <ul className="hidden lg:flex lg:flex-1 items-center justify-around gap-6 relative">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>

            {/* Elevator */}
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Elevator
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded hidden group-hover:block z-50">
                {[
                  "Passenger",
                  "Villa",
                  "Panoramic",
                  "Hospital",
                  "Freight",
                  "Hydraulic",
                ].map((name, i) => (
                  <li key={i}>
                    <Link
                      to={`/elevators/${name.toLowerCase()}`}
                      className="block px-3 py-2 hover:bg-gray-50"
                    >
                      {name} Elevator
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Escalator */}
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Escalator
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded hidden group-hover:block z-50">
                <li>
                  <Link
                    to="/escalator/indoor"
                    className="block px-4 py-2.5 hover:bg-gray-100"
                  >
                    Indoor Escalator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escalator/out-door"
                    className="block px-4 py-2.5 hover:bg-gray-100"
                  >
                    Outdoor Escalator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escalator/moving-walks"
                    className="block px-4 py-2.5 hover:bg-gray-100"
                  >
                    Moving Walks
                  </Link>
                </li>
              </ul>
            </li>

            {/* Spare Parts */}
            <li
              className="relative group"
              onMouseEnter={() => setIsSparePartsOpen(true)}
              onMouseLeave={() => setIsSparePartsOpen(false)}
            >
              <button
                className="flex items-center cursor-pointer whitespace-normal"
                onClick={() => setIsSparePartsOpen(!isSparePartsOpen)}
              >
                Spare Parts
                <HiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    isSparePartsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {sparePartsCategories.length === 0 ? (
                <div className="absolute left-0 top-full bg-white shadow-lg w-44 p-4 text-sm text-gray-600 rounded hidden group-hover:block z-50 whitespace-normal">
                  No categories
                </div>
              ) : (
                <ul
                  className={`absolute left-0 top-full w-56 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg border border-gray-200 z-50 transition-all duration-300 ${
                    isSparePartsOpen ? "block" : "hidden group-hover:block"
                  } whitespace-normal`}
                >
                  {sparePartsCategories.map((parent) => (
                    <li
                      key={parent._id}
                      className="relative group/parent whitespace-normal"
                    >
                      {parent.children?.length > 0 ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleParent(parent._id);
                            }}
                            className="flex justify-between items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150 whitespace-normal"
                          >
                            <span>{parent.name}</span>
                            <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                          </button>

                          <ul
                            className={`absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 transition-all duration-200 ${
                              openParent === parent._id
                                ? "block"
                                : "hidden group/parent:hover:block"
                            } whitespace-normal`}
                          >
                            {parent.children.map((child) => (
                              <li
                                key={child._id}
                                className="relative group/child whitespace-normal"
                              >
                                {child.children?.length > 0 ? (
                                  <>
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleChild(child._id);
                                      }}
                                      className="flex justify-between items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150 whitespace-normal"
                                    >
                                      <span>{child.name}</span>
                                      <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                                    </button>

                                    <ul
                                      className={`absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 transition-all duration-200 ${
                                        openChild === child._id
                                          ? "block"
                                          : "hidden group/child:hover:block"
                                      } whitespace-normal`}
                                    >
                                      {child.children.map((grand) => (
                                        <li
                                          key={grand._id}
                                          className="whitespace-normal"
                                        >
                                          <Link
                                            to={`/spare-parts-grid/${grand._id}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150 whitespace-normal"
                                          >
                                            {grand.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <Link
                                    to={`/spare-parts-grid/${child._id}`}
                                    className="flex justify-between items-center px-4 py-2.5 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition-all duration-200 whitespace-normal"
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          to={`/spare-parts-grid/${parent._id}`}
                          className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-green-100 hover:text-green-800 rounded-md transition-all duration-200 whitespace-normal"
                        >
                          {parent.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/career" className="hover:text-blue-600">
                Career
              </Link>
            </li>
            <li>
              <Link to="/newsroom" className="hover:text-blue-600">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/newsroom">Newsroom</Link>
              </li>
              <li>
                <span className="font-medium">Spare Parts</span>
                <ul className="ml-4 mt-2 flex flex-col gap-1">
                  {sparePartsCategories.map((parent) => (
                    <li key={parent._id}>
                      <Link to={`/spare-parts-grid/${parent._id}`}>
                        {parent.name}
                      </Link>
                      {parent.children?.length > 0 && (
                        <ul className="ml-4 mt-1 flex flex-col gap-1">
                          {parent.children.map((child) => (
                            <li key={child._id}>
                              <Link to={`/spare-parts-grid/${child._id}`}>
                                {child.name}
                              </Link>
                              {child.children?.length > 0 && (
                                <ul className="ml-4 mt-1 flex flex-col gap-1">
                                  {child.children.map((grand) => (
                                    <li key={grand._id}>
                                      <Link
                                        to={`/spare-parts-grid/${grand._id}`}
                                      >
                                        {grand.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
