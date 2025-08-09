import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Footer from "./Footer";
import ImageZoom from "react-image-zoom";

const EscalatorDetails = () => {
  const { type } = useParams();

  const escalatorData = {
    indoor: {
      title: "Indoor Escalator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. offers indoor escalators designed for quiet, efficient, and safe vertical transportation. Ideal for malls, offices, and transport hubs, they provide a seamless blend of performance and elegance.",
      images: [
        "/Photo/Escalator/Indoor Escalator/1.png",
        "/Photo/Escalator/Indoor Escalator/2.png",
        "/Photo/Escalator/Indoor Escalator/3.png",
        "/Photo/Escalator/Indoor Escalator/4.png",
        "/Photo/Escalator/Indoor Escalator/5.png",
        "/Photo/Escalator/Indoor Escalator/6.png",
        "/Photo/Escalator/Indoor Escalator/7.png",
      ],
    },
    "moving-walks": {
      title: "Moving Walk",
      description:
        "Ningbo SIFA Elevator Co., Ltd. provides advanced moving walks for horizontal or inclined transport. Ideal for airports, supermarkets, and large venues, they deliver smooth, reliable, and comfortable passenger flow.",
      images: [
        "/Photo/Escalator/Moving Walk/1.png",
        "/Photo/Escalator/Moving Walk/2.png",
      ],
    },
    "out-door": {
      title: "Outdoor Escalator",
      description:
        "Engineered by Ningbo SIFA Elevator Co., Ltd., our outdoor escalators are built to resist weather and corrosion. Perfect for open environments such as metro stations and airports, they ensure durability, safety, and stable operation.",
      images: [
        "/Photo/Escalator/Outdoor Escalator/1.png",
        "/Photo/Escalator/Outdoor Escalator/2.png",
        "/Photo/Escalator/Outdoor Escalator/3.png",
        "/Photo/Escalator/Outdoor Escalator/4.png",
        "/Photo/Escalator/Outdoor Escalator/5.png",
        "/Photo/Escalator/Outdoor Escalator/6.png",
        "/Photo/Escalator/Outdoor Escalator/7.png",
      ],
    },
  };

  const escalator = escalatorData[type];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const thumbnailsPerPage = 3;

  useEffect(() => {
    setCurrentImageIndex(0);
    setThumbnailStartIndex(0);
  }, [type]);

  if (!escalator) {
    return (
      <div className="text-center mt-10 text-red-500">
        Invalid escalator type
      </div>
    );
  }

  const handleMainPrev = () => {
    const newIndex = Math.max(currentImageIndex - 1, 0);
    setCurrentImageIndex(newIndex);
    if (newIndex < thumbnailStartIndex) setThumbnailStartIndex(newIndex);
  };

  const handleMainNext = () => {
    const newIndex = Math.min(
      currentImageIndex + 1,
      escalator.images.length - 1
    );
    setCurrentImageIndex(newIndex);
    if (newIndex >= thumbnailStartIndex + thumbnailsPerPage)
      setThumbnailStartIndex(newIndex - thumbnailsPerPage + 1);
  };

  const handleThumbnailPrev = () => {
    setThumbnailStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleThumbnailNext = () => {
    setThumbnailStartIndex((prev) =>
      Math.min(prev + 1, escalator.images.length - thumbnailsPerPage)
    );
  };

  // Zoom props for main image
  const zoomProps = {
    width: 700,
    height: 650,
    zoomWidth: 300,
    img: escalator.images[currentImageIndex],
    zoomPosition: "left",
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div
          className="w-full h-[300px] bg-cover bg-center flex items-center justify-center object-contain mx-auto "
          style={{ backgroundImage: `url('/Photo/esclavator.jpg')` }}
        >
          <h1 className="text-3xl font-bold text-white text-center">
            Escalators
          </h1>
        </div>
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 hidden md:block bg-white p-6 rounded-xl shadow-lg h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                Escalator Types
              </h2>
              <ul className="space-y-3">
                {Object.entries(escalatorData).map(([key, value]) => (
                  <li key={key}>
                    <Link
                      to={`/escalator/${key}`}
                      className={`block p-3 rounded-lg transition-all duration-200 ${
                        type === key
                          ? "bg-blue-600 text-white shadow-md font-semibold"
                          : "bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {value.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-xl shadow-lg">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {escalator.title}
              </h1>
              <p className="mb-8 text-gray-600 leading-relaxed">
                {escalator.description}
              </p>

              {/* Main Image with zoom */}
              <div className="relative w-full max-w-2xl mx-auto mb-6">
                <ImageZoom {...zoomProps} />
                <button
                  onClick={handleMainPrev}
                  disabled={currentImageIndex === 0}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-lg z-10 ${
                    currentImageIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleMainNext}
                  disabled={currentImageIndex === escalator.images.length - 1}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-lg z-10 ${
                    currentImageIndex === escalator.images.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* Thumbnails */}
              <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center gap-2">
                <button
                  onClick={handleThumbnailPrev}
                  disabled={thumbnailStartIndex === 0}
                  className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md z-10 ${
                    thumbnailStartIndex === 0 && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex-grow flex justify-center overflow-hidden">
                  <div className="flex gap-3">
                    {escalator.images
                      .slice(
                        thumbnailStartIndex,
                        thumbnailStartIndex + thumbnailsPerPage
                      )
                      .map((img, index) => {
                        const actualIndex = index + thumbnailStartIndex;
                        return (
                          <img
                            key={actualIndex}
                            src={img}
                            alt={`Thumbnail ${actualIndex + 1}`}
                            className={`w-20 h-20 object-cover cursor-pointer rounded-lg transition-all duration-300 ${
                              actualIndex === currentImageIndex
                                ? "border-4 border-blue-500 transform scale-105 shadow-md"
                                : "border-2 border-transparent hover:border-blue-400"
                            }`}
                            onMouseEnter={() =>
                              setCurrentImageIndex(actualIndex)
                            }
                            onClick={() => setCurrentImageIndex(actualIndex)}
                          />
                        );
                      })}
                  </div>
                </div>

                <button
                  onClick={handleThumbnailNext}
                  disabled={
                    thumbnailStartIndex >=
                    escalator.images.length - thumbnailsPerPage
                  }
                  className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md z-10 ${
                    thumbnailStartIndex >=
                      escalator.images.length - thumbnailsPerPage &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EscalatorDetails;
