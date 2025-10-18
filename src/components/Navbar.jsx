// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [spareParts, setSpareParts] = useState([]);
  const [activeParentId, setActiveParentId] = useState(null); // For desktop Spare Parts click
  const [activeChildId, setActiveChildId] = useState(null); // For child click to show grandchild

  useEffect(() => {
    fetch("http://148.66.154.205:7777/get-categories")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) setSpareParts(data.data);
        else setSpareParts([]);
      })
      .catch((err) => {
        console.error("Error fetching spare parts:", err);
        setSpareParts([]);
      });
  }, []);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50 text-black">
      <nav className="w-full relative">
        <div className="w-full px-4 lg:px-8 py-3 flex items-center justify-between">
          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* DESKTOP MENU */}
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
                    className="block px-4 py-2.5 text-gray-800 font-medium rounded-md transition-all duration-200 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:text-green-800 shadow hover:shadow-md"
                  >
                    Indoor Escalator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escalator/out-door"
                    className="block px-4 py-2.5 text-gray-800 font-medium rounded-md transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 shadow hover:shadow-md"
                  >
                    Outdoor Escalator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/escalator/moving-walks"
                    className="block px-4 py-2.5 text-gray-800 font-medium rounded-md transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-200 hover:text-purple-800 shadow hover:shadow-md"
                  >
                    Moving Walks
                  </Link>
                </li>
              </ul>
            </li>

            {/* Spare Parts - Click-to-open Grid Dropdown with correct routes */}
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Spare Parts
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {spareParts.length === 0 ? (
                <div className="absolute left-0 top-full bg-white shadow-lg w-44 p-4 text-sm text-gray-600 rounded hidden group-hover:block z-50">
                  No categories
                </div>
              ) : (
                <ul className="absolute left-0 top-full w-56 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover:block z-50 border border-gray-200">
                  {spareParts.map((parent) => (
                    <li key={parent._id} className="relative group/parent">
                      <Link
                        to={`/spare-parts/${parent._id}`}
                        className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-green-100 hover:text-green-800 rounded-md transition-all duration-200"
                      >
                        {parent.name}
                        {parent.children?.length > 0 && (
                          <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                        )}
                      </Link>
                      {/* Child flyout */}
                      {parent.children?.length > 0 && (
                        <ul className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 hidden group-hover/parent:block z-50">
                          {parent.children.map((child) => (
                            <li
                              key={child._id}
                              className="relative group/child"
                            >
                              <Link
                                to={`/spare-parts/${child._id}`}
                                className="flex justify-between items-center px-4 py-2.5 text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-md transition-all duration-200"
                              >
                                {child.name}
                                {child.children?.length > 0 && (
                                  <HiChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                )}
                              </Link>
                              {/* Grandchild flyout */}
                              {child.children?.length > 0 && (
                                <ul className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 hidden group-hover/child:block z-50">
                                  {child.children.map((grand) => (
                                    <li key={grand._id}>
                                      <Link
                                        to={`/spare-parts/${grand._id}`}
                                        className="block px-4 py-2.5 text-gray-700 hover:bg-purple-100 hover:text-purple-800 rounded-md transition-all duration-200"
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

        {/* MOBILE MENU remains unchanged */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            {/* ...mobile menu code unchanged */}
          </div>
        )}
      </nav>
    </header>
  );
}
