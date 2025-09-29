import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import Loading from "./Loading";

const ScrollNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // ✅ Added for mobile + nested spare parts
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [mobileDropdowns, setMobileDropdowns] = useState({}); // Nested dropdown states
  const [spareParts, setSpareParts] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setShowNavbar(scrollPercent >= 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fetch spare parts (same for mobile & desktop)
  useEffect(() => {
    fetch("http://localhost:7777/get-categories")
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

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      // No-op: dropdown close logic is now handled by CSS hover
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ toggle for mobile nested
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl  mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
              alt="Sifa Logo"
              className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[80px] lg:h-[45px] object-contain relative -left-9"
            />

            {/* ✅ Desktop Nav */}
            <ul className="hidden md:flex  items-center justify-center whitespace-nowrap space-x-20 text-lg font-medium text-gray-800 relative">
              <li className="hover:text-green-700">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-700">
                <Link to="/about">About Us</Link>
              </li>
              {/* Elevator */}
              <li className="relative cursor-pointer group">
                {/* Dropdown trigger */}
                <button className="flex items-center text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 peer">
                  Elevator
                  <HiChevronDown
                    className="
        ml-1 
        text-gray-500 
        transition-all duration-200 
        peer-hover:rotate-180 group-hover:rotate-180
        peer-hover:text-green-700 group-hover:text-green-700
      "
                  />
                </button>

                {/* Dropdown menu */}
                <ul
                  className="
      absolute left-0 top-full 
      min-w-max
      bg-white 
      shadow-lg 
      rounded-lg 
      border border-gray-100
      invisible opacity-0 
      peer-hover:visible peer-hover:opacity-100
      group-hover:visible group-hover:opacity-100
      transition-all duration-200
      z-50 mt-2 py-2
    "
                >
                  <li>
                    <Link
                      to="/elevators/passenger"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Passenger Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/villa"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Villa Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/panoramic"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Panoramic Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/hospital"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Hospital Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/freight"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Freight Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/hydraulic"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Hydraulic Elevator
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Escalator */}
              <li className="relative cursor-pointer group">
                {/* Dropdown button */}
                <button className="flex items-center text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 peer">
                  Escalator
                  <HiChevronDown className="ml-1 transition-transform duration-200 peer-hover:rotate-180 group-hover:rotate-180" />
                </button>

                {/* Dropdown menu */}
                <ul
                  className="
      absolute left-0 top-full 
      min-w-max
      bg-white 
      shadow-lg 
      rounded-lg 
      border border-gray-100
      invisible opacity-0 
      peer-hover:visible peer-hover:opacity-100
      group-hover:visible group-hover:opacity-100
      transition-all duration-200
      z-50 mt-2 py-2
    "
                >
                  <li>
                    <Link
                      to="/escalator/indoor"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Indoor Escalator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/escalator/out-door"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Outdoor Escalator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/escalator/moving-walks"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all duration-200"
                    >
                      Moving Walk
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Spare Parts (from Navbar.jsx) */}
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
                      <li key={parent._id} className="relative group/child">
                        <Link
                          to={`/spare-parts/${parent._id}`}
                          className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:text-green-800 rounded-md transition-all duration-200"
                        >
                          {parent.name}
                          {parent.children?.length > 0 && (
                            <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                          )}
                        </Link>
                        {/* Child Level */}
                        {parent.children?.length > 0 && (
                          <ul className="absolute left-full top-0 w-44 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover/child:block z-50 border border-gray-200">
                            {parent.children.map((child) => (
                              <li
                                key={child._id}
                                className="relative group/grand"
                              >
                                <Link
                                  to={`/spare-parts/${child._id}`}
                                  className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 rounded-md transition-all duration-200"
                                >
                                  {child.name}
                                  {child.children?.length > 0 && (
                                    <HiChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                  )}
                                </Link>
                                {/* Grandchild */}
                                {child.children?.length > 0 && (
                                  <ul className="absolute left-full top-0 w-40 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover/grand:block z-50 border border-gray-200">
                                    {child.children.map((grand) => (
                                      <li key={grand._id}>
                                        <Link
                                          to={`/spare-parts/${grand._id}`}
                                          className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-200 hover:text-purple-800 rounded-md transition-all duration-200"
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
              <li className="hover:text-green-700">
                <Link to="/career">Careers</Link>
              </li>
              <li className="hover:text-green-700">
                <Link to="/newsroom" className="relative right-5">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn rounded-full bg-blue-700 text-white relative right-20 hover:bg-blue-800 border-none px-4 py-1 hidden lg:flex"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* ✅ Mobile Nav */}
          {isOpen && (
            <div className="md:hidden bg-white border-t shadow-lg">
              <ul className="flex flex-col p-4 space-y-2 text-gray-800">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={() => setIsOpen(false)}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/newsroom" onClick={() => setIsOpen(false)}>
                    Newsroom
                  </Link>
                </li>
                {/* Spare Parts (from Navbar.jsx) */}
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
                    <ul className="absolute left-0 top-full w-52 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover:block z-50 border border-gray-200 overflow-y-auto max-h-96 gradient-scrollbar">
                      {spareParts.map((parent) => (
                        <li key={parent._id} className="relative group/child">
                          <Link
                            to={`/spare-parts/${parent._id}`}
                            className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:text-green-800 rounded-md transition-all duration-200"
                          >
                            {parent.name}
                            {parent.children?.length > 0 && (
                              <HiChevronRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                            )}
                          </Link>
                          {/* Child Level */}
                          {parent.children?.length > 0 && (
                            <ul className="absolute left-full top-0 w-44 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover/child:block z-50 border border-gray-200">
                              {parent.children.map((child) => (
                                <li
                                  key={child._id}
                                  className="relative group/grand"
                                >
                                  <Link
                                    to={`/spare-parts/${child._id}`}
                                    className="flex justify-between items-center px-4 py-2.5 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 rounded-md transition-all duration-200"
                                  >
                                    {child.name}
                                    {child.children?.length > 0 && (
                                      <HiChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    )}
                                  </Link>
                                  {/* Grandchild */}
                                  {child.children?.length > 0 && (
                                    <ul className="absolute left-full top-0 w-40 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-lg hidden group-hover/grand:block z-50 border border-gray-200">
                                      {child.children.map((grand) => (
                                        <li key={grand._id}>
                                          <Link
                                            to={`/spare-parts/${grand._id}`}
                                            className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-200 hover:text-purple-800 rounded-md transition-all duration-200"
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
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ScrollNavbar;
