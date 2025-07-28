import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const data = {
  "Elevator Door Inverter": null,
  "Elevator Light Curtain": null,
  "Elevator Control System": [
    "Monarch",
    "Step",
    "ARD",
    "Resistance",
    "IGBT",
    "Modernization",
    "Switch & Power Box",
  ],
  "Elevator COP & LOP ": [
    "Box Type COP",
    "Wall Mounted COP",
    "Full Hight COP",
    "Disabled-Accessible COP",
    "Touch Type COP",
    "Box Type LOP",
    "Wall Mounted LOP",
    "Villa Elevator LOP",
    "Hall Lantern ",
    "Landing Overhead Panel ",
    "Fireman Switch",
  ],
  "Traction Machine ": [
    "XINDA",
    "Mona Drive",
    "Torin Drive",
    "Motor Base & Conter Parts",
    "Damping Pad ",
  ],
  "Elevator Nylon Pully": null,
  "Elevator Cabin": [
    "Cabin Design ",
    "Hall Door Design",
    "Ceiling Design",
    "Floor Design ",
    "Handrail Design ",
  ],
  "Elevator Display": null,
  "Elevator Push Button": null,
  "Elevator Encoder": null,
  "Elevator Switch Sensor": null,
  "Elevator Cable ": ["Traveling Cable", "Connection Cable", "Cable Clamp"],
  "Elevator Rope": ["Steel Wire Rope", "Rope Fastening", "Rope Clip"],
  "Elevator Door Parts": [
    "Door Operator",
    "Door Vane",
    "Door Motor",
    "Door Contact",
    "Door Slider",
    "Door Lock",
  ],
  "Elevator Safety Parts": [
    "Elevator Speed Governor",
    "Elevator Safety Gear",
    "Elevator Buffer",
    "Oil Buffer",
    "Polyurethane Buffer",
  ],
  "Elevator Guide Rail & Shoe": [
    "Guide Rail",
    "Guide Rail Supporting Parts",
    "Guide Shoe",
    "Oil Can",
    "Guide Shoe Lining",
  ],
  "Elevator Cabin Flow Fan": null,
  "Elevator Wheel": null,
  "Elevator Lock & Key": [
    "Power Supply Lock",
    "COP Lock",
    "Triangle Lock",
    "Key",
  ],
  "Elevator Intercom": null,
  "Elevator Station Clock": null,
  "Escalator Parts ": [
    "Step",
    "Step Roller",
    "Wheel",
    "Handrail Belt",
    "Chain",
    "Brake",
    "Safety Brush",
    "Comb Plate",
    "Yellow Side",
    "Walkway Pallet",
    "PCB",
    "Others",
  ],
};

const DropdownMenu = ({ isOpen }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(dropdownRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        pointerEvents: "auto",
        display: "grid",
      });
    } else {
      gsap.to(dropdownRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
        pointerEvents: "none",
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      // REMOVED `left-0` AND ADDED `inset-x-0 mx-auto` for centering
      // Adjusted `max-w` to give it a more controlled width for centering.
      className="absolute top-full mt-3 w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)] max-w-7xl mx-auto
                 max-h-[500px] overflow-y-auto bg-white rounded-xl shadow-2xl p-6
                 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-8 gap-y-10 text-gray-700
                 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100"
      style={{
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        transform: "translateY(-20px)",
        display: "none",
      }}>
      {Object.entries(data).map(([category, items], index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold text-blue-700 mb-3 text-[15px] border-b border-blue-200 pb-1">
            {category}
          </h4>
          <ul className="space-y-2">
            {Array.isArray(items) ? (
              items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm px-2 py-1 hover:bg-yellow-400 hover:text-white rounded-md transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))
            ) : items === null ? (
              <li className="text-sm px-2 py-1 hover:bg-yellow-400 hover:text-white rounded-md transition duration-200 cursor-pointer">
                {category}
              </li>
            ) : null}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
