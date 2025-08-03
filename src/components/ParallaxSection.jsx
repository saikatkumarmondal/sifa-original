import React, { useState, useEffect } from "react";

const ParallaxSection = ({ imageUrl, children }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center text-white font-bold text-5xl relative"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center ${offsetY * 0.5}px`,
        textShadow: "0 0 10px rgba(0,0,0,0.7)",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
