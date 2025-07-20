import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VerticalTransport = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power2.out",
      });

      // Hover animations
      textRef.current.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            scale: 1.05,
            textShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            scale: 1,
            textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: "url(/Photo/Photo/LOGO/SIFA LOGO Dark G.png)",
      }}
      data-aos="fade-down">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
        <h1
          ref={(el) => (textRef.current[0] = el)}
          className="text-3xl sm:text-4xl font-semibold text-gray-900">
          VERTICAL TRANSPORT & HORIZONTAL TRANSPORT
        </h1>
        <p
          ref={(el) => (textRef.current[1] = el)}
          className="text-lg sm:text-xl text-gray-800">
          We excel in providing complete elevator, escalator, and spare parts
          <br />
          solutions — prioritizing reliability, efficiency, and safety at every
          step.
        </p>
        <p
          ref={(el) => (textRef.current[2] = el)}
          className="text-sm text-gray-700">
          Our expertise spans across:
        </p>
      </div>
    </div>
  );
};

export default VerticalTransport;
