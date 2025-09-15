import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Links, NavLink } from "react-router";

const ScrollNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSpareParts, setShowSpareParts] = useState(false);
  const [showControlSystem, setShowControlSystem] = useState(false);
  const [showCopLop, setShowCopLop] = useState(false);
  const [tractionMachine, setTractionMachine] = useState(false);
  const [elevatorBuffer, setElevatorBuffer] = useState(false);
  const [elevatorCable, setElevatorCable] = useState(false);
  const [elevatorRope, setElevatorRope] = useState(false);
  const [elevatorDoor, setElevatorDoor] = useState(false);
  const [elevatorSafetyParts, setElevatorSafetyParts] = useState(false);
  const [elevatorSafetyPart, setElevatorSafetyPart] = useState(false);
  const [elevatorGuideRail, setElevatorGuideRail] = useState(false);
  const [elevatorLockKey, setElevatorLockKey] = useState(false);
  const [escalatorParts, setEscalatorParts] = useState(false);
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
    <>
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
              alt="Sifa Logo"
              className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[80px] lg:h-[45px] object-contain mr-2 relative -left-4 -top-1"
            />

            <ul className="flex space-x-20 text-lg font-medium text-gray-800 relative ">
              <li className="hover:text-green-700 cursor-pointer text-lg whitespace-nowrap">
                Home
              </li>
              <li className="hover:text-green-700 cursor-pointer text-lg whitespace-nowrap">
                About Us
              </li>

              {/* Elevator Dropdown */}
              <li className="dropdown dropdown-hover relative cursor-pointer">
                <a
                  tabIndex={0}
                  role="button"
                  className="hover:bg-base-200 text-lg"
                >
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
              <li className="group relative cursor-pointer">
                <span className="hover:text-green-700 text-lg">Escalator</span>
                <ul
                  className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-100 
  opacity-0 group-hover:opacity-100 invisible group-hover:visible 
  translate-y-2 group-hover:translate-y-0 
  transition-all duration-300 ease-in-out z-50 p-5"
                >
                  <li className="hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md">
                    <Link to="escalator/indoor">Indoor Escalator</Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md">
                    <Link to="escalator/out-door">Outdoor Escalator</Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md">
                    <Link to="escalator/moving-walks">Moving Walk</Link>
                  </li>
                </ul>
              </li>

              {/* Spare Parts Click Dropdown */}
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

              <li className="hover:text-green-700 cursor-pointer text-lg">
                <Link to="/career"> Careers</Link>
              </li>
              <li className="hover:text-green-700 cursor-pointer text-lg">
                Newsroom
              </li>

              <li className="mt-1">
                <Link
                  to="/contact"
                  className="btn whitespace-nowrap rounded-full bg-blue-700 text-white hover:bg-blue-800 border-none transition-colors duration-200 px-4 py-1 hidden md:flex font-semibold relative right-7 -top-2 "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollNavbar;
