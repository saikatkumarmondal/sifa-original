// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight, HiMenu, HiX } from "react-icons/hi";
import axiosInstance from "../api/axiosInstance";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [sparePartsCategories, setSparePartsCategories] = useState([]);

  useEffect(() => {
    // Fetch categories (nested)
    axiosInstance
      .get("/categories/")
      .then((res) => setSparePartsCategories(res.data))
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setSparePartsCategories([]);
      });
  }, []);

  const renderChildren = (children) => {
    if (!children || children.length === 0) return null;
    return (
      <ul className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 hidden group-hover:block z-50">
        {children.map((child) => (
          <li key={child._id} className="relative group/child">
            <Link
              to={`/spare-parts-grid/${child._id}`}
              className="flex justify-between items-center px-4 py-2.5 text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-md transition-all duration-200"
            >
              {child.name}
              {child.children?.length > 0 && (
                <HiChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              )}
            </Link>
            {renderChildren(child.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50 text-black">
      <nav className="w-full relative">
        <div className="w-full px-4 lg:px-8 py-3 flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop Menu */}
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
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Spare Parts
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {sparePartsCategories.length === 0 ? (
                <div className="absolute left-0 top-full bg-white shadow-lg w-44 p-4 text-sm text-gray-600 rounded hidden group-hover:block z-50">
                  No categories
                </div>
              ) : (
                <ul className="absolute left-0 top-full w-56 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover:block z-50 border border-gray-200">
                  {sparePartsCategories.map((parent) => (
                    <li key={parent._id} className="relative group/parent">
                      <Link
                        to={`/spare-parts-grid/${parent._id}`}
                        className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-green-100 hover:text-green-800 rounded-md transition-all duration-200"
                      >
                        {parent.name}
                        {parent.children?.length > 0 && (
                          <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                        )}
                      </Link>
                      {renderChildren(parent.children)}
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

        {/* Mobile Menu */}
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
