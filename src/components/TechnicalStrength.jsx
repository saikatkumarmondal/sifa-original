import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TechnicalStrength = () => {
  const images = [
    "/Photo/Photo/5. Section/1.jpg",
    "/Photo/Photo/5. Section/2.jpg",
    "/Photo/Photo/5. Section/3.jpg",
    "/Photo/Photo/5. Section/4.jpg",
    "/Photo/Photo/5. Section/5.jpg",
    "/Photo/Photo/5. Section/6.jpg",
    "/Photo/Photo/5. Section/7.jpg",
    "/Photo/Photo/5. Section/8.jpg",
    "/Photo/Photo/5. Section/9.jpg",
    "/Photo/Photo/5. Section/10.jpg",
  ];

  const [visibleSet, setVisibleSet] = useState(0);
  const groupRef = useRef(null);
  const gsapBoxRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(groupRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          setVisibleSet((prev) => (prev === 0 ? 1 : 0));
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      groupRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [visibleSet]);

  const getCurrentImages = () => {
    const start = visibleSet * 5;
    return images.slice(start, start + 5);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 my-10 px-4">
      {/* Left Section (Text Boxes) */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Box 1 */}
        <div
          className="group mx-4 md:mx-12 lg:mx-20 p-10 border-4 border-blue-300 bg-white shadow-md rounded-xl transition-all duration-300"
          ref={(el) => (gsapBoxRefs.current[0] = el)}>
          <h1 className="text-4xl font-bold text-black group-hover:text-blue-900 transition">
            Technical Strength
          </h1>
          <p className="text-xl text-gray-800 my-3">
            Ningbo SIFA Elevator Co., Ltd
          </p>
        </div>

        {/* Box 2 */}
        <div
          className="group mx-4 md:mx-12 lg:mx-20 p-10 border-4 border-blue-300 bg-white shadow-md rounded-xl transition-all duration-300"
          ref={(el) => (gsapBoxRefs.current[1] = el)}>
          <p className="text-center text-2xl text-gray-700 group-hover:text-black transition">
            "Ningbo SIFA Elevator Co., Ltd. excels in
            <br /> innovation, precision manufacturing, and
            <br /> quality control. We provide safe, efficient,
            <br /> and customizable elevator solutions with
            <br /> advanced technology and global support."
          </p>
        </div>

        {/* Box 3 */}
        <div
          className="group mx-4 md:mx-12 lg:mx-20 p-10 border-4 border-blue-300 bg-white shadow-md rounded-xl transition-all duration-300"
          ref={(el) => (gsapBoxRefs.current[2] = el)}>
          <p className="text-center text-2xl text-gray-700 group-hover:text-black transition">
            "Smart Technology,
            <br /> Safe and Efficient
            <br /> Elevators."
          </p>
        </div>
      </div>

      {/* Right Section (Diamond Image Carousel) */}
      <div className="w-full lg:w-1/2">
        <div className="w-full h-[400px] md:h-[500px] lg:h-screen bg-white flex justify-center items-center">
          <div
            ref={groupRef}
            className="relative w-[300px] md:w-[500px] lg:w-[700px] h-[400px] md:h-[500px] lg:h-[600px]">
            {getCurrentImages().map((img, idx) => {
              const positions = [
                "top-0 left-0",
                "top-0 right-0",
                "top-[calc(50%-85px)] left-[calc(50%-113px)]", // middle image idx=2
                "bottom-0 left-0",
                "bottom-0 right-0",
              ];

              // Add inline style only for middle image on mobile (width < 768px)
              const mobileOffsetStyle =
                idx === 2 && window.innerWidth < 768
                  ? {
                      left: `calc(50% - 113px + 50px)`,
                      top: `calc(50% - 85px + 30px)`,
                    }
                  : {};

              return (
                <img
                  key={idx}
                  src={img}
                  alt={`photo-${idx}`}
                  className={`absolute
                    w-[100px] md:w-[180px] lg:w-[230px]
                    h-[100px] md:h-[160px] lg:h-[200px]
                    object-cover border rounded-4xl border-white
                    ${positions[idx]}
                    transition-all duration-500
                  `}
                  style={mobileOffsetStyle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStrength;
