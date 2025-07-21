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
  const [current, setCurrent] = useState(0);
  const groupRef = useRef(null);
  const gsapBoxRefs = useRef([]);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const getCurrentImages = () => {
    const len = images.length;
    return [
      images[(current + 0) % len],
      images[(current + 1) % len],
      images[(current + 2) % len],
      images[(current + 3) % len],
      images[(current + 4) % len],
    ];
  };

  useEffect(() => {
    gsap.set(gsapBoxRefs.current[2], { autoAlpha: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    tl.to(gsapBoxRefs.current[1], {
      autoAlpha: 0,
      y: -10,
      duration: 1,
      onComplete: () => {
        gsap.set(gsapBoxRefs.current[1], { display: "none" });
        gsap.set(gsapBoxRefs.current[2], { display: "block" });
      },
    })
      .to(
        gsapBoxRefs.current[2],
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        },
        "+=0.2"
      )
      .to(gsapBoxRefs.current[2], {
        autoAlpha: 0,
        y: -10,
        delay: 5,
        duration: 1,
        onComplete: () => {
          gsap.set(gsapBoxRefs.current[2], { display: "none" });
          gsap.set(gsapBoxRefs.current[1], { display: "block" });
        },
      })
      .to(gsapBoxRefs.current[1], {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      });

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(groupRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          setVisibleSet((prev) => (prev === 0 ? 1 : 0));
          setCurrent((prev) => (prev + 5) % images.length); // ✅ KEY FIX
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

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-black group-hover:text-blue-900 transition text-center">
          Technical Strength
        </h1>
        <p className="text-xl text-gray-800 my-1 text-center">
          Ningbo SIFA Elevator Co., Ltd
        </p>
      </div>

      <div className="flex flex-col my-10 lg:flex-row items-center gap-10 px-4">
        {/* Left Section (Text Boxes) */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 mt-10 mr-20 sm:mt-32">
          <div className="rounded-box h-96 relative -right-15 -top-9">
            <div className="mr-10 h-full ">
              <div
                className="group sm:mx-4 sm:mb-20 md:mx-12 md:mb-20 lg:mx-20 p-10 border-4 border-blue-300 bg-white shadow-md rounded-xl transition-all duration-300"
                ref={(el) => (gsapBoxRefs.current[1] = el)}>
                <p className="text-center text-2xl text-gray-700 group-hover:text-black transition">
                  "Ningbo SIFA Elevator Co., Ltd. <br /> excels in innovation,
                  precision manufacturing, and quality control.
                  <br /> We provide safe, efficient, and customizable elevator
                  solutions with advanced technology and global support."
                </p>
              </div>
            </div>

            <div className="mr-13 h-full">
              <div
                className="group md:mx-12 lg:mx-20 mt-10 p-10 border-4 border-blue-300 bg-white shadow-md rounded-xl transition-all duration-300 relative -top-100"
                ref={(el) => (gsapBoxRefs.current[2] = el)}>
                <p className="w-full h-full flex items-center justify-center text-center text-4xl text-gray-700 group-hover:text-black transition my-25">
                  "Smart Technology,
                  <br /> Safe and Efficient
                  <br /> Elevators."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Diamond Image Carousel) */}
        <div className="w-full lg:w-1/2 my-20 lg:my-0 sm:mt-40">
          <div className="w-full my-20 h-[400px] md:h-[500px] lg:h-screen bg-white flex justify-center items-center">
            <div
              ref={groupRef}
              className="relative w-[300px] md:w-[500px] lg:w-[700px] h-[400px] md:h-[500px] lg:h-[600px]">
              {getCurrentImages().map((img, idx) => {
                const positions = [
                  "top-0 left-0",
                  "top-0 right-0",
                  "top-[calc(50%-85px)] left-[calc(50%-113px)]",
                  "bottom-0 left-0",
                  "bottom-0 right-0",
                ];

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
    </div>
  );
};

export default TechnicalStrength;
