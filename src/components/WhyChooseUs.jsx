import React, { useState } from "react";

const WhyChooseUs = () => {
      const fullText = `Ningbo SIFA Elevator Co., Ltd. is a trusted leader in vertical transportation, offering high-quality elevators and escalators for residential, commercial, and industrial use. We specialize in passenger, villa, freight, and panoramic elevators, as well as key components like control systems, door operators, and safety gear. Our products are built to meet international safety and performance standards, ensuring reliability and durability in every installation.`;

    const [ showFull, setShowFull ] = useState( false );
      const words = fullText.split(" ");
      const shortText = words.slice(0, 20).join(" ") + "...";
  const videoAndImage = {
    image: "/Photo/Photo/4.Section/Photo.jpg",
    video: "/Photo/Photo/4.Section/Video.mp4",
  };

  return (
    <div className="grid grid-cols-1 p-3 my-9 gap-6 md:grid md:grid-cols-2 md:gap-9 lg:flex-nowrap lg:gap-10">
      {/* Background Image with Video */}
      <div
        className="relative w-full md:w-full h-[400px] md:h-[600px] bg-cover bg-center p-3"
        style={{ backgroundImage: `url(${videoAndImage.image})` }}>
        {/* ✅ Video Visible on All Devices */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[450px] h-[250px] sm:h-[350px] flex items-center justify-center z-20">
          <video
            src={videoAndImage.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full md:w-[200px] md:h-[200px] lg:w-full lg:h-full object-cover rounded-xl shadow-lg border border-white"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className=" sm:p-6 w-full md:w-1/2 flex flex-col space-y-5 md:pl-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:p-10 font-extrabold text-center my-4 sm:my-8">
          Why Choose Us
        </h1>
        <div className="max-w-xl mx-auto ">
          <p className="text-gray-800 leading-6 text-base sm:text-lg lg:text-xl ">
            {showFull ? fullText : shortText}
          </p>
          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-2 text-blue-600 font-semibold hover:underline">
            {showFull ? "Show Less ↑" : "Learn More →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
