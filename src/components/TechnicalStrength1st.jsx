import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
  { src: "/Photo/Photo/5. Section/1.jpg" },
  { src: "/Photo/Photo/5. Section/2.jpg" },
  { src: "/Photo/Photo/5. Section/3.jpg" },
  { src: "/Photo/Photo/5. Section/4.jpg" },
  { src: "/Photo/Photo/5. Section/5.jpg" },
  { src: "/Photo/Photo/5. Section/6.jpg" },
  { src: "/Photo/Photo/5. Section/7.jpg" },
  { src: "/Photo/Photo/5. Section/8.jpg" },
];

const TechnicalStrength1st = () => {
  const trackRef = useRef();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const imageGroupRef = useRef(null);

  // Track current screen size to change number of images per set
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1); // sm
      } else if (width < 1024) {
        setSlidesPerView(2); // md
      } else {
        setSlidesPerView(4); // lg+
      }
    };

    updateSlides(); // initial check
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageGroupRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => {
          setVisibleIndex((prev) => (prev + slidesPerView) % images.length);
          gsap.fromTo(
            imageGroupRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesPerView]);

  const getCurrentSet = () => {
    const len = images.length;
    return Array.from({ length: slidesPerView }, (_, i) => {
      return images[(visibleIndex + i) % len];
    });
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
    <div className="my-15">
      <div>
        <h1 className="text-5xl font-bold text-black group-hover:text-blue-900 transition text-center">
          Technical Strength
        </h1>
        <p className="text-xl text-gray-800 mt-1 text-center">
          Ningbo SIFA Elevator Co., Ltd.
        </p>
      </div>

      <div className="my-2">
        <div className="overflow-hidden py-10 bg-white pl-0.05 md:pl-7 lg:-pr-17">
          <div className="relative w-full h-[320px] flex flex-rows justify-center items-center mx-auto">
            <div
              ref={imageGroupRef}
              className="
                flex gap-6 transition duration-500 
                sm:gap-6 sm:w-full sm:justify-center sm:px-4 
                md:gap-6 md:w-[90%] 
                lg:gap-6 lg:w-[80%] 
                mx-auto">
              {currentSet.map((item, index) => (
                <div
                  key={index}
                  className="
                    relative w-[350px] h-[300px] rounded-xl overflow-hidden shadow-md border border-white
                    sm:w-[90%] sm:h-[220px]
                    md:w-[45%] md:h-[260px]
                    lg:w-[23%] lg:h-[300px]
                  ">
                  <img
                    src={item.src}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStrength1st;
