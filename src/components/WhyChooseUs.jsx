import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbHeadphonesFilled } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
const WhyChooseUs = () => {
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
      <div className=" sm:p-6 w-full md:w-full flex flex-col space-y-5 md:pl-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:p-10 font-extrabold text-center my-4 sm:my-8">
          Why Choose Us
        </h1>
        <div className="max-w-7xl  grid grid-cols-2 gap-10">
          <ul className="flex items-start justify-center gap-2">
            <li>
              <FaRegCheckCircle size={20} />
            </li>
            <li className="flex flex-col leading-tight">
              <p className="font-semibold">Quality First</p>
              <p className="text-sm mt-2">
                International stanvaidart & Strict
                <br />
                inspections
              </p>
            </li>
          </ul>
          <ul className="flex items-start justify-center gap-2">
            <li>
              <TbHeadphonesFilled size={20} />
            </li>
            <li className="flex flex-col leading-tight">
              <p className="font-semibold">Customer Support</p>
              <p className="text-sm mt-2">
                24/7 Service & Technical Assistance
              </p>
            </li>
          </ul>
          <ul className="flex items-start justify-center gap-2">
            <li>
              <IoShieldCheckmarkOutline size={20} />
            </li>
            <li className="flex flex-col leading-tight">
              <p className="font-semibold">Customization</p>
              <p className="text-sm mt-2">
                Designed to fit your building & brand
              </p>
            </li>
          </ul>
          <ul className="flex items-start justify-center gap-2">
            <li>
              <TbTruckDelivery size={20} />
            </li>
            <li className="flex flex-col leading-tight">
              <p className="font-semibold">Fast Delivery</p>
              <p className="text-sm mt-2">Reliable logistics & global reach</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
