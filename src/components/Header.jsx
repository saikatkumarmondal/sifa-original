import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="navbar bg-white shadow-xl text-black px-4 py-2 h-[90px] transition-all duration-300 relative">
        {/* Logo */}
        <div className="flex-1 flex items-center w-[200px] h-[100px]">
          <Link to="/">
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO Dark G.png"
              alt="SIFA Logo"
              className="w-[80px] h-[55px] md:w-[100px] md:h-[70px] lg:w-[130px] lg:h-[95px] object-contain mr-2 relative -right-8"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* SIFA Online */}
          <a className="btn btn-ghost text-[10px] md:text-sm font-bold hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded-lg hidden md:flex">
            SIFA Online
          </a>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-1 font-medium text-sm">
            <a
              href="#"
              className="hover:bg-gray-200 px-2 py-1 rounded text-gray-800"
            >
              English
            </a>
            <span className="font-bold text-gray-500 select-none">|</span>
            <a
              href="#"
              className="hover:bg-gray-200 px-2 py-1 rounded text-gray-800"
            >
              Chinese
            </a>
          </div>

          {/* Search Box */}
          <div className="relative h-10 w-28 md:w-36 lg:w-48 group">
            <input
              type="text"
              placeholder="Search..."
              className="absolute right-0 input input-bordered rounded-full text-gray-800 bg-white placeholder-gray-500 px-4 py-2 text-sm md:text-base
               w-full transition-all duration-300 group-focus-within:w-51"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600 z-10"
            >
              <IoIosSearch size={20} />
            </button>
          </div>

          {/* Contact Us */}
          <div className="pl-17">
            <Link
              to="/contact"
              className="btn rounded-full bg-blue-700 text-white hover:bg-blue-800 border-none transition-colors duration-200 px-6 py-2 hidden md:flex font-semibold relative -left-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
