import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const [showControlSystem, setShowControlSystem] = useState(false);
  const [showCopLop, setShowCopLop] = useState(false);
  const [showSpareParts, setShowSpareParts] = useState(false);
  const [tractionMachine, setTractionMachine] = useState(false);
  const [elevatorRope, setElevatorRope] = useState(false);
  const [elevatorCable, setElevatorCable] = useState(false);
  const [elevatorSafetyParts, setElevatorSafetyParts] = useState(false);
  const [elevatorDoor, setElevatorDoor] = useState(false);
  const [elevatorGuideRail, setElevatorGuideRail] = useState(false);
  const [elevatorLockKey, setElevatorLockKey] = useState(false);
  const [escalatorParts, setEscalatorParts] = useState(false);
  //
  //   <div className="navbar bg-base-100 shadow-sm">
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
                        <li className="px-4 py-2 hover:bg-gray-100">Monarch</li>
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
                        <li className="px-4 py-2 hover:bg-gray-100">Oil Can</li>
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
                        <li className="px-4 py-2 hover:bg-gray-100">Others</li>
                      </ul>
                    )}
                  </li>
                </ul>
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
        {/* Apply flex properties to the ul directly */}
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
                {/* Elevator Control System (click to expand child) */}

                <li className="relative">
                  &nbsp;&nbsp;&nbsp;&nbsp;Elevator Door Inverter
                </li>
                <li className="relative">
                  &nbsp;&nbsp;&nbsp;&nbsp;Elevator Light Curtain
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
                      <li className="px-4 py-2 hover:bg-gray-100">Monarch</li>
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
                <li className="relative">&nbsp; &nbsp; Elevator Nylon Pully</li>
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
                      <li className="px-4 py-2 hover:bg-gray-100">Rope Clip</li>
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
                      <li className="px-4 py-2 hover:bg-gray-100">Door Vane</li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        Door Motor
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        Door Contact
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        Door Slider
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">Door Lock</li>
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
                      <li className="px-4 py-2 hover:bg-gray-100">Oil Can</li>
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
                      <li className="px-4 py-2 hover:bg-gray-100">COP Lock</li>
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
                      <li className="px-4 py-2 hover:bg-gray-100">Others</li>
                    </ul>
                  )}
                </li>
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
