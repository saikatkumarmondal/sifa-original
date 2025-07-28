import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  //
  //   <div className="navbar bg-base-100 shadow-sm">
  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setShow(!show)}
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
              <a tabIndex={0} role="button" className="hover:bg-base-200">
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
              <a tabIndex={0} role="button" className="hover:bg-base-200">
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
                  <a tabIndex={0}>Elevator Control System</a>
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
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Box Type COP</a>
                    </li>
                    <li>
                      <a>Wall Mounted COP</a>
                    </li>
                    <li>
                      <a>Full Hight COP</a>
                    </li>
                    <li>
                      <a>Disabled-Accessible COP</a>
                    </li>
                    <li>
                      <a>Touch Type COP</a>
                    </li>
                    <li>
                      <a>Box Type LOP</a>
                    </li>
                    <li>
                      <a>Wall Mounted LOP</a>
                    </li>
                    <li>
                      <a>Villa Elevator LOP</a>
                    </li>
                    <li>
                      <a>Hall Lantern</a>
                    </li>
                    <li>
                      <a>Landing Overhead Panel</a>
                    </li>
                    <li>
                      <a>Fireman Switch</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={2}>Traction Machine </a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                  <a>Elevator Push Button</a>
                </li>
                <li>
                  <a>Elevator Encoder</a>
                </li>
                <li>
                  <a>Elevator Switch Sensor</a>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={4}>Elevator Cable</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Traveling Cable</a>
                    </li>
                    <li>
                      <a>Connection Cable</a>
                    </li>
                    <li>
                      <a>Cable Clamp</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={5}>Elevator Rope</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Steel Wire Rope</a>
                    </li>
                    <li>
                      <a>Rope Fastening</a>
                    </li>
                    <li>
                      <a>Rope Clip</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={6}>Elevator Door Parts</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Door Operator</a>
                    </li>
                    <li>
                      <a>Door Vane</a>
                    </li>
                    <li>
                      <a>Door Motor</a>
                    </li>
                    <li>
                      <a>Door Contact</a>
                    </li>
                    <li>
                      <a>Door Slider</a>
                    </li>
                    <li>
                      <a>Door Lock</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={7}>Elevator Safety Parts</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Elevator Speed Governor</a>
                    </li>
                    <li>
                      <a>Elevator Safety Gear</a>
                    </li>
                    <li className="dropdown dropdown-hover relative">
                      <a tabIndex={0}>Elevator Buffer</a>
                      <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                        <li>
                          <a>Oil Buffer</a>
                        </li>
                        <li>
                          <a>Polyurethane Buffer</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Door Contact</a>
                    </li>
                    <li>
                      <a>Door Slider</a>
                    </li>
                    <li>
                      <a>Door Lock</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={8}>Elevator Guide Rail & Shoe</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Guide Rail</a>
                    </li>
                    <li>
                      <a>Guide Rail Supporting Parts</a>
                    </li>
                    <li>
                      <a>Oil Can</a>
                    </li>
                    <li>
                      <a>Guide Shoe Lining</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Elevator Cabin Flow Fan</a>
                </li>
                <li>
                  <a>Elevator Wheel</a>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={9}>Elevator Lock & Key</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                    <li>
                      <a>Power Supply Lock</a>
                    </li>
                    <li>
                      <a>COP Lock</a>
                    </li>
                    <li>
                      <a>Triangle Lock</a>
                    </li>
                    <li>
                      <a>Key</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Elevator Intercom</a>
                </li>
                <li>
                  <a>Elevator Station Clock</a>
                </li>
                <li className="dropdown dropdown-hover relative">
                  <a tabIndex={10}>Escalator Parts</a>
                  <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                      <a>Walkway Pallet</a>
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
              <a>Careers</a>
            </li>

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
                <a tabIndex={0}>&nbsp;&nbsp;&nbsp;Elevator Control System</a>
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
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Box Type COP</a>
                  </li>
                  <li>
                    <a>Wall Mounted COP</a>
                  </li>
                  <li>
                    <a>Full Hight COP</a>
                  </li>
                  <li>
                    <a>Disabled-Accessible COP</a>
                  </li>
                  <li>
                    <a>Touch Type COP</a>
                  </li>
                  <li>
                    <a>Box Type LOP</a>
                  </li>
                  <li>
                    <a>Wall Mounted LOP</a>
                  </li>
                  <li>
                    <a>Villa Elevator LOP</a>
                  </li>
                  <li>
                    <a>Hall Lantern</a>
                  </li>
                  <li>
                    <a>Landing Overhead Panel</a>
                  </li>
                  <li>
                    <a>Fireman Switch</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={2}>Traction Machine </a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                <a>Elevator Push Button</a>
              </li>
              <li>
                <a>Elevator Encoder</a>
              </li>
              <li>
                <a>Elevator Switch Sensor</a>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={4}>Elevator Cable</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Traveling Cable</a>
                  </li>
                  <li>
                    <a>Connection Cable</a>
                  </li>
                  <li>
                    <a>Cable Clamp</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={5}>Elevator Rope</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Steel Wire Rope</a>
                  </li>
                  <li>
                    <a>Rope Fastening</a>
                  </li>
                  <li>
                    <a>Rope Clip</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={6}>Elevator Door Parts</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Door Operator</a>
                  </li>
                  <li>
                    <a>Door Vane</a>
                  </li>
                  <li>
                    <a>Door Motor</a>
                  </li>
                  <li>
                    <a>Door Contact</a>
                  </li>
                  <li>
                    <a>Door Slider</a>
                  </li>
                  <li>
                    <a>Door Lock</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={7}>Elevator Safety Parts</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Elevator Speed Governor</a>
                  </li>
                  <li>
                    <a>Elevator Safety Gear</a>
                  </li>
                  <li className="dropdown dropdown-hover relative">
                    <a tabIndex={0}>Elevator Buffer</a>
                    <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                      <li>
                        <a>Oil Buffer</a>
                      </li>
                      <li>
                        <a>Polyurethane Buffer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Door Contact</a>
                  </li>
                  <li>
                    <a>Door Slider</a>
                  </li>
                  <li>
                    <a>Door Lock</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={8}>Elevator Guide Rail & Shoe</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Guide Rail</a>
                  </li>
                  <li>
                    <a>Guide Rail Supporting Parts</a>
                  </li>
                  <li>
                    <a>Oil Can</a>
                  </li>
                  <li>
                    <a>Guide Shoe Lining</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Elevator Cabin Flow Fan</a>
              </li>
              <li>
                <a>Elevator Wheel</a>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={9}>Elevator Lock & Key</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
                  <li>
                    <a>Power Supply Lock</a>
                  </li>
                  <li>
                    <a>COP Lock</a>
                  </li>
                  <li>
                    <a>Triangle Lock</a>
                  </li>
                  <li>
                    <a>Key</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Elevator Intercom</a>
              </li>
              <li>
                <a>Elevator Station Clock</a>
              </li>
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={10}>Escalator Parts</a>
                <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-base-100 rounded-box w-40 z-50">
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
                    <a>Walkway Pallet</a>
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
    </div>
  );
};

export default Navbar2;
