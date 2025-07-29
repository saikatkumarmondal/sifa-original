import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const ScrollNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
            <nav className="space-x-4">
              <div className="navbar-center hidden lg:flex w-full">
                {/* Apply flex properties to the ul directly */}
                <ul className="menu menu-horizontal px-1 w-full justify-around">
                  <li>
                    <NavLink to="/" className="text-2xl">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="text-2xl">
                      About Us
                    </NavLink>
                  </li>

                  <li className="dropdown dropdown-hover relative">
                    <a
                      tabIndex={0}
                      role="button"
                      className="hover:bg-base-200 text-2xl">
                      Elevator
                    </a>
                    <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                      <li>
                        <a>Passenger Elevator</a>
                      </li>
                      <li>
                        <a>Villa Elevator</a>
                      </li>
                      <li>
                        <a>Panoramic Elevator</a>
                      </li>
                      <li>
                        <a>Hospital Elevator</a>
                      </li>
                      <li>
                        <a>Freight Elevator</a>
                      </li>
                      <li>
                        <a>Hydraulic Elevator</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-hover relative">
                    <a
                      tabIndex={0}
                      role="button"
                      className="hover:bg-base-200 text-2xl">
                      Escalator
                    </a>
                    <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                      <li>
                        <a>Indoor Escalator</a>
                      </li>
                      <li>
                        <a>Outdoor Escalator</a>
                      </li>
                      <li>
                        <a>Moving Walks</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-hover relative">
                    <a
                      tabIndex={0}
                      role="button"
                      className="hover:bg-base-200 text-2xl">
                      Spare Parts
                    </a>
                    <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                      <li>
                        <a>Elevator Door Inverter</a>
                      </li>
                      <li>
                        <a>Elevator Light Curtain</a>
                      </li>
                      <a className="dropdown dropdown-hover relative">
                        <a tabIndex={0}>
                          &nbsp;&nbsp;&nbsp;Elevator Control System
                        </a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                          <li>
                            <a>Monarch</a>
                          </li>
                          <li>
                            <a>Step</a>
                          </li>
                          <li>
                            <a>ARD</a>
                          </li>
                          <li>
                            <a>Resistance</a>
                          </li>
                          <li>
                            <a>IGBT</a>
                          </li>
                          <li>
                            <a>Modernization</a>
                          </li>
                          <li>
                            <a>Switch & Power Box</a>
                          </li>
                        </ul>
                      </a>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={1}>Elevator COP & LOP</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">Box Type COP</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Wall Mounted COP
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Full Hight COP</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Disabled-Accessible COP
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Touch Type COP</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Box Type LOP</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Wall Mounted LOP
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Villa Elevator LOP
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Hall Lantern</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Landing Overhead Panel
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Fireman Switch</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={2}>Traction Machine </a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a>XINDA</a>
                          </li>
                          <li>
                            <a>Mona Drive</a>
                          </li>
                          <li>
                            <a>Torin Drive</a>
                          </li>
                          <li>
                            <a>Motor Base & Conter Parts</a>
                          </li>
                          <li>
                            <a>Damping Pad </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Elevator Nylon Pully</a>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={3}>Elevator Cabin</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a>Cabin Design </a>
                          </li>
                          <li>
                            <a>Hall Door Design</a>
                          </li>
                          <li>
                            <a>Ceiling Design</a>
                          </li>
                          <li>
                            <a>Floor Design</a>
                          </li>
                          <li>
                            <a>Handrail Design </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="whitespace-nowrap">
                          Elevator Push Button
                        </a>
                      </li>
                      <li>
                        <a>Elevator Encoder</a>
                      </li>
                      <li>
                        <a>Elevator Switch Sensor</a>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={4}>Elevator Cable</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">Traveling Cable</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Connection Cable
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Cable Clamp</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={5}>Elevator Rope</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">Steel Wire Rope</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Rope Fastening</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Rope Clip</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={6}>Elevator Door Parts</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">Door Operator</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Vane</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Motor</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Contact</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Slider</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Lock</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={7}>Elevator Safety Parts</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">
                              Elevator Speed Governor
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Elevator Safety Gear
                            </a>
                          </li>
                          <li className="dropdown dropdown-hover relative">
                            <a tabIndex={0}>Elevator Buffer</a>
                            <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                              <li>
                                <a className="whitespace-nowrap">Oil Buffer</a>
                              </li>
                              <li>
                                <a className="whitespace-nowrap">
                                  Polyurethane Buffer
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Contact</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Slider</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Door Lock</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={8}>Elevator Guide Rail & Shoe</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">Guide Rail</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Guide Rail Supporting Parts
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Oil Can</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">
                              Guide Shoe Lining
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="whitespace-nowrap">
                          Elevator Cabin Flow Fan
                        </a>
                      </li>
                      <li>
                        <a className="whitespace-nowrap">Elevator Wheel</a>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={9}>Elevator Lock & Key</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a className="whitespace-nowrap">
                              Power Supply Lock
                            </a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">COP Lock</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Triangle Lock</a>
                          </li>
                          <li>
                            <a>Key</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="whitespace-nowrap">Elevator Intercom</a>
                      </li>
                      <li>
                        <a className="whitespace-nowrap">
                          Elevator Station Clock
                        </a>
                      </li>
                      <li className="dropdown dropdown-hover relative">
                        <a tabIndex={10}>Escalator Parts</a>
                        <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-80 z-50">
                          <li>
                            <a>Step</a>
                          </li>
                          <li>
                            <a>Step Roller</a>
                          </li>
                          <li>
                            <a>Wheel</a>
                          </li>
                          <li>
                            <a>Handrail Belt</a>
                          </li>
                          <li>
                            <a>Chain</a>
                          </li>
                          <li>
                            <a>Brake</a>
                          </li>
                          <li>
                            <a>Safety Brush</a>
                          </li>
                          <li>
                            <a>Comb Plate</a>
                          </li>
                          <li>
                            <a>Yellow Side</a>
                          </li>
                          <li>
                            <a className="whitespace-nowrap">Walkway Pallet</a>
                          </li>
                          <li>
                            <a>PCB</a>
                          </li>
                          <li>
                            <a>Others</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="text-2xl">Careers</a>
                  </li>

                  <li>
                    <Link to="/contact" className="text-2xl">
                      Newsroom
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollNavbar;
