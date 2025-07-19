import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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

  const currentSet = images.slice(visibleIndex, visibleIndex + 3);
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
    <div className="my-5">
      <div className="my-5">
        <p className="text-xl  text-center font-semibold my-4">
          Ningbo SIFA Elevator
        </p>
        <h3 className="text-6xl font-bold text-center my-3">Global Case</h3>
        <p className="text-sm text-gray-700 text-center my-3">
          Reliable elevators and escalators for safe, efficient, and
          <br /> long-lasFng performance.
        </p>
      </div>

      <div>
        <div className="overflow-hidden py-10 bg-white">
          <div className="relative w-full h-[320px] flex justify-center items-center">
            <div
              ref={imageGroupRef}
              className="
          flex gap-6 transition duration-500 
          sm:gap-4 sm:w-[90%] 
          md:gap-5 md:w-[85%] 
          lg:gap-6 lg:w-[80%]">
              {currentSet.map((item, index) => (
                <div
                  key={index}
                  className="
              relative w-[350px] h-[300px] rounded-xl overflow-hidden shadow-md border border-white
              sm:w-[280px] sm:h-[240px]
              md:w-[320px] md:h-[280px]
              lg:w-[350px] lg:h-[300px]
            ">
                  <img
                    src={item.src}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1 rounded-full">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCase;
