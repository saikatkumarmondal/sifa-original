import React from "react";
import { motion } from "framer-motion";

const SpareParts = () => {
  const sparePartsData = [
    {
      id: 1,
      src: "/Photo/Photo/3. Section/1. Elevator Control System.jpg",
      title: "Elevator Control System",
    },
    {
      id: 2,
      src: "/Photo/Photo/3. Section/2. Display.jpg",
      title: "Display",
    },
    {
      id: 3,
      src: "/Photo/Photo/3. Section/3. Photoelectric Switch.jpg",
      title: "Photoelectric Switch",
    },
    {
      id: 4,
      src: "/Photo/Photo/3. Section/4. Elevator Safety Gear Set.jpg",
      title: "Elevator Safety Gear Set",
    },
    {
      id: 5,
      src: "/Photo/Photo/3. Section/5. Intercom Set.jpg",
      title: "Intercom Set",
    },
    {
      id: 6,
      src: "/Photo/Photo/3. Section/6. Encoder.jpg",
      title: "Encoder",
    },
    {
      id: 7,
      src: "/Photo/Photo/3. Section/7. Limit Switch.jpg",
      title: "Limit Switch",
    },
    {
      id: 8,
      src: "/Photo/Photo/3. Section/8. Elevator Push Button.jpg",
      title: "Elevator Push Button",
    },
  ];

  return (
    <section className="mt-10 px-2 sm:px-4 bg-white text-black">
      {/* 🔹 Animated Heading Section */}
      <motion.div
        className="mx-auto mb-10 text-center"
        initial={{ opacity: 0, y: 50, scale: 0.8 }} // start faded, lower, and smaller
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // fade in, move up, and zoom to normal
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
        viewport={{ once: true }} // animate only once when in view
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Spare Parts Solution
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl md:whitespace-nowrap text-gray-600 max-w-2xl mx-auto leading-relaxed">
          “Quality Spare Parts and Components We Offer for Elevators &
          Escalators”
        </p>
      </motion.div>

      {/* 🔹 Grid Section (your existing code) */}
      <div className="max-w-[1200px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            gap-y-6
            gap-x-3
            justify-items-center
          "
        >
          {sparePartsData.map((part) => (
            <div
              key={part.id}
              className="
                w-full
                max-w-[300px]
                h-[250px]
                sm:h-[300px]
                md:h-[330px]
                relative
                overflow-hidden
                rounded-lg
                shadow-lg
                flex
                justify-center
                items-end
                group
                transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
              "
              style={{
                backgroundImage: `url('${part.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-2 sm:p-3 text-white rounded-b-lg">
                <p className="text-center font-bold text-sm sm:text-base md:text-lg">
                  {part.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpareParts;
