import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Om Namah Shivaya
const images = [
  "/Photo/Photo/1. Section/1.jpg",
  "/Photo/Photo/1. Section/2.jpg",
  "/Photo/Photo/1. Section/3.jpg",
  "/Photo/Photo/1. Section/4.jpg",
  "/Photo/Photo/1. Section/5.png",
  "/Photo/Photo/1. Section/changed.jpg",
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const imgs = containerRef.current.querySelectorAll(".gallery-img");

    // Initial entrance animation
    gsap.fromTo(
      imgs,
      { opacity: 0, rotationY: 90, scale: 0.8 },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    imgs.forEach((img) => {
      const updateRotation = (x, y, bounds) => {
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(img, {
          rotationX: -rotateX,
          rotationY: rotateY,
          scale: 1.05,
          transformPerspective: 600,
          ease: "power3.out",
          duration: 0.3,
          transformOrigin: "center",
        });
      };

      // Mouse hover rotation
      img.addEventListener("mousemove", (e) => {
        const bounds = img.getBoundingClientRect();
        updateRotation(e.clientX - bounds.left, e.clientY - bounds.top, bounds);
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "power3.out",
          duration: 0.5,
        });
      });

      // Mobile/touch rotation
      img.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        const bounds = img.getBoundingClientRect();
        const x = touch.clientX - bounds.left;
        const y = touch.clientY - bounds.top;
        updateRotation(x, y, bounds);
      });

      img.addEventListener("touchend", () => {
        gsap.to(img, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "power3.out",
          duration: 0.5,
        });
      });
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-img rounded-xl overflow-hidden shadow-xl cursor-pointer"
            style={{ perspective: "600px" }}>
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-auto object-contain bg-cover"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
