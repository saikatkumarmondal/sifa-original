import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const images = [
  { src: "/Photo/Photo/6. Our Work/Afghanistan.png", name: "Afghanistan" },
  { src: "/Photo/Photo/6. Our Work/Dhaka.jpg", name: "Dhaka" },
  { src: "/Photo/Photo/6. Our Work/Ethiopia.png", name: "Ethiopia" },
  { src: "/Photo/Photo/6. Our Work/Indonesia.jpg", name: "Indonesia" },
  { src: "/Photo/Photo/6. Our Work/Laus.png", name: "Laos" },
  { src: "/Photo/Photo/6. Our Work/Rwanda.jpg", name: "Rwanda" },
];

const GlobalCase = () => {
  const trackRef = useRef();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const imageGroupRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageGroupRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => {
          setVisibleIndex((prev) => (prev + 3) % images.length);
          gsap.fromTo(
            imageGroupRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentSet = () => {
    const len = images.length;
    return [
      images[visibleIndex % len],
      images[(visibleIndex + 1) % len],
      images[(visibleIndex + 2) % len],
    ];
  };

  const currentSet = getCurrentSet();

  useEffect(() => {
    const track = trackRef.current;
    gsap.to(track, {
      x: "-100%",
      duration: 25,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="my-5 bg-white text-black">
      {/* 🔹 Headings */}
      <motion.div
        className="my-5 text-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-semibold my-4">Ningbo SIFA Elevator</p>
        <h3 className="text-6xl font-bold my-3">Global Case</h3>
        <p className="text-sm text-gray-800 my-3 whitespace-pre-wrap md:whitespace-nowrap">
          Reliable elevators and escalators for safe, efficient, and
          long-lasting performance.
        </p>
      </motion.div>

      {/* 🔹 Image Slider */}
      <div className="overflow-hidden py-10 bg-white pl-0.05 md:pl-7 lg:-pr-17">
        <div className="relative w-full h-[320px] flex justify-center items-center mx-auto">
          <motion.div
            ref={imageGroupRef}
            className="
              flex gap-6 transition duration-500 
              sm:gap-8 sm:w-full sm:justify-center sm:px-4 
              md:gap-5 md:w-[85%] 
              lg:gap-6 lg:w-[80%] 
              mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {currentSet.map((item, index) => (
              <motion.div
                key={index}
                className="
                  relative w-[350px] h-[300px] rounded-xl overflow-hidden shadow-md border border-white
                  sm:w-[280px] sm:h-[240px]
                  md:w-[320px] md:h-[280px]
                  lg:w-[350px] lg:h-[300px]
                "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.src}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1 rounded-full">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCase;
