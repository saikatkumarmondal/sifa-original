import React, { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router";
import { RxCrossCircled } from "react-icons/rx";
const Navbar = () => {
  const divRef = useRef();
  const liRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state

  const menuPanelRef = useRef();
  const mobileItemRefs = useRef([]);
  mobileItemRefs.current = [];

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

  // Animate logo left/right
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(divRef.current, { x: 300, duration: 1 }).to(divRef.current, {
      x: -6,
      duration: 1,
    });
  }, []);

  // Animate hover items
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

  return (
    <nav
      className="sticky top-0 z-50 bg-blue-500 px-4 py-3 md:px-9 md:py-4"
      style={{ position: "sticky" }}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="h-[110px] w-[139px]">
          <div className="h-[95px] w-[120px] flex items-center justify-center">
            <img
              src="/Photo/Photo/LOGO/logo.png"
              className="w-full h-full pt-3"
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
        <ul className="hidden lg:flex gap-5 text-white absolute">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (liRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative left-130 whitespace-nowrap flex items-center cursor-pointer">
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

              {/* Underline on hover */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
                  hoveredIndex === index ||
                  window.location.pathname === item.path
                    ? "w-full"
                    : "w-0"
                }`}></span>
            </li>
          ))}
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

              {/* Menu Items with my-[5px] */}
              {menuItems.map((item, index) => (
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
              ))}
            </ul>
          </>
        )}
      </>
    </nav>
  );
};

export default Navbar;
