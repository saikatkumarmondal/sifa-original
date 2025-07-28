import React from "react";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const logoRef = useRef(null);
  const dividerRef = useRef(null);
  const image = { path: "/Photo/Photo/LOGO/SIFA LOGO white png.png" };

  useEffect(() => {
    gsap.to(logoRef.current, {
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    gsap.to(dividerRef.current, {
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <footer className="footer sm:footer-horizontal bg-blue-500 p-10 text-white">
        <nav>
          <div className="w-[120px] h-[60px]">
            <img
              src={image.path}
              alt=""
              className="w-full h-full mb-6 sm:mb-0"
            />
          </div>
          <a
            className="link link-hover hover:text-yellow-400 transition-colors duration-300"
            href="/">
            <p className="text-xm sm:text-2xl font-semibold">
              NINGBO SIFA ELEVATOR CO., LTD.
            </p>
          </a>
          <ul className="flex gap-4">
            <li>
              <IoLocation
                size={28}
                className="hover:text-yellow-400 transition-colors duration-300"
              />
            </li>
            <li className="text-sm">
              A3085, Building 1, No.888,
              <br />
              Dongchang Road, Jiangbei District,
              <br />
              Ningbo, China.
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <IoCall
                size={28}
                className="hover:text-yellow-400 transition-colors duration-300"
              />
            </li>
            <li>
              <a
                href="tel:+8613056798250"
                className="underline text-sm sm:text-base hover:text-yellow-400 transition-colors duration-300">
                +86-13056798250
              </a>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <MdAlternateEmail
                size={28}
                className="hover:text-yellow-400 transition-colors duration-300"
              />
            </li>
            <li>
              <a
                href="mailto:info@nbsifa.com"
                className="underline text-sm sm:text-base hover:text-yellow-400 transition-colors duration-300">
                info@nbsifa.com
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className=" text-[18px]  font-bold mb-3 text-white">ELEVATOR</h6>
          <a className="link link-hover text-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Passenger Elevator</p>
          </a>
          <a className="link link-hover text-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Villa Elevator</p>
          </a>
          <a className="link link-hover text-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Panoramic Elevator</p>
          </a>
          <a className="link link-hovertext-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Hospital Elevator</p>
          </a>
          <a className="link link-hover text-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Freight Elevator</p>
          </a>
          <a className="link link-hover text-[13px]  hover:text-yellow-400 transition-colors duration-300">
            <p>Hydraulic Elevator</p>
          </a>
        </nav>

        <nav>
          <h6 className="text-white text-[18px] font-bold mb-3">ESCALATOR</h6>
          <div className="grid grid-rows gap-4">
            <a className="text-[13px] hover:text-yellow-400 transition-colors duration-300">
              <p>Outdoor Escalator</p>
            </a>
            <a className="text-[13px] hover:text-yellow-400 transition-colors duration-300">
              <p>Indoor Escalator</p>
            </a>
            <a className="text-[13px] hover:text-yellow-400 transition-colors duration-300">
              <p>Moving Walkway</p>
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="text-white text-[18px] font-bold py-5 sm:py-0 mb-3">
            COMPANY
          </h6>
          <div className="grid grid-rows gap-4">
            <a className="text-[13px] hover:text-yellow-400 transition-colors duration-300">
              <p>About Us</p>
            </a>
            <a className="text-[13px] hover:text-yellow-400 transition-colors duration-300">
              <p>Newsroom</p>
            </a>
          </div>
        </nav>
      </footer>

      {/* Divider below the entire footer */}
      <div
        ref={dividerRef}
        className="divider divider-neutral text-white my-0 bg-blue-500"
        style={{
          borderTop: "4px solid #fbbf24",
          height: "8px",
        }}
      />
      <div
        className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2"
        style={{ marginTop: "-10px" }}>
        <p className="m-0 text-sm sm:text-base text-center py-2">
          © {new Date().getFullYear()} NINGBO SIFA ELEVATOR CO., LTD. — Designed
          By
        </p>
        <a
          href="https://neutron.com.bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="pl-3">
          <img
            ref={logoRef}
            src="/Photo/Photo/LOGO/neutron-logo-white (1) (1).webp"
            alt="Neutron Logo"
            className="h-6 object-contain"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
