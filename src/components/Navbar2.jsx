import React, { useEffect, useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { RiMenu2Fill } from "react-icons/ri";

const Navbar2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const imageRef = useRef();
  const sidebarRef = useRef();
  const menuItems = [
    "Home",
    "About Us",
    "Elevator",
    "Escalator",
    "Spare Parts",
    "Contact Us",
    "Newsroom",
  ];

//   useGSAP(() => {
//     const tl = gsap.timeline({ repeat: -1, yoyo: true });
//     tl.to(divRef.current, {
//       x: 155,
//       duration: 2,
//       ease: "power2.out",
//     }).to(divRef.current, {
//       x: -6,
//       duration: 2,
//       ease: "power2.out",
//     });
//   }, []);
//   useGSAP(() => {
//     const tl = gsap.timeline({ repeat: -1, yoyo: true });
//     tl.to(imageRef.current, {
//       x: 10,
//       duration: 1,
//       ease: "power1.out",
//     }).to(divRef.current, {
//       x: -6,
//       duration: 2,
//       ease: "power2.out",
//     });
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       gsap.to(sidebarRef.current, {
//         x: 0,
//         duration: 0.3,
//         ease: "power1.out",
//       });
//     } else {
//       gsap.to(sidebarRef.current, {
//         x: "-100%",
//         duration: 0.3,
//         ease: "power1.out",
//       });
//     }
//   }, [isOpen]);

  return (
    <>
      <nav className=" md:block bg-indigo-400 px-10 py-5 flex items-center justify-between md:bg-transparent md:px-0 md:py-0">
        <a href="#" className="md:hidden">
          <img src="/public/Photo/Photo/LOGO/SIFA LOGO white png.png" alt="Logo" className="w-30 h-10" />
        </a>

        <div className="hidden md:flex ">
          <div className="h-auto sticky top-0 z-50 bg-blue-500 px-9 py-2 grid grid-cols-2 md:grid-cols-3 items-center">
            {/* Left Logo */}
            <div
              ref={divRef}
              className="h-[110px] w-[139px] bg-red-900"
              style={{
                clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
              }}>
              <div className="h-[#95px] w-[120px] flex items-center">
                <img
                  src="/public/Photo/Photo/LOGO/SIFA LOGO white png.png"
                  className="w-full h-full"
                  alt=""
                  ref={imageRef}
                />
              </div>
            </div>

            {/* Center Navigation Menu (hidden on mobile) */}
            <ul className="hidden md:flex gap-3 text-white">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="whitespace-nowrap flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  {item}
                  {hoveredIndex === index ? (
                    <IoIosArrowRoundUp />
                  ) : (
                    <IoIosArrowRoundDown />
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Icons and Language */}
            <div className="flex justify-end items-center space-x-4">
             
            </div>
          </div>
        </div>
        <div className="">
         
          <button onClick={() => setIsOpen(!isOpen)}>
            <RiMenu2Fill size={38} color="white" className="md:hidden" />
          </button>
        </div>
      </nav>

      {/* Overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in dropdown from left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={sidebarRef}>
        <div className="p-4 border-b flex justify-between ">
          <img src={TruckImage} className="w-20 h-20" alt="truck" />
          <RxCrossCircled size={30} onClick={() => setIsOpen(false)} />
        </div>
        <ul className="p-4 space-y-3">
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="p-0 flex  items-center">
              {" "}
              Home <IoIosArrowRoundDown size={20} />
            </p>
            <div className="divider p-0"></div>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="flex items-center">
              Pages <IoIosArrowRoundDown size={20} />
            </p>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="flex items-center">
              Services <IoIosArrowRoundDown size={20} />
            </p>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="flex items-center">
              Spare Parts <IoIosArrowRoundDown size={20} />
            </p>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="flex items-center">
              News <IoIosArrowRoundDown size={20}></IoIosArrowRoundDown>
            </p>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <p className="text-gray-400">Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
