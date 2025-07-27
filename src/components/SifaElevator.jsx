import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SifaElevator = () => {
  const cardRefs = useRef([]); // Store refs for each card

  const elevatorData = [
    {
      src: "/Photo/Photo/2.Section/1. Passenger Elevator.jpg",
      label: "Passenger Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/2. Villa Elevator.jpg",
      label: "Villa Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/3.Panoramic Elevator.png",
      label: "Panoramic Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/4. Hospital Elevator.png",
      label: "Hospital Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/5. Freight Elevator.png",
      label: "Freight Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/6. Hydraulic Elevator.png",
      label: "Hydraulic Elevator",
    },
    {
      src: "/Photo/Photo/2.Section/7. Escalator.jpg",
      label: "Escalator",
    },
    {
      src: "/Photo/Photo/2.Section/8. Moving Walks.jpg",
      label: "Moving Walks",
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div className="mx-4 sm:mx-6 md:mx-10">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Ningbo SIFA Elevator Co., Ltd.</h1>
        <p className="text-xl font-semibold mt-2">
          “Smooth, Safe & Reliable Movement – Vertically and Horizontally”
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {elevatorData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-lg p-5 bg-white cursor-pointer">
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 w-full bg-white/90 py-4 text-center">
              <p className="text-2xl font-bold text-black p-2 text-center mx-auto">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SifaElevator;
