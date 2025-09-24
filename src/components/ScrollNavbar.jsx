import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import Loading from "./Loading";

const ScrollNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // ✅ Added for mobile + nested spare parts
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [mobileDropdowns, setMobileDropdowns] = useState({}); // Nested dropdown states
  const [spareParts, setSpareParts] = useState([]);

  const [showSpareParts, setShowSpareParts] = useState(false); // desktop spare parts
  const [openIds, setOpenIds] = useState({}); // desktop nested toggle

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
    const fetchSpareParts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:7777/api/spareparts"
        );
        setSpareParts(data);
      } catch (error) {
        console.error("Failed to fetch spare parts:", error);
      }
    };
    fetchSpareParts();
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSpareParts(false);
        setOpenIds({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ toggle for desktop nested
  const toggleOpen = (id) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ toggle for mobile nested
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ✅ recursive renderer for mobile spare parts
  const renderMobileParts = (parts) => {
    return (
      <ul className="ml-4 mt-1">
        {parts.map((part) => {
          const id = part._id || part.title;
          const hasChildren = part.children && part.children.length > 0;

          return (
            <li key={id}>
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(id)}
                    className="w-full text-left px-3 py-2 flex justify-between items-center hover:bg-gray-100"
                  >
                    <span>{part.title}</span>
                    <span>{mobileDropdowns[id] ? "▲" : "▼"}</span>
                  </button>
                  {mobileDropdowns[id] && renderMobileParts(part.children)}
                </>
              ) : (
                <Link
                  to={`/spareparts/${id}`}
                  state={{ sparePart: part }}
                  className="block px-3 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {part.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  // ✅ recursive renderer for desktop spare parts
  const renderParts = (parts) => {
    return (
      <ul className="ml-2 mt-1">
        {parts.map((part) => {
          const id = part._id || part.title;
          const hasChildren = part.children && part.children.length > 0;

          return (
            <li key={id} className="relative">
              {hasChildren ? (
                <>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen(id);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between rounded-md"
                  >
                    <span>{part.title}</span>
                    <span>{openIds[id] ? "▲" : "▼"}</span>
                  </div>
                  {openIds[id] && renderParts(part.children)}
                </>
              ) : (
                <Link
                  to={`/spareparts/${id}`}
                  state={{ sparePart: part }}
                  className="px-4 py-2 hover:bg-gray-100 block rounded-md"
                  onClick={() => {
                    setShowSpareParts(false);
                    setOpenIds({});
                  }}
                >
                  {part.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    );
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
              <li className="dropdown dropdown-hover relative cursor-pointer">
                <span className="hover:text-green-700">Elevator</span>
                <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                  <li>
                    <Link to="/elevators/passenger">Passenger Elevator</Link>
                  </li>
                  <li>
                    <Link to="/elevators/villa">Villa Elevator</Link>
                  </li>
                  <li>
                    <Link to="/elevators/panoramic">Panoramic Elevator</Link>
                  </li>
                  <li>
                    <Link to="/elevators/hospital">Hospital Elevator</Link>
                  </li>
                  <li>
                    <Link to="/elevators/freight">Freight Elevator</Link>
                  </li>
                  <li>
                    <Link to="/elevators/hydraulic">Hydraulic Elevator</Link>
                  </li>
                </ul>
              </li>

              {/* Escalator */}
              <li className="group relative cursor-pointer">
                <span className="hover:text-green-700">Escalator</span>
                <ul className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 p-5">
                  <li>
                    <Link to="escalator/indoor">Indoor Escalator</Link>
                  </li>
                  <li>
                    <Link to="escalator/out-door">Outdoor Escalator</Link>
                  </li>
                  <li>
                    <Link to="escalator/moving-walks">Moving Walk</Link>
                  </li>
                </ul>
              </li>

              {/* Spare Parts */}
              <li className="relative group" ref={dropdownRef}>
                <span
                  onClick={() => setShowSpareParts(!showSpareParts)}
                  className="hover:text-green-700 cursor-pointer"
                >
                  Spare Parts
                </span>

                {showSpareParts && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border z-50 max-h-96 overflow-y-auto p-2">
                    {spareParts.length > 0 ? (
                      renderParts(spareParts)
                    ) : (
                      <Loading />
                    )}
                  </div>
                )}
              </li>

              <li className="hover:text-green-700">
                <Link to="/career">Careers</Link>
              </li>
              <li className="hover:text-green-700">
                <Link to="/newsroom">Newsroom</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn rounded-full bg-blue-700 text-white relative right-6 hover:bg-blue-800 border-none px-4 py-1 hidden lg:flex"
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

                {/* ✅ Spare Parts Mobile Dropdown */}
                <li>
                  <button
                    onClick={() => toggleMobileDropdown("spare")}
                    className="w-full text-left px-3 py-2 flex justify-between items-center hover:bg-gray-100"
                  >
                    <span>Spare Parts</span>
                    <span>{mobileDropdowns["spare"] ? "▲" : "▼"}</span>
                  </button>
                  {mobileDropdowns["spare"] && (
                    <div className="pl-3">
                      {spareParts.length > 0 ? (
                        renderMobileParts(spareParts)
                      ) : (
                        <Loading />
                      )}
                    </div>
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
