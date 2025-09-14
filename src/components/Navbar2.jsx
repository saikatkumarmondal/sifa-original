import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const [showSpareParts, setShowSpareParts] = useState(false);

  const [spareParts, setSpareParts] = useState([]);
  const [openIds, setOpenIds] = useState({});

  // Fetch spare parts from API
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

  // toggle open/close for a specific id
  const toggleOpen = (id) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Recursive dropdown renderer

  // Recursive render with Link passing state
  const renderParts = (parts) => {
    return (
      <ul className="ml-2 mt-1">
        {parts.map((part) => {
          const id = part._id || part.title;

          return (
            <li key={id} className="relative">
              {part.children && part.children.length > 0 ? (
                <>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen(id);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                  >
                    <span>{part.title}</span>
                    <span>{openIds[id] ? "▲" : "▼"}</span>
                  </div>
                  {openIds[id] && renderParts(part.children)}
                </>
              ) : (
                <Link
                  to={`/spareparts/${id}`}
                  state={{ sparePart: part }} // Pass selected part as props
                  className="px-4 py-2 hover:bg-gray-100 block"
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
    <div className="navbar bg-base-100 shadow-sm w-full max-h-4">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

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
                  <Link to="escalator/moving-walks">Moving Walk</Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <span
                onClick={() => toggleOpen("spareParts")}
                className="hover:text-green-500 cursor-pointer text-lg whitespace-nowrap"
              >
                Spare Parts
              </span>

              {openIds["spareParts"] && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white text-black shadow-lg rounded-md border border-gray-100 z-50 h-[400px] overflow-y-auto p-2">
                  {renderParts(spareParts)}
                </div>
              )}
            </li>
            <Link to="/career" className="text-lg">
              Career
            </Link>

            <li>
              <Link to="/newsroom">Newsroom</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* DaisyUI Navbar Center Modification */}
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
          <li className="dropdown dropdown-hover relative">
            <a tabIndex={0} role="button" className="hover:bg-base-200 text-lg">
              Escalator
            </a>
            <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
              <li>
                <Link to="/escalator/indoor">Indoor Escalator</Link>
              </li>
              <li>
                <Link to="/escalator/out-door">Outdoor Escalator</Link>
              </li>
              <li>
                <Link to="/escalator/moving-walks">Moving Walks</Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <span
              onClick={() => setShowSpareParts(!showSpareParts)}
              className="hover:text-green-700 cursor-pointer text-lg whitespace-nowrap"
            >
              Spare Parts
            </span>

            {showSpareParts && (
              <ul className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-100 z-50 grid grid-cols-1 h-[400px] overflow-y-auto p-2">
                {spareParts.length > 0 ? (
                  renderParts(spareParts)
                ) : (
                  <li className="px-4 py-2">Loading...</li>
                )}
              </ul>
            )}
          </li>

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
