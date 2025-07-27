import React, { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import gsap from "gsap";
import { NavLink } from "react-router";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  // Single declarations only:
  const liRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [elevatorOpen, setElevatorOpen] = useState(false);
  const [escalatorOpen, setEscalatorOpen] = useState(false);

  const menuPanelRef = useRef();
  const mobileItemRefs = useRef([]);
  mobileItemRefs.current = [];

  const elevatorDropdownRef = useRef();
  const escalatorDropdownRef = useRef();

  // GSAP animations for dropdowns
  useEffect(() => {
    if (elevatorOpen) {
      gsap.fromTo(
        elevatorDropdownRef.current,
        { y: -20, opacity: 0, display: "block" },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(elevatorDropdownRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () =>
          gsap.set(elevatorDropdownRef.current, { display: "none" }),
      });
    }
  }, [elevatorOpen]);

  useEffect(() => {
    if (escalatorOpen) {
      gsap.fromTo(
        escalatorDropdownRef.current,
        { y: -20, opacity: 0, display: "block" },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(escalatorDropdownRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () =>
          gsap.set(escalatorDropdownRef.current, { display: "none" }),
      });
    }
  }, [escalatorOpen]);

  // Hover scaling animations
  useEffect(() => {
    liRefs.current.forEach((el, i) => {
      if (el && hoveredIndex !== i) {
        gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.in" });
      }
    });
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const el = liRefs.current[index];
    if (el) gsap.to(el, { scale: 1.15, duration: 0.4, ease: "power3.out" });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const el = liRefs.current[index];
    if (el) gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const addToRefs = (el) => {
    if (el && !mobileItemRefs.current.includes(el)) {
      mobileItemRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuPanelRef.current,
        { x: "-100%", opacity: 0 },
        { x: "50%", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );

      gsap.fromTo(
        mobileItemRefs.current,
        { x: -10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );
    }
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Elevator", path: "/elevator" },
    { name: "Escalator", path: "/escalator" },
    { name: "Spare Parts", path: "/spare-parts" },
    { name: "Contact Us", path: "/contact" },
    { name: "Newsroom", path: "/newsroom" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-blue-500 h-[90px] px-4 py-3 md:px-9 md:py-4"
      style={{ position: "sticky" }}>
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <div className="h-[110px] w-[139px] pb-8">
          <div className="h-[px] w-[120px] flex items-center justify-center">
            <img
              src="/Photo/Photo/LOGO/SIFA LOGO white png.png"
              className="w-full h-full pt-3 -mt-[13px]"
              alt="SIFA Logo"
            />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-white text-3xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <CiMenuBurger />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 text-lg font-medium pb-13 text-white">
          {menuItems.map((item, index) =>
            item.name === "Elevator" ? (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                onMouseEnter={() => {
                  handleMouseEnter(index);
                  setElevatorOpen(true);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(index);
                  setElevatorOpen(false);
                }}
                className="relative whitespace-nowrap flex flex-col items-start text-xl cursor-pointer pl-3 ">
                <button
                  onClick={() => setElevatorOpen((prev) => !prev)}
                  className="flex items-center gap-1 transition-all duration-300">
                  {item.name}
                  {hoveredIndex === index ? (
                    <IoIosArrowRoundUp className="transition" />
                  ) : (
                    <IoIosArrowRoundDown className="transition" />
                  )}
                </button>

                {/* Elevator Dropdown */}
                <div
                  ref={elevatorDropdownRef}
                  className="absolute top-[100%] left-0 mt-1 bg-white text-black shadow-md rounded-md overflow-hidden w-52 z-40 hidden">
                  {[
                    "Passenger Elevator",
                    "Villa Elevator",
                    "Panoramic Elevator",
                    "Hospital Elevator",
                    "Freight Elevator",
                    "Hydraulic Elevator",
                  ].map((type, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-yellow-100 w-full text-sm cursor-pointer transition-all">
                      {type}
                    </div>
                  ))}
                </div>
              </li>
            ) : item.name === "Escalator" ? (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                onMouseEnter={() => {
                  handleMouseEnter(index);
                  setEscalatorOpen(true);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(index);
                  setEscalatorOpen(false);
                }}
                className="relative whitespace-nowrap flex flex-col items-start text-xl cursor-pointer px-5">
                <button
                  onClick={() => setEscalatorOpen((prev) => !prev)}
                  className="flex items-center gap-1 transition-all duration-300">
                  {item.name}
                  {hoveredIndex === index ? (
                    <IoIosArrowRoundUp className="transition" />
                  ) : (
                    <IoIosArrowRoundDown className="transition" />
                  )}
                </button>

                {/* Escalator Dropdown */}
                <div
                  ref={escalatorDropdownRef}
                  className="absolute top-[100%] left-0 mt-1 bg-white text-black shadow-md rounded-md overflow-hidden w-52 z-40 hidden">
                  {[
                    "Indoor Escalator",
                    "Outdoor Escalator",
                    "Moving Walks",
                  ].map((type, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-yellow-100 w-full text-sm cursor-pointer transition-all">
                      {type}
                    </div>
                  ))}
                </div>
              </li>
            ) : (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400 border-b-2 border-indigo-800 scale-105"
                        : "hover:text-yellow-300"
                    }`
                  }>
                  {item.name}
                  {hoveredIndex === index ? (
                    <IoIosArrowRoundUp className="transition" />
                  ) : (
                    <IoIosArrowRoundDown className="transition" />
                  )}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <>
        {menuOpen && (
          <>
            <ul
              ref={menuPanelRef}
              className="fixed top-0 left-0 w-1/2 h-full bg-blue-600 z-40 p-3 shadow-lg py-6 group">
              {/* Cross Icon */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-3 right-3 mb-3 text-white text-2xl hover:text-yellow-300 transition-colors duration-200">
                <RxCrossCircled />
              </button>

              {/* <-- REPLACE THIS PART --> */}
              {menuItems.map((item, index) => {
                const elevatorItems = [
                  "Passenger Elevator",
                  "Villa Elevator",
                  "Panoramic Elevator",
                  "Hospital Elevator",
                  "Freight Elevator",
                  "Hydraulic Elevator",
                ];

                const escalatorItems = [
                  "Indoor Escalator",
                  "Outdoor Escalator",
                  "Moving Walks",
                ];

                if (item.name === "Elevator") {
                  return (
                    <li key={index} className="my-[20px]">
                      <button
                        onClick={() => setElevatorOpen((prev) => !prev)}
                        className="w-full text-left py-2 px-3 rounded text-white text-base flex justify-between items-center hover:bg-yellow-300 hover:text-black transition-all duration-200">
                        {item.name}
                        {elevatorOpen ? (
                          <IoIosArrowRoundUp className="inline-block" />
                        ) : (
                          <IoIosArrowRoundDown className="inline-block" />
                        )}
                      </button>
                      {elevatorOpen && (
                        <ul className="pl-6 mt-2 space-y-1 text-white text-sm">
                          {elevatorItems.map((sub, i) => (
                            <li key={i}>
                              <NavLink
                                to={`${item.path}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={() => setMenuOpen(false)}
                                className="block py-1 px-2 rounded hover:bg-yellow-300 hover:text-black transition-colors duration-200">
                                {sub}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                } else if (item.name === "Escalator") {
                  return (
                    <li key={index} className="my-[20px]">
                      <button
                        onClick={() => setEscalatorOpen((prev) => !prev)}
                        className="w-full text-left py-2 px-3 rounded text-white text-base flex justify-between items-center hover:bg-yellow-300 hover:text-black transition-all duration-200">
                        {item.name}
                        {escalatorOpen ? (
                          <IoIosArrowRoundUp className="inline-block" />
                        ) : (
                          <IoIosArrowRoundDown className="inline-block" />
                        )}
                      </button>
                      {escalatorOpen && (
                        <ul className="pl-6 mt-2 space-y-1 text-white text-sm">
                          {escalatorItems.map((sub, i) => (
                            <li key={i}>
                              <NavLink
                                to={`${item.path}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={() => setMenuOpen(false)}
                                className="block py-1 px-2 rounded hover:bg-yellow-300 hover:text-black transition-colors duration-200">
                                {sub}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      ref={addToRefs}
                      className="my-[20px]"
                      onMouseEnter={() =>
                        gsap.to(mobileItemRefs.current[index], {
                          scale: 1.05,
                          duration: 0.3,
                          ease: "power2.out",
                        })
                      }
                      onMouseLeave={() =>
                        gsap.to(mobileItemRefs.current[index], {
                          scale: 1,
                          duration: 0.3,
                          ease: "power2.out",
                        })
                      }>
                      <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block py-2 px-3 rounded text-white text-base transition-all duration-200 ${
                            isActive
                              ? "bg-indigo-400 text-black"
                              : "hover:bg-yellow-300 hover:text-black"
                          }`
                        }>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                }
              })}
              {/* <-- END REPLACE --> */}
            </ul>
          </>
        )}
      </>
    </nav>
  );
};

export default Navbar;
