import React, { useState } from "react";
// Assuming react-router is configured. In most web apps, this would be 'react-router-dom'.
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close

const ProfessionalNavbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Common styling for desktop navigation links
  // Enhanced hover effects with scale and subtle shadow for a more professional feel
  const desktopNavLinkClasses =
    "btn btn-ghost text-white text-base font-medium hover:bg-blue-700 hover:text-white hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out rounded-xl px-5 py-3";
  // Common styling for mobile navigation links
  // Enhanced hover effects with translate-x for a clear selection indication
  const mobileNavLinkClasses =
    "block px-4 py-3 text-white text-lg font-medium hover:bg-blue-700 hover:translate-x-1 transition-all duration-200 rounded-md";
  // Common styling for mobile nested dropdown links
  // Enhanced hover effects with translate-x for a clear selection indication
  const mobileNestedNavLinkClasses =
    "block px-6 py-2 text-white text-base hover:bg-blue-700 hover:translate-x-1 transition-all duration-200 rounded-md";

  // Helper function to render menu items recursively for mobile
  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        {/* Check if the item has children (is a dropdown) */}
        {item.children ? (
          // If it's a dropdown, use DaisyUI's dropdown component for click functionality on mobile
          <div className="dropdown dropdown-right w-full">
            <div
              tabIndex={0}
              role="button"
              className={`${mobileNavLinkClasses} flex justify-between items-center w-full`}>
              {item.label}
              {/* Arrow icon for dropdown */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            {/* Nested dropdown content for mobile */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-blue-700 rounded-box w-52 mt-1">
              {renderNestedMenuItems(item.children)}
            </ul>
          </div>
        ) : // If it's a regular link, use Link or a regular anchor
        item.path ? (
          <Link
            to={item.path}
            className={mobileNavLinkClasses}
            onClick={toggleMobileMenu}>
            {item.label}
          </Link>
        ) : (
          <a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>
            {item.label}
          </a>
        )}
      </li>
    ));
  };

  // Helper function to render nested menu items for mobile
  const renderNestedMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.children ? (
          <div className="dropdown dropdown-right w-full">
            <div
              tabIndex={0}
              role="button"
              className={`${mobileNestedNavLinkClasses} flex justify-between items-center w-full`}>
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-blue-800 rounded-box w-52 mt-1">
              {renderNestedMenuItems(item.children)}
            </ul>
          </div>
        ) : item.path ? (
          <Link
            to={item.path}
            className={mobileNestedNavLinkClasses}
            onClick={toggleMobileMenu}>
            {item.label}
          </Link>
        ) : (
          <a className={mobileNestedNavLinkClasses} onClick={toggleMobileMenu}>
            {item.label}
          </a>
        )}
      </li>
    ));
  };

  // Define the menu structure for both desktop and mobile
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Elevator",
      children: [
        { label: "Passenger Elevator" },
        { label: "Villa Elevator" },
        { label: "Panoramic Elevator" },
        { label: "Hospital Elevator" },
        { label: "Freight Elevator" },
        { label: "Hydraulic Elevator" },
      ],
    },
    {
      label: "Escalator",
      children: [
        { label: "Indoor Escalator" },
        { label: "Outdoor Escalator" },
        { label: "Moving Walks" },
      ],
    },
    {
      label: "Spare Parts",
      children: [
        { label: "Elevator Door Inverter" },
        { label: "Elevator Light Curtain" },
        {
          label: "Elevator Control System",
          children: [
            { label: "Monarch" },
            { label: "Step" },
            { label: "ARD" },
            { label: "Resistance" },
            { label: "IGBT" },
            { label: "Modernization" },
            { label: "Switch & Power Box" },
          ],
        },
        {
          label: "Elevator COP & LOP",
          children: [
            { label: "Box Type COP" },
            { label: "Wall Mounted COP" },
            { label: "Full Hight COP" },
            { label: "Disabled-Accessible COP" },
            { label: "Touch Type COP" },
            { label: "Box Type LOP" },
            { label: "Wall Mounted LOP" },
            { label: "Villa Elevator LOP" },
            { label: "Hall Lantern" },
            { label: "Landing Overhead Panel" },
            { label: "Fireman Switch" },
          ],
        },
        {
          label: "Traction Machine",
          children: [
            { label: "XINDA" },
            { label: "Mona Drive" },
            { label: "Torin Drive" },
            { label: "Motor Base & Conter Parts" },
            { label: "Damping Pad" },
          ],
        },
        { label: "Elevator Nylon Pully" },
        {
          label: "Elevator Cabin",
          children: [
            { label: "Cabin Design" },
            { label: "Hall Door Design" },
            { label: "Ceiling Design" },
            { label: "Floor Design" },
            { label: "Handrail Design" },
          ],
        },
        { label: "Elevator Push Button" },
        { label: "Elevator Encoder" },
        { label: "Elevator Switch Sensor" },
        {
          label: "Elevator Cable",
          children: [
            { label: "Traveling Cable" },
            { label: "Connection Cable" },
            { label: "Cable Clamp" },
          ],
        },
        {
          label: "Elevator Rope",
          children: [
            { label: "Steel Wire Rope" },
            { label: "Rope Fastening" },
            { label: "Rope Clip" },
          ],
        },
        {
          label: "Elevator Door Parts",
          children: [
            { label: "Door Operator" },
            { label: "Door Vane" },
            { label: "Door Motor" },
            { label: "Door Contact" },
            { label: "Door Slider" },
            { label: "Door Lock" },
          ],
        },
        {
          label: "Elevator Safety Parts",
          children: [
            { label: "Elevator Speed Governor" },
            { label: "Elevator Safety Gear" },
            {
              label: "Elevator Buffer",
              children: [
                { label: "Oil Buffer" },
                { label: "Polyurethane Buffer" },
              ],
            },
            { label: "Door Contact" },
            { label: "Door Slider" },
            { label: "Door Lock" },
          ],
        },
        {
          label: "Elevator Guide Rail & Shoe",
          children: [
            { label: "Guide Rail" },
            { label: "Guide Rail Supporting Parts" },
            { label: "Oil Can" },
            { label: "Guide Shoe Lining" },
          ],
        },
        { label: "Elevator Cabin Flow Fan" },
        { label: "Elevator Wheel" },
        {
          label: "Elevator Lock & Key",
          children: [
            { label: "Power Supply Lock" },
            { label: "COP Lock" },
            { label: "Triangle Lock" },
            { label: "Key" },
          ],
        },
        { label: "Elevator Intercom" },
        { label: "Elevator Station Clock" },
        {
          label: "Escalator Parts",
          children: [
            { label: "Step" },
            { label: "Step Roller" },
            { label: "Wheel" },
            { label: "Handrail Belt" },
            { label: "Chain" },
            { label: "Brake" },
            { label: "Safety Brush" },
            { label: "Comb Plate" },
            { label: "Yellow Side" },
            { label: "Walkway Pallet" },
            { label: "PCB" },
            { label: "Others" },
          ],
        },
      ],
    },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Helper function to render desktop menu items
  const renderDesktopMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.children ? (
          // For desktop, use dropdown-hover for sub-menus
          <div className="dropdown dropdown-hover relative">
            <a tabIndex={0} role="button" className={desktopNavLinkClasses}>
              {item.label}
              {/* Down arrow icon for top-level dropdowns */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
            {/* Desktop dropdown content */}
            <ul className="menu dropdown-content absolute top-full left-0 mt-1 p-2 shadow bg-blue-700 rounded-box w-52 z-50 text-white">
              {renderDesktopNestedMenuItems(item.children)}
            </ul>
          </div>
        ) : // Regular links for desktop
        item.path ? (
          <Link to={item.path} className={desktopNavLinkClasses}>
            {item.label}
          </Link>
        ) : (
          <a className={desktopNavLinkClasses}>{item.label}</a>
        )}
      </li>
    ));
  };

  // Helper function to render desktop nested menu items (for multi-level dropdowns)
  const renderDesktopNestedMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.children ? (
          // For nested desktop dropdowns, use dropdown-hover with right alignment
          <div className="dropdown dropdown-hover dropdown-right">
            <a
              tabIndex={0}
              role="button"
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-blue-800 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out rounded-md">
              {item.label}
              {/* Right arrow icon for nested dropdowns */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            {/* Nested desktop dropdown content */}
            <ul className="menu dropdown-content absolute left-full top-0 mt-0 ml-1 p-2 shadow bg-blue-800 rounded-box w-52 z-50 text-white">
              {renderDesktopNestedMenuItems(item.children)}
            </ul>
          </div>
        ) : // Regular links within nested desktop dropdowns
        item.path ? (
          <Link
            to={item.path}
            className="block px-4 py-2 hover:bg-blue-800 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out rounded-md">
            {item.label}
          </Link>
        ) : (
          <a className="block px-4 py-2 hover:bg-blue-800 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out rounded-md">
            {item.label}
          </a>
        )}
      </li>
    ));
  };

  return (
    <div className="navbar bg-blue-600 shadow-xl text-white p-4">
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Toggle (Hamburger/Close Icon) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="btn btn-ghost text-white text-2xl hover:bg-blue-700 transition-colors duration-200 rounded-lg"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Brand Logo/Name (Optional, if you want it here) */}
        {/* <a className="btn btn-ghost text-xl font-bold ml-2">Your Logo/Brand</a> */}
      </div>

      {/* Desktop Navigation (hidden on small/medium screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {renderDesktopMenuItems(menuItems)}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}>
        <div className="flex justify-end p-4">
          {/* Close button inside the mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="btn btn-ghost text-white text-2xl hover:bg-blue-700 transition-colors duration-200 rounded-lg"
            aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        {/* Added padding-top to ensure content is below the close button */}
        <ul className="menu p-4 pt-16 w-full h-full overflow-y-auto">
          {renderMenuItems(menuItems)}
        </ul>
      </div>

      {/* Navbar End (if you have elements like search/contact on the right for desktop) */}
      <div className="navbar-end">
        {/* Example: Search or Contact Button for desktop, if needed */}
        {/* <input type="text" placeholder="Search" className="input input-bordered rounded-full w-24 md:w-auto text-gray-800" />
                <button className="btn rounded-full ml-2">Contact</button> */}
      </div>
    </div>
  );
};

export default ProfessionalNavbar;
