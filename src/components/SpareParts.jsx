import React from "react";

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
    // Removed all section/div padding to ensure no "extra space" around the entire component
    <section className="mt-10">
      {" "}
      {/* Kept mt-10 for top margin from content above */}
      <div className="mx-auto mb-10 text-center">
        {" "}
        {/* Reduced mb from 12 to 10 for less space */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Spare Parts Solution
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          “Quality Spare Parts and Components We Offer for Elevators &
          Escalators”
        </p>
      </div>
      {/* Grid Container */}
      {/* Removed px-4 from this div as well for no extra horizontal space */}
      <div className="max-w-[1200px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            gap-y-6        /* Slightly reduced vertical gap from 8 to 6 */
            gap-x-2        /* Reduced default horizontal gap from 4 to 2 */
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4 /* Changed to 3 columns on lg as per the original for consistency if needed */
            md:gap-x-2     /* Specific horizontal gap for md and lg */
            lg:gap-x-3
            justify-items-center /* Centers grid items within their cells */
          ">
          {sparePartsData.map((part) => (
            <div
              key={part.id}
              className="
                w-[300px] h-[330px]
                relative               /* Keep relative for absolute positioning of text overlay */
                overflow-hidden
                rounded-lg             /* Slightly rounded corners for aesthetics */
                shadow-lg              /* Prominent shadow */
                flex                   /* Removed flex-col to simplify positioning */
                justify-center         /* Centers content horizontally within the card */
                items-end              /* Pushes content to the very bottom */
                group
                transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
              "
              style={{
                backgroundImage: `url('${part.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // Removed bg-gray-100 fallback here, letting background image handle it fully
              }}>
              {/* Text overlay - now positioned absolutely at the bottom middle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-10px)] bg-gradient-to-t from-black via-black/70 to-transparent p-3 text-white rounded-b-lg">
                {" "}
                {/* Reduced padding and specific width for bottom alignment */}
                <p className="text-center font-bold text-lg">{part.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpareParts;
