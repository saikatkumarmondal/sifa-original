import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import Loading from "./Loading";
import { useCategories } from "../hooks/useCategories";
import NestedCategory from "./NestedCategory";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const { categories, loading } = useCategories();
  const dropdownRef = useRef(null);
  const [openIds, setOpenIds] = useState({});
  const [showSpareParts, setShowSpareParts] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSpareParts(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to toggle nested dropdowns
  const toggleOpen = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-full relative">
      {/* Mobile Navbar */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setShow(!show)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {/* Elevator Dropdown */}
            <li className="dropdown dropdown-hover relative">
              <a tabIndex={0} role="button" className="hover:bg-base-200">
                Elevator
              </a>
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

            {/* Escalator Dropdown */}
            <li className="dropdown dropdown-hover relative">
              <a tabIndex={0} role="button" className="hover:bg-base-200">
                Escalator
              </a>
              <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                <li>
                  <Link to="escalator/indoor">Indoor Escalator</Link>
                </li>
                <li>
                  <Link to="escalator/out-door">Outdoor Escalator</Link>
                </li>
                <li>
                  <Link to="escalator/moving-walks">Moving Walks</Link>
                </li>
              </ul>
            </li>

            {/* Spare Parts Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <span
                onClick={() => setShowSpareParts(!showSpareParts)}
                className="hover:text-green-700 cursor-pointer text-lg whitespace-nowrap px-3 py-2 rounded-md"
              >
                Spare Parts
              </span>

              {showSpareParts && (
                <div className="absolute top-full left-0 mt-2 w-96 max-h-96 overflow-y-auto bg-white shadow-lg rounded-md border border-gray-100 z-50 p-2">
                  {loading ? (
                    <Loading />
                  ) : categories.length > 0 ? (
                    <ul className="flex flex-col justify-center h-full">
                      {categories.map((cat) => (
                        <NestedCategory key={cat._id} category={cat} />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-gray-500">
                      No categories found
                    </p>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center hidden lg:flex w-full">
        <ul className="menu menu-horizontal px-1 w-full justify-around">
          <li>
            <NavLink to="/" className="text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-lg">
              About Us
            </NavLink>
          </li>

          {/* Elevator Dropdown */}
          <li className="dropdown dropdown-hover relative">
            <a tabIndex={0} role="button" className="hover:bg-base-200 text-lg">
              Elevator
            </a>
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

          {/* Escalator Dropdown */}
          <li className="dropdown dropdown-hover relative">
            <a tabIndex={0} role="button" className="hover:bg-base-200 text-lg">
              Escalator
            </a>
            <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
              <li>
                <Link to="escalator/indoor">Indoor Escalator</Link>
              </li>
              <li>
                <Link to="escalator/out-door">Outdoor Escalator</Link>
              </li>
              <li>
                <Link to="escalator/moving-walks">Moving Walks</Link>
              </li>
            </ul>
          </li>

          {/* Spare Parts Desktop Dropdown */}
          {/* Spare Parts Dropdown (Desktop) */}

          <span className="cursor-pointer text-lg px-3 py-2 peer">
            Spare Parts
          </span>
          <div className="absolute  top-full left-0 hidden group-hover:block peer-hover:block hover:block bg-white border shadow z-50 max-h-96 overflow-y-auto w-72 p-2">
            <ul className="">
              {categories.map((cat) => (
                <NestedCategory key={cat._id} category={cat} />
              ))}
            </ul>
          </div>

          <li>
            <Link to="/career" className="text-lg">
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg">
              Newsroom
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
