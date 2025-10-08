import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiChevronDown, HiChevronRight, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [mobileDropdowns, setMobileDropdowns] = useState({}); // Nested dropdown states
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    fetch("http://148.66.154.205:7777/get-categories")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) setSpareParts(data.data);
        else setSpareParts([]);
      })
      .catch((err) => {
        console.error("Error fetching spare parts:", err);
        setSpareParts([]);
      });
  }, []);

  // toggle function
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <nav className="w-full">
        <div className="w-full px-4 lg:px-8 py-3 flex items-center justify-between">
          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex lg:flex-1 items-center justify-around gap-6">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>

            {/* Elevator */}
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Elevator
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded hidden group-hover:block z-50">
                {[
                  "Passenger",
                  "Villa",
                  "Panoramic",
                  "Hospital",
                  "Freight",
                  "Hydraulic",
                ].map((name, i) => (
                  <li key={i}>
                    <Link
                      to={`/elevators/${name.toLowerCase()}`}
                      className="block px-3 py-2 hover:bg-gray-50"
                    >
                      {name} Elevator
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Escalator */}
            <li className="relative group">
              <button className="flex items-center cursor-pointer">
                Escalator
                <HiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 top-full w-56 bg-white shadow-xl rounded-lg hidden group-hover:block z-50 border border-gray-100">
                {[
                  "Passenger",
                  "Villa",
                  "Panoramic",
                  "Hospital",
                  "Freight",
                  "Hydraulic",
                ].map((name, i) => (
                  <li key={i} className="transition-colors duration-200">
                    <Link
                      to={`/elevators/${name.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition-all duration-200"
                    >
                      {name} Elevator
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Spare Parts */}
            <li>
              <button
                className="flex justify-between items-center w-full py-2"
                onClick={() => toggleMobileDropdown("spareParts")}
              >
                Spare Parts
                <HiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    mobileDropdowns["spareParts"] ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdowns["spareParts"] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <ul className="ml-4 border-l pl-3 space-y-1">
                  {spareParts.map((parent) => (
                    <li key={parent._id}>
                      {parent.children?.length > 0 ? (
                        <>
                          <button
                            className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
                            onClick={() => toggleMobileDropdown(parent._id)}
                          >
                            {parent.name}
                            <HiChevronDown
                              className={`ml-1 transition-transform duration-200 ${
                                mobileDropdowns[parent._id] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              mobileDropdowns[parent._id]
                                ? "max-h-[1000px]"
                                : "max-h-0"
                            }`}
                          >
                            <ul className="ml-4 border-l pl-3 space-y-1">
                              {parent.children.map((child) => (
                                <li key={child._id}>
                                  {child.children?.length > 0 ? (
                                    <>
                                      <button
                                        className="flex justify-between items-center w-full py-2 text-gray-700"
                                        onClick={() =>
                                          toggleMobileDropdown(child._id)
                                        }
                                      >
                                        {child.name}
                                        <HiChevronDown
                                          className={`ml-1 transition-transform duration-200 ${
                                            mobileDropdowns[child._id]
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                      <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                          mobileDropdowns[child._id]
                                            ? "max-h-[1000px]"
                                            : "max-h-0"
                                        }`}
                                      >
                                        <ul className="ml-4 border-l pl-3 space-y-1">
                                          {child.children.map((grand) => (
                                            <li key={grand._id}>
                                              <Link
                                                to={`/spare-parts/${grand._id}`}
                                                className="block py-2 text-gray-700 hover:text-green-700"
                                                onClick={() => setIsOpen(false)}
                                              >
                                                {grand.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </>
                                  ) : (
                                    <Link
                                      to={`/spare-parts/${child._id}`}
                                      className="block py-2 text-gray-700 hover:text-green-700"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.name}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={`/spare-parts/${parent._id}`}
                          className="block py-2 text-gray-700 hover:text-green-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {parent.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link to="/career" className="hover:text-blue-600">
                Career
              </Link>
            </li>
            <li>
              <Link to="/newsroom" className="hover:text-blue-600">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>

              {/* Elevator */}
              <li>
                <button
                  className="flex justify-between items-center w-full py-2"
                  onClick={() => toggleMobileDropdown("elevator")}
                >
                  Elevator{" "}
                  <HiChevronDown
                    className={`${
                      mobileDropdowns["elevator"] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdowns["elevator"] ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <ul className="ml-4 border-l pl-3 space-y-1">
                    {[
                      "Passenger",
                      "Villa",
                      "Panoramic",
                      "Hospital",
                      "Freight",
                      "Hydraulic",
                    ].map((name, i) => (
                      <li key={i}>
                        <Link
                          to={`/elevators/${name.toLowerCase()}`}
                          className="block py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {name} Elevator
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Escalator */}
              <li>
                <button
                  className="flex justify-between items-center w-full py-2"
                  onClick={() => toggleMobileDropdown("escalator")}
                >
                  Escalator{" "}
                  <HiChevronDown
                    className={`${
                      mobileDropdowns["escalator"] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdowns["escalator"] ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <ul className="ml-4 border-l pl-3 space-y-1">
                    {["Indoor", "Outdoor", "Moving Walks"].map((name, i) => (
                      <li key={i}>
                        <Link
                          to={`/escalator/${name
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="block py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Spare Parts */}
              <li>
                <button
                  className="flex justify-between items-center w-full py-2"
                  onClick={() => toggleMobileDropdown("spareParts")}
                >
                  Spare Parts
                  <HiChevronDown
                    className={`ml-1 transition-transform duration-200 ${
                      mobileDropdowns["spareParts"] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdowns["spareParts"] ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <ul className="ml-4 border-l pl-3 space-y-1">
                    {spareParts.map((parent) => (
                      <li key={parent._id}>
                        {parent.children?.length > 0 ? (
                          <>
                            <button
                              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
                              onClick={() => toggleMobileDropdown(parent._id)}
                            >
                              {parent.name}
                              <HiChevronDown
                                className={`ml-1 transition-transform duration-200 ${
                                  mobileDropdowns[parent._id]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                mobileDropdowns[parent._id]
                                  ? "max-h-[1000px]"
                                  : "max-h-0"
                              }`}
                            >
                              <ul className="ml-4 border-l pl-3 space-y-1">
                                {parent.children.map((child) => (
                                  <li key={child._id}>
                                    {child.children?.length > 0 ? (
                                      <>
                                        <button
                                          className="flex justify-between items-center w-full py-2 text-gray-700"
                                          onClick={() =>
                                            toggleMobileDropdown(child._id)
                                          }
                                        >
                                          {child.name}
                                          <HiChevronDown
                                            className={`ml-1 transition-transform duration-200 ${
                                              mobileDropdowns[child._id]
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                          />
                                        </button>
                                        <div
                                          className={`overflow-hidden transition-all duration-300 ${
                                            mobileDropdowns[child._id]
                                              ? "max-h-[1000px]"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <ul className="ml-4 border-l pl-3 space-y-1">
                                            {child.children.map((grand) => (
                                              <li key={grand._id}>
                                                <Link
                                                  to={`/spare-parts/${grand._id}`}
                                                  className="block py-2 text-gray-700 hover:text-green-700"
                                                  onClick={() =>
                                                    setIsOpen(false)
                                                  }
                                                >
                                                  {grand.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </>
                                    ) : (
                                      <Link
                                        to={`/spare-parts/${child._id}`}
                                        className="block py-2 text-gray-700 hover:text-green-700"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {child.name}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link
                            to={`/spare-parts/${parent._id}`}
                            className="block py-2 text-gray-700 hover:text-green-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {parent.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  to="/career"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/newsroom"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
