import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-white shadow-xl text-black px-4 py-2">
      {/* Logo */}
      <div className="flex-1 flex items-center">
        <img
          src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
          alt="SIFA Logo"
          className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[85px] object-contain mr-2"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* SIFA Online (desktop only) */}
        <a className="btn btn-ghost text-[10px] md:text-sm font-bold hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded-lg hidden md:flex">
          SIFA Online
        </a>

        {/* Language Selection with Divider (desktop only) */}
        <div className="hidden md:flex items-center space-x-2 font-medium text-sm">
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded text-gray-800">
            English
          </a>
          <span className="font-bold text-gray-500 select-none">|</span>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded text-gray-800">
            Chinese
          </a>
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full w-28 md:w-36 lg:w-48 text-gray-800 bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200 placeholder-gray-500 px-4 py-2 text-sm md:text-base"
        />

        {/* Contact Button (desktop only) */}
        <button className="btn rounded-full bg-blue-700 text-white hover:bg-blue-800 border-none transition-colors duration-200 px-4 py-2 hidden md:flex font-semibold">
          Contact Us
        </button>

        {/* Mobile Dropdown (hamburger icon) */}
        <div className="dropdown dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-800">
            <li>
              <div className="flex justify-center items-center space-x-2 font-medium text-sm">
                <a
                  href="#"
                  className="text-gray-800 hover:bg-gray-200 px-2 py-1 rounded">
                  English
                </a>
                <span className="font-bold text-gray-500 select-none">|</span>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-gray-200 px-2 py-1 rounded">
                  Chinese
                </a>
              </div>
            </li>
            <li>
              <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 mt-2 w-full">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
