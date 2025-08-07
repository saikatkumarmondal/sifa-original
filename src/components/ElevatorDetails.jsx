import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Footer from "./Footer";

const ElevatorDetails = () => {
  const { type } = useParams();

  const elevatorData = {
    passenger: {
      title: "Passenger Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. delivers reliable and comfortable passenger elevators with advanced technology and smooth performance. From design to maintenance, we provide professional service and strict quality control to ensure customer satisfaction.",
      images: [
        "/Photo/elevators/Passenger Elevator/1.jpg",
        "/Photo/elevators/Passenger Elevator/2.jpg",
        "/Photo/elevators/Passenger Elevator/3.jpg",
        "/Photo/elevators/Passenger Elevator/4.jpg",
        "/Photo/elevators/Passenger Elevator/5.jpg",
        "/Photo/elevators/Passenger Elevator/6.jpg",
        "/Photo/elevators/Passenger Elevator/8.jpg",
        "/Photo/elevators/Passenger Elevator/9.jpg",
        "/Photo/elevators/Passenger Elevator/10.jpg",
        "/Photo/elevators/Passenger Elevator/11.jpg",
        "/Photo/elevators/Passenger Elevator/12.jpg",
        "/Photo/elevators/Passenger Elevator/13.jpg",
        "/Photo/elevators/Passenger Elevator/14.jpg",
        "/Photo/elevators/Passenger Elevator/15.jpg",
        "/Photo/elevators/Passenger Elevator/16.jpg",
        "/Photo/elevators/Passenger Elevator/17.jpg",
      ],
    },
    villa: {
      title: "Villa Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. specializes in high-quality villa elevators, designed for comfort, safety, and style. With advanced technology and expert service from installation to maintenance, we deliver reliable solutions tailored for modern homes.",
      images: [
        "/Photo/elevators/Villa Elevator/1.jpg",
        "/Photo/elevators/Villa Elevator/2.jpg",
        "/Photo/elevators/Villa Elevator/3.jpg",
        "/Photo/elevators/Villa Elevator/4.jpg",
        "/Photo/elevators/Villa Elevator/5.jpg",
        "/Photo/elevators/Villa Elevator/6.jpg",
        "/Photo/elevators/Villa Elevator/7.jpg",
        "/Photo/elevators/Villa Elevator/8.jpg",
        "/Photo/elevators/Villa Elevator/9.jpg",
        "/Photo/elevators/Villa Elevator/10.jpg",
        "/Photo/elevators/Villa Elevator/11.jpg",
        "/Photo/elevators/Villa Elevator/12.jpg",
        "/Photo/elevators/Villa Elevator/13.jpg",
        "/Photo/elevators/Villa Elevator/15.jpg",
        "/Photo/elevators/Villa Elevator/16.jpg",
        "/Photo/elevators/Villa Elevator/17.jpg",
        "/Photo/elevators/Villa Elevator/18.jpg",
        "/Photo/elevators/Villa Elevator/19.jpg",
        "/Photo/elevators/Villa Elevator/20.jpg",
        "/Photo/elevators/Villa Elevator/21.jpg",
        "/Photo/elevators/Villa Elevator/22.jpg",
        "/Photo/elevators/Villa Elevator/23.jpg",
        "/Photo/elevators/Villa Elevator/24.jpg",
        "/Photo/elevators/Villa Elevator/25.jpg",
        "/Photo/elevators/Villa Elevator/26.jpg",
        "/Photo/elevators/Villa Elevator/27.jpg",
      ],
    },
    panoramic: {
      title: "Panoramic Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. provides premium panoramic elevators that combine safety, smooth performance, and elegant design. With advanced technology and expert service, we ensure quality at every stage.",
      images: [
        "/Photo/elevators/Panoramic Elevator/1.jpg",
        "/Photo/elevators/Panoramic Elevator/2.jpg",
        "/Photo/elevators/Panoramic Elevator/3.jpg",
        "/Photo/elevators/Panoramic Elevator/4.jpg",
      ],
    },
    hospital: {
      title: "Hospital Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. offers reliable hospital elevators designed for safety, efficiency, and smooth operation. With advanced technology and expert service, we ensure quality from design to maintenance.",
      images: [
        "/Photo/elevators/Hospital Elevator/1.jpg",
        "/Photo/elevators/Hospital Elevator/2.jpg",
      ],
    },
    freight: {
      title: "Freight Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. offers durable and high-performance freight and car elevators, built for heavy-duty use. With advanced control systems and expert service, we ensure safe, efficient, and reliable vertical transport for industrial and commercial needs.",
      images: [
        "/Photo/elevators/Freight Elevator/1.jpg",
        "/Photo/elevators/Freight Elevator/2.jpg",
      ],
    },
    hydraulic: {
      title: "Hydraulic Elevator",
      description:
        "Ningbo SIFA Elevator Co., Ltd. offers smooth, safe, and space-efficient hydraulic elevators—ideal for low-rise buildings. Engineered for reliability and easy maintenance with advanced control systems.",
      images: [
        "/Photo/elevators/Hydraulic Elevator/1.jpg",
        "/Photo/elevators/Hydraulic Elevator/2.jpg",
        "/Photo/elevators/Hydraulic Elevator/3.jpg",
        "/Photo/elevators/Hydraulic Elevator/4.jpg",
        "/Photo/elevators/Hydraulic Elevator/5.jpg",
      ],
    },
  };
  const elevator = elevatorData[type];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const thumbnailsPerPage = 3;

  useEffect(() => {
    setCurrentImageIndex(0);
    setThumbnailStartIndex(0);
  }, [type]);

  if (!elevator) {
    return (
      <div className="text-center mt-10 text-red-500">
        Invalid elevator type
      </div>
    );
  }

  // Prev and Next functions for the main image
  const handleMainPrev = () => {
    const newIndex = Math.max(currentImageIndex - 1, 0);
    setCurrentImageIndex(newIndex);
    // Adjust thumbnail view if main image goes out of range
    if (newIndex < thumbnailStartIndex) {
      setThumbnailStartIndex(newIndex);
    }
  };

  const handleMainNext = () => {
    const newIndex = Math.min(
      currentImageIndex + 1,
      elevator.images.length - 1
    );
    setCurrentImageIndex(newIndex);
    // Adjust thumbnail view if main image goes out of range
    if (newIndex >= thumbnailStartIndex + thumbnailsPerPage) {
      setThumbnailStartIndex(newIndex - thumbnailsPerPage + 1);
    }
  };

  const handleThumbnailPrev = () => {
    setThumbnailStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleThumbnailNext = () => {
    setThumbnailStartIndex((prev) =>
      Math.min(prev + 1, elevator.images.length - thumbnailsPerPage)
    );
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 hidden md:block bg-white p-6 rounded-xl shadow-lg h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                Elevator Types
              </h2>
              <ul className="space-y-3">
                {Object.entries(elevatorData).map(([key, value]) => (
                  <li key={key}>
                    <Link
                      to={`/elevators/${key}`}
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
              {/* Title */}
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {elevator.title}
              </h1>

              {/* Description */}
              <p className="mb-8 text-gray-600 leading-relaxed">
                {elevator.description}
              </p>

              {/* Main Image with Prev/Next Buttons */}
              <div className="relative w-full max-w-2xl mx-auto mb-6">
                <img
                  src={elevator.images[currentImageIndex]}
                  alt={`${type} elevator ${currentImageIndex + 1}`}
                  className="w-full h-[450px] object-contain rounded-xl shadow-xl"
                />

                {/* Main Prev Button */}
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

                {/* Main Next Button */}
                <button
                  onClick={handleMainNext}
                  disabled={currentImageIndex === elevator.images.length - 1}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-lg z-10 ${
                    currentImageIndex === elevator.images.length - 1
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

              {/* Thumbnails Gallery with Prev/Next Buttons and 3 images per view */}
              <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center gap-2">
                {/* Prev Button for Thumbnails */}
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

                {/* Thumbnails Container */}
                <div className="flex-grow flex justify-center overflow-hidden">
                  <div className="flex gap-3">
                    {elevator.images
                      .slice(
                        thumbnailStartIndex,
                        thumbnailStartIndex + thumbnailsPerPage
                      )
                      .map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Thumbnail ${index + thumbnailStartIndex + 1}`}
                          className={`w-20 h-20 object-cover cursor-pointer rounded-lg transition-all duration-300 ${
                            index + thumbnailStartIndex === currentImageIndex
                              ? "border-4 border-blue-500 transform scale-105 shadow-md"
                              : "border-2 border-transparent hover:border-blue-400"
                          }`}
                          onClick={() =>
                            setCurrentImageIndex(index + thumbnailStartIndex)
                          }
                        />
                      ))}
                  </div>
                </div>

                {/* Next Button for Thumbnails */}
                <button
                  onClick={handleThumbnailNext}
                  disabled={
                    thumbnailStartIndex >=
                    elevator.images.length - thumbnailsPerPage
                  }
                  className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md z-10 ${
                    thumbnailStartIndex >=
                      elevator.images.length - thumbnailsPerPage &&
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

export default ElevatorDetails;
