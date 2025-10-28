import React from "react";
import { motion } from "framer-motion";
import LogoImage from "/3d.jpg";
import Footer from "./Footer";

const NewsRoom = () => {
  return (
    <>
      <div className="w-full h-72 my-10">
        <img
          src={LogoImage}
          alt="SIFA Elevator Banner" // NEW FIX: Use 'w-screen' and 'relative' position with custom margin to force full-width
          className="block w-screen h-full object-fill relative left-1/2 ml-[-50vw]"
        />
      </div>

      <div className="p-4 md:p-8 ">
        {/* 1 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-auto md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl border border-gray-300 p-6 flex flex-col justify-center hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            SIFA Expands Production Range
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Ningbo SIFA Elevator Co., Ltd. has expanded its manufacturing line
            to include a wide range of elevator parts such as COP & LOP,
            encoders, switches,
            <br /> sensors, safety gears, door operators, and controllers.
            <br /> With these additions, SIFA continues to deliver reliable
            elevator solutions focused on quality, safety, and customer
            satisfaction.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-auto md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl my-3 border border-gray-300 p-6 flex flex-col justify-center hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Launch of Complete Elevator by SIFA
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            SIFA is proud to introduce its new complete elevator, developed with
            advanced design, durable materials, and modern technology. Every
            detail reflects our commitment to comfort, performance, and
            long-term reliability — offering customers safe and efficient
            elevator solutions that meet global standards.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-auto md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl my-3 border border-gray-300 p-6 flex flex-col justify-center hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            New Elevator Door Systems Released
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Ningbo SIFA Elevator has launched a new series of door operators,
            landing devices, controllers, and hanger rollers. These components
            are designed for smooth operation, stable performance, and extended
            service life, ensuring safety and comfort in every elevator ride.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-auto md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl my-3 border border-gray-300 p-6 flex flex-col justify-center hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Supplying All Kinds of Elevator and Escalator Spare Parts
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Ningbo SIFA Elevator Co., Ltd. provides a complete selection of
            elevator and escalator spare parts for customers around the world.
            From control panels and sensors to rollers, safety gears, and door
            systems — every product is manufactured with strict quality control
            and offered at competitive prices. SIFA aims to be your trusted
            one-stop partner for all elevator and escalator component needs.
          </p>
        </motion.div>

        {/* 5 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-auto md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl my-3 border border-gray-300 p-6 flex flex-col justify-center hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Expanding into Escalator Components
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            SIFA has broadened its product portfolio to include high-quality
            escalator components such as step chains, handrails, drive units,
            and control systems. Each part is built for safety, durability, and
            smooth operation, ensuring reliable performance in every
            installation. With this expansion, SIFA continues to grow as a
            comprehensive supplier for both elevators and escalators.
          </p>
        </motion.div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NewsRoom;
