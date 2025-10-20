import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbHeadphonesFilled } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const videoAndImage = {
    image: "/Photo/Photo/4.Section/Photo.jpg",
    video: "/Photo/Photo/4.Section/Video.mp4",
  };

  return (
    <div className="bg-white text-black grid grid-cols-1 p-3 my-9 gap-6 md:grid md:grid-cols-2 md:gap-9 lg:flex-nowrap lg:gap-10">
      {/* Background Image with Video */}
      <motion.div
        className="relative w-full md:w-full h-[400px] md:h-[600px] bg-cover bg-center p-3"
        style={{ backgroundImage: `url(${videoAndImage.image})` }}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[450px] h-[250px] sm:h-[350px] flex items-center justify-center z-20">
          <motion.video
            src={videoAndImage.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full md:w-[200px] md:h-[200px] lg:w-full lg:h-full object-cover rounded-xl shadow-lg border border-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="sm:p-6 w-full md:w-full flex flex-col space-y-5 md:pl-10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:p-10 font-extrabold text-center my-4 sm:my-8">
          Why Choose Us
        </h1>

        <div className="max-w-7xl grid grid-cols-2 gap-10">
          {[
            {
              icon: <FaRegCheckCircle size={20} />,
              title: "Quality First",
              desc: (
                <>
                  International standards & strict
                  <br /> inspections
                </>
              ),
            },
            {
              icon: <TbHeadphonesFilled size={20} />,
              title: "Customer Support",
              desc: "24/7 Service & Technical Assistance",
            },
            {
              icon: <IoShieldCheckmarkOutline size={20} />,
              title: "Customization",
              desc: "Designed to fit your building & brand",
            },
            {
              icon: <TbTruckDelivery size={20} />,
              title: "Fast Delivery",
              desc: "Reliable logistics & global reach",
            },
          ].map((item, i) => (
            <motion.ul
              key={i}
              className="flex items-start justify-center gap-2"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <li>{item.icon}</li>
              <li className="flex flex-col leading-tight">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm mt-2">{item.desc}</p>
              </li>
            </motion.ul>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
