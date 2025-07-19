import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slidesData = [
  {
    image: "/Photo/slidebar/1 Slide Photo.png",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752743850/3708aff54d062a6caab5e0896c9b9839_wcwbjg.mp4",
    text: "Welcome to SIFA Elevator",
    label: "01",
  },
  {
    image: "/Photo/slidebar/2 Slide Photo.png",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752635687/2_Slide_Video_bey2ro.mp4",
    text: "Safety First, Reliability Always\n– We Provide the Best.",
    label: "02",
  },
  {
    image: "/Photo/slidebar/3 Slide Photo.jpg",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752635809/3_ivujg8.mp4",
    text: "Your Safety,\nOur Commitment.",
    label: "03",
  },
  {
    image: "/Photo/slidebar/4 Slide Photo.jpg",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752635899/4_cb5hun.mp4",
    text: "Safe, efficient, and reliable\nelevators for all buildings.",
    label: "04",
  },
  {
    image: "/Photo/slidebar/5 Slide Photo.jpg",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752635953/5_fskqbi.mp4",
    text: "Elevating\nEvery Building",
    label: "05",
  },
  {
    image: "/Photo/slidebar/6 Slide Photo.jpg",
    video:
      "https://res.cloudinary.com/dtztayuxq/video/upload/v1752635998/6_kvoilu.mp4",
    text: "Seamless escalators and walkways for\nsmooth, efficient movement.",
    label: "06",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTweening = useRef(false);
  const slidesRef = useRef([]);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  const gotoSlide = (nextIndex) => {
    if (isTweening.current) return;
    const total = slidesData.length;
    if (nextIndex < 0) nextIndex = total - 1;
    if (nextIndex >= total) nextIndex = 0;
    if (nextIndex === currentIndex) return;

    const current = slidesRef.current[currentIndex];
    const next = slidesRef.current[nextIndex];

    gsap.set(next, { xPercent: 100, zIndex: 2 });
    gsap.set(current, { zIndex: 1 });

  gsap.to(textRef.current, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    onComplete: () => {
      setCurrentIndex(nextIndex); 
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0, },
        { y: 0, opacity: 1, duration: 1,  }
      );
    },
  });

    gsap.to(current, {
      xPercent: -100,
      duration: 1.2,
      ease: "power2.inOut",
    });

    gsap.to(next, {
      xPercent: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(current, { xPercent: 100, zIndex: 0 });
        isTweening.current = false;
      },
    });

    isTweening.current = true;
  };

  const handleNext = () => gotoSlide(currentIndex + 1);

  useEffect(() => {
    slidesRef.current.forEach((slide, i) =>
      gsap.set(slide, {
        xPercent: i === currentIndex ? 0 : 100,
        zIndex: i === currentIndex ? 2 : 0,
      })
    );

    gsap.set(textRef.current, { opacity: 1, y: 0 });
  }, [] );
    
      useEffect(() => {
        slidesRef.current.forEach((slide, i) =>
          gsap.set(slide, {
            xPercent: i === currentIndex ? 0 : 100,
            zIndex: i === currentIndex ? 2 : 0,
          })
        );

        gsap.set(textRef.current, { opacity: 1, y: 0 });
      }, []);

      // ⬇️ ⬇️ ⬇️ Add this one
      useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);
        return () => clearInterval(interval);
      }, [currentIndex]);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-[350px] md:w-full md:h-[600px] bg-black overflow-hidden relative mb-10">
      {/* Slides */}
      <div className="w-full h-full relative">
        {slidesData.map(({ image, video }, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-6 sm:px-16">
            {/* Background Image with Light Black Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-20 w-1/2">
              {i === currentIndex && (
                <h2
                  ref={i === currentIndex ? textRef : null}
                  className={`font-bold text-2xl sm:text-4xl md:text-5xl max-w-md leading-snug whitespace-nowrap ${
                    currentIndex === 2
                      ? "text-yellow-400"
                      : currentIndex === 5
                      ? "text-white"
                      : "text-white"
                  }`}>
                  {slidesData[currentIndex].text
                    .split("\n")
                    .map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                </h2>
              )}
            </div>

            {/* Video Section (Right-Aligned) */}
            <div className="relative z-20 w-[450px] h-[400px] hidden sm:flex items-center justify-end">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl shadow-lg border border-white"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-8 sm:left-20 flex space-x-4 z-30">
        {slidesData.map(({ label }, i) => (
          <button
            key={i}
            onClick={() => gotoSlide(i)}
            className={`text-white font-semibold text-sm ${
              i === currentIndex ? "opacity-100" : "opacity-50"
            }`}>
            {label}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute bottom-8 right-8 sm:right-20 z-30 text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
        Next
      </button>
    </div>
  );
};

export default Slider;
