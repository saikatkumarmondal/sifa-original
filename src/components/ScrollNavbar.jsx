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

  return (
    <>
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
              alt="Sifa Logo"
              className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[80px] lg:h-[45px] object-contain mr-2 relative -left-25 -top-1"
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
                <ul className="absolute top-full left-0 mt-2 w-70 - bg-white shadow-lg rounded-md border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                  <li className="px-4 py-2 hover:bg-gray-100">Moving Walks</li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Commercial Escalator
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Heavy-Duty Escalator
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
                    {/* Elevator Control System (click to expand child) */}

                    <li className="relative">
                      &nbsp;&nbsp; Elevator Door Inverter
                    </li>
                    <li className="relative">
                      &nbsp;&nbsp; Elevator Light Curtain
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowControlSystem(!showControlSystem);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Control System
                        <span>{showControlSystem ? "▲" : "▼"}</span>
                      </div>

                      {showControlSystem && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Monarch
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">Step</li>
                          <li className="px-4 py-2 hover:bg-gray-100">ARD</li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Resistance
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Modernization
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Switch & Power Box
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowCopLop(!showCopLop);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator COP & LOP
                        <span>{showCopLop ? "▲" : "▼"}</span>
                      </div>

                      {showCopLop && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Box Type COP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Wall Mounted COP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Full Hight COP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Disabled-Accessible COP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Touch Type COP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Box Type LOP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Wall Mounted LOP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Villa Elevator LOP
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Hall Lantern
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Landing Overhead Panel
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Fireman Switch
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setTractionMachine(!tractionMachine);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Traction Machine
                        <span>{tractionMachine ? "▲" : "▼"}</span>
                      </div>

                      {tractionMachine && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">XINDA</li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Mona Drive
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Torin Drive
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Motor Base & Conter Parts
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Damping Pad
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      &nbsp; &nbsp; Elevator Nylon Pully
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorRope(!elevatorRope);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Cable
                        <span>{elevatorRope ? "▲" : "▼"}</span>
                      </div>

                      {elevatorRope && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Traveling Cable
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Connection Cable
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Cable Clamp
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorCable(!elevatorCable);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Rope
                        <span>{elevatorCable ? "▲" : "▼"}</span>
                      </div>

                      {elevatorCable && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Steel Wire Rope
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Rope Fastening
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Rope Clip
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* Other parts */}
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Display
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Push Button
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Encoder
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Switch Sensor
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorRope(!elevatorRope);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Cabin
                        <span>{elevatorRope ? "▲" : "▼"}</span>
                      </div>

                      {elevatorRope && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Cabin Design
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Hall Door Design
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Ceiling Design
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Floor Design
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Handrail Design
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorSafetyParts(!elevatorSafetyParts);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Safety Parts
                        <span>{elevatorSafetyParts ? "▲" : "▼"}</span>
                      </div>

                      {elevatorSafetyParts && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Elevator Speed Governor
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Elevator Safety Gear
                          </li>
                          <li className="relative">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setElevatorBuffer(!elevatorBuffer);
                              }}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                            >
                              <span>Elevator Buffer</span>
                              <span>{elevatorBuffer ? "▲" : "▼"}</span>
                            </div>

                            {elevatorBuffer && (
                              <ul className="ml-4 mt-1 pl-2 border-l border-gray-300 bg-white shadow absolute z-50">
                                <li className="px-4 py-2 hover:bg-gray-100">
                                  Oil Buffer
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100">
                                  Polyurethane Buffer
                                </li>
                              </ul>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorDoor(!elevatorDoor);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Door Parts
                        <span>{elevatorDoor ? "▲" : "▼"}</span>
                      </div>

                      {elevatorDoor && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Operator
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Vane
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Motor
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Contact
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Slider
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Door Lock
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorGuideRail(!elevatorGuideRail);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Guide Rail & Shoe
                        <span>{elevatorGuideRail ? "▲" : "▼"}</span>
                      </div>

                      {elevatorGuideRail && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Guide Rail
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Guide Rail Supporting Parts
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Guide Shoe
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Oil Can
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Guide Shoe Lining
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Cabin Flow Fan
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Intercom
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Elevator Station Clock
                    </li>
                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setElevatorLockKey(!elevatorLockKey);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Elevator Lock & Key
                        <span>{elevatorLockKey ? "▲" : "▼"}</span>
                      </div>

                      {elevatorLockKey && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Power Supply Lock
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            COP Lock
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Triangle Lock
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">Key</li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">Lock & Key</li>

                    <li className="relative">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setEscalatorParts(!escalatorParts);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        Escalator Parts
                        <span>{escalatorParts ? "▲" : "▼"}</span>
                      </div>

                      {escalatorParts && (
                        <ul className="ml-4 mt-1 pl-2 border-l border-gray-300">
                          <li className="px-4 py-2 hover:bg-gray-100">Step</li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Step Roller
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Handrail Belt
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">Chain</li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Safety Brush
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Comb Plate
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Yellow Side
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Walkway Pallet
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">PCB</li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Others
                          </li>
                        </ul>
                      )}
                    </li>
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
                  className="btn whitespace-nowrap rounded-full bg-blue-700 text-white hover:bg-blue-800 border-none transition-colors duration-200 px-4 py-1 hidden md:flex font-semibold relative -right-5 -top-2 "
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
