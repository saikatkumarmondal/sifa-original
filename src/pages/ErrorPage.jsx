// src/pages/ErrorPage.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ErrorPage = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const codeRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(codeRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1
        ref={codeRef}
        className="text-[120px] font-extrabold text-red-500 drop-shadow-md">
        404
      </h1>
      <p
        ref={textRef}
        className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
        Oops! Page Not Found
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition">
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
