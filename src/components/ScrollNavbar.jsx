import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // Note: This should typically be 'react-router-dom'
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import axiosInstance from "../api/axiosInstance";
import LOGOSIFA from "/logo.png";

const ScrollNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State for spare parts categories

  // Mobile accordion state: tracks which menu levels are open
  // [level 0 (Spare Parts), level 1 (Parent), level 2 (Child)]
  const [openPath, setOpenPath] = useState([]);

  // --- Data Fetching: Fetch categories for the Spare Parts menu ---
  useEffect(() => {
    // Using the external axiosInstance.get("/categories/")
    axiosInstance
      .get("/categories/")
      .then((res) => {
        // Handle nested data structure
        const data =
          res.data.data && Array.isArray(res.data.data)
            ? res.data.data
            : res.data;
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.warn("API response for categories is not an array:", data);
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setCategories([]);
      });
  }, []);

  // --- Scroll Logic: Show the navbar after scrolling a bit ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show navbar if scrolled down past 50 pixels
      setShowNavbar(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Mobile Accordion Toggle Logic ---
  const toggleAccordion = (id, level) => {
    setIsMobileMenuOpen(true);
    setOpenPath((prev) => {
      // If the same item is clicked, close it and all deeper levels
      if (prev[level] === id) {
        return prev.slice(0, level);
      }
      // Otherwise, open this item
      const newPath = prev.slice(0, level);
      newPath[level] = id;
      return newPath;
    });
  };

  // Helper function to close mobile menu after clicking a final link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenPath([]); // Reset accordion path
  };

  // --- Component Rendering ---
  return (
    <>
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo - FIXED PATH */}

            <img
              src="/logo.png"
              alt="Sifa Logo"
              className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[80px] lg:h-[45px] object-contain relative md:-left-9 left-[10px]"
            />

            {/* Desktop Navigation (Hidden on small screens) */}
            <ul className="hidden md:flex items-center justify-center whitespace-nowrap space-x-12 lg:space-x-20 text-lg font-medium text-gray-800 relative">
              <li className="hover:text-green-700">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-700">
                <Link to="/about">About Us</Link>
              </li>

              {/* Elevator Dropdown (Placeholder structure) */}
              <li className="relative cursor-pointer group">
                <button className="flex items-center text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 peer">
                  Elevator
                  <HiChevronDown className="ml-1 text-gray-500 transition-all duration-200 peer-hover:rotate-180 group-hover:rotate-180 peer-hover:text-green-700 group-hover:text-green-700" />
                </button>
                <ul className="absolute left-0 top-full min-w-max bg-white shadow-lg rounded-lg border invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 mt-2 py-2">
                  <li>
                    <Link
                      to="/elevators/passenger"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all"
                    >
                      Passenger Elevator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/elevators/villa"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all"
                    >
                      Villa Elevator
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Escalator Dropdown (Placeholder structure) */}
              <li className="relative cursor-pointer group">
                <button className="flex items-center text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 peer">
                  Escalator
                  <HiChevronDown className="ml-1 text-gray-500 transition-transform duration-200 peer-hover:rotate-180 group-hover:rotate-180 peer-hover:text-green-700 group-hover:text-green-700" />
                </button>
                <ul className="absolute left-0 top-full min-w-max bg-white shadow-lg rounded-lg border invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 mt-2 py-2">
                  <li>
                    <Link
                      to="/escalator/indoor"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all"
                    >
                      Indoor Escalator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/escalator/moving-walks"
                      className="block whitespace-nowrap px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-800 rounded-md transition-all"
                    >
                      Moving Walk
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Spare Parts Dropdown (Desktop Nested Hover) */}
              <li className="relative group">
                <Link
                  to="/spare-parts-overview"
                  className="flex items-center text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 peer"
                >
                  Spare Parts
                  <HiChevronDown className="ml-1 text-gray-500 transition-transform duration-200 peer-hover:rotate-180 group-hover:rotate-180 peer-hover:text-green-700 group-hover:text-green-700" />
                </Link>

                {categories.length === 0 ? (
                  <div className="absolute left-0 top-full bg-white shadow-lg w-44 p-4 text-sm text-gray-600 rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 z-50 mt-2">
                    No categories found.
                  </div>
                ) : (
                  <ul
                    className="absolute left-0 top-full w-56 bg-white shadow-xl rounded-lg border border-gray-200 
                    invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 mt-2 py-2"
                  >
                    {categories.map((parent) => (
                      <li key={parent._id} className="relative group/parent">
                        {/* Parent Link/Button */}
                        {parent.children?.length > 0 ? (
                          <button className="flex justify-between items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150">
                            <span>{parent.name}</span>
                            <HiChevronRight className="text-gray-400 group-hover/parent:text-green-600 transition-colors" />
                          </button>
                        ) : (
                          <Link
                            to={`/spare-parts-grid/${parent._id}`}
                            className="flex justify-between items-center px-4 py-2 text-gray-700 font-medium hover:bg-green-100 hover:text-green-800 rounded transition-all duration-200"
                          >
                            {parent.name}
                          </Link>
                        )}

                        {/* Child List (Appears on parent hover) */}
                        {parent.children?.length > 0 && (
                          <ul
                            className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 
                                invisible opacity-0 group-hover/parent:visible group-hover/parent:opacity-100 transition-all duration-200 z-50 py-2"
                          >
                            {parent.children.map((child) => (
                              <li
                                key={child._id}
                                className="relative group/child"
                              >
                                {/* Child Link/Button */}
                                {child.children?.length > 0 ? (
                                  <button className="flex justify-between items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150">
                                    <span>{child.name}</span>
                                    <HiChevronRight className="text-gray-400 group-hover/child:text-green-600 transition-colors" />
                                  </button>
                                ) : (
                                  <Link
                                    to={`/spare-parts-grid/${child._id}`}
                                    className="flex justify-between items-center px-4 py-2 text-gray-700 font-medium hover:bg-green-100 hover:text-green-800 rounded transition-all duration-200"
                                  >
                                    {child.name}
                                  </Link>
                                )}

                                {/* Grandchild List (Appears on child hover) */}
                                {child.children?.length > 0 && (
                                  <ul
                                    className="absolute left-full top-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 
                                					invisible opacity-0 group-hover/child:visible group-hover/child:opacity-100 transition-all duration-200 z-50 py-2"
                                  >
                                    {child.children.map((grand) => (
                                      <li key={grand._id}>
                                        <Link
                                          to={`/spare-parts-grid/${grand._id}`}
                                          className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded transition-all duration-150"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation (Shown only when menu is open) */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t shadow-lg">
              <ul className="flex flex-col p-4 space-y-2 text-gray-800">
                <li>
                  <Link to="/" onClick={handleMobileLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleMobileLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={handleMobileLinkClick}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/newsroom" onClick={handleMobileLinkClick}>
                    Newsroom
                  </Link>
                </li>

                {/* Spare Parts (Mobile Accordion) */}
                <li>
                  {/* Main Spare Parts Button/Link */}
                  <Link
                    to="/spare-parts-overview"
                    className="flex items-center w-full py-2 text-lg font-semibold border-t border-gray-100 mt-2 pt-2"
                    onClick={() => toggleAccordion("spareParts", 0)}
                  >
                    Spare Parts
                    <HiChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        openPath[0] === "spareParts" ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Level 1: Parent Categories */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openPath[0] === "spareParts"
                        ? "max-h-[2000px]"
                        : "max-h-0"
                    }`}
                  >
                    <ul className="ml-4 border-l pl-3 space-y-1">
                      {categories.map((parent) => (
                        <li key={parent._id}>
                          {parent.children?.length > 0 ? (
                            <>
                              {/* Parent Accordion Trigger */}
                              <button
                                className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
                                onClick={() => toggleAccordion(parent._id, 1)}
                              >
                                {parent.name}
                                <HiChevronDown
                                  className={`ml-1 transition-transform duration-200 ${
                                    openPath[1] === parent._id
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {/* Level 2: Child Categories */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  openPath[1] === parent._id
                                    ? "max-h-[2000px]"
                                    : "max-h-0"
                                }`}
                              >
                                <ul className="ml-4 border-l pl-3 space-y-1">
                                  {parent.children.map((child) => (
                                    <li key={child._id}>
                                      {child.children?.length > 0 ? (
                                        <>
                                          {/* Child Accordion Trigger */}
                                          <button
                                            className="flex justify-between items-center w-full py-2 text-gray-700"
                                            onClick={() =>
                                              toggleAccordion(child._id, 2)
                                            }
                                          >
                                            {child.name}
                                            <HiChevronDown
                                              className={`ml-1 transition-transform duration-200 ${
                                                openPath[2] === child._id
                                                  ? "rotate-180"
                                                  : ""
                                              }`}
                                            />
                                          </button>

                                          {/* Level 3: Grandchild Categories */}
                                          <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                              openPath[2] === child._id
                                                ? "max-h-[2000px]"
                                                : "max-h-0"
                                            }`}
                                          >
                                            <ul className="ml-4 border-l pl-3 space-y-1">
                                              {child.children.map((grand) => (
                                                <li key={grand._id}>
                                                  <Link
                                                    to={`/spare-parts-grid/${grand._id}`}
                                                    className="block py-2 text-gray-700 hover:text-green-700"
                                                    onClick={
                                                      handleMobileLinkClick
                                                    }
                                                  >
                                                    {grand.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </>
                                      ) : (
                                        // Child Link (No Grandchildren)
                                        <Link
                                          to={`/spare-parts-grid/${child._id}`}
                                          className="block py-2 text-gray-700 hover:text-green-700"
                                          onClick={handleMobileLinkClick}
                                        >
                                          {child.name}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            // Parent Link (No Children)
                            <Link
                              to={`/spare-parts-grid/${parent._id}`}
                              className="block py-2 text-gray-700 hover:text-green-700"
                              onClick={handleMobileLinkClick}
                            >
                              {parent.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
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
