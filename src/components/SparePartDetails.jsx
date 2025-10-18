import React, { useState, useRef } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "./Loading";
import SparePartsLogo from "/spare-parts-details.png";
import { FaCogs } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import SparePartsSidebar from "./SparePartsSidebar"; // ✅ added

const SparePartDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [lensStyle, setLensStyle] = useState({
    left: 0,
    top: 0,
    bgPosX: 0,
    bgPosY: 0,
  });

  const imgRef = useRef(null);

  const buildUrl = (img) =>
    img &&
    (img.startsWith("http")
      ? img
      : `http://148.66.154.205:7777/${img.replace(/\\/g, "/")}`);

  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await axios.get(`http://148.66.154.205:7777/category/${id}`);
      if (res.data.success) return res.data.data;
      throw new Error(res.data?.message || "Category not found");
    },
    enabled: !!id,
  });

  React.useEffect(() => {
    if (category) {
      const initial = category.image || category.images?.[0] || null;
      setMainImage(initial ? buildUrl(initial) : null);
    }
  }, [category]);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const LENS_SIZE = 200;
  const ZOOM_SCALE = 2.5;

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const imgW = rect.width;
    const imgH = rect.height;
    const cx = Math.max(0, Math.min(x, imgW));
    const cy = Math.max(0, Math.min(y, imgH));
    const left = cx - LENS_SIZE / 2;
    const top = cy - LENS_SIZE / 2;
    const bgPosX = -(cx * ZOOM_SCALE - LENS_SIZE / 2);
    const bgPosY = -(cy * ZOOM_SCALE - LENS_SIZE / 2);
    setLensStyle({ left, top, bgPosX, bgPosY });
  };

  const handleMouseEnter = () => setIsZoomActive(true);
  const handleMouseLeave = () => setIsZoomActive(false);

  const imagesList = Array.from(
    new Set(
      [...(category?.images || []).filter(Boolean), category?.image].filter(
        Boolean
      )
    )
  ).map(buildUrl);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50 min-h-screen">
      {/* ✅ Sidebar (col-span-3) */}
      <div className="col-span-12 md:col-span-3 bg-white shadow-lg border-r border-gray-200 p-4">
        <div className="w-[90%] mx-auto">
          <SparePartsSidebar />
        </div>
      </div>
      {/* ✅ Main Spare Parts Content (col-span-9) */}
      <div className="col-span-12 md:col-span-9 overflow-hidden">
        <div className="overflow-hidden">
          <div className="relative w-full h-48 sm:h-64 flex justify-center items-center my-5 overflow-hidden">
            <img
              src={SparePartsLogo}
              alt="Spare Parts"
              className="w-full h-full object-contain"
            />
            <motion.h1
              className="absolute text-2xl sm:text-4xl font-bold text-center"
              animate={{
                color: ["#111111", "#333333", "#555555", "#222222", "#111111"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Spare Parts
            </motion.h1>
          </div>

          <div className="max-w-7xl mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 text-black bg-white rounded-xl shadow-2xl ring-4 ring-yellow-500/80">
            {/* Left Section */}
            <div className="col-span-12 md:col-span-6 flex flex-col items-center">
              <div className="w-full h-64 sm:h-[30rem] flex justify-center items-center bg-gray-100 rounded-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {mainImage ? (
                  <>
                    <img
                      ref={imgRef}
                      src={mainImage}
                      alt={category.name}
                      className="w-full h-full object-contain"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: "crosshair" }}
                    />
                    {isZoomActive && (
                      <div
                        aria-hidden
                        style={{
                          position: "absolute",
                          width: LENS_SIZE,
                          height: LENS_SIZE,
                          borderRadius: "50%",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                          border: "4px solid rgba(255,255,255,0.9)",
                          left: lensStyle.left,
                          top: lensStyle.top,
                          pointerEvents: "none",
                          backgroundImage: `url(${mainImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${
                            imgRef.current
                              ? imgRef.current.getBoundingClientRect().width *
                                ZOOM_SCALE
                              : 0
                          }px ${
                            imgRef.current
                              ? imgRef.current.getBoundingClientRect().height *
                                ZOOM_SCALE
                              : 0
                          }px`,
                          backgroundPosition: `${lensStyle.bgPosX}px ${lensStyle.bgPosY}px`,
                          transform: "translateZ(0)",
                        }}
                      />
                    )}
                  </>
                ) : (
                  <FaCogs className="text-6xl sm:text-8xl text-yellow-500/50 animate-pulse" />
                )}
              </div>

              <div className="flex gap-3 mt-6 overflow-x-auto justify-center w-full pb-3">
                {imagesList.length === 0 && (
                  <div className="text-gray-500">No images available</div>
                )}
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMainImage(img)}
                    className={`border-2 border-transparent rounded-lg p-0 transition-all duration-200 ${
                      mainImage === img
                        ? "ring-4 ring-yellow-500 shadow-lg"
                        : "hover:border-gray-300"
                    }`}
                    style={{ background: "transparent" }}
                  >
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-12 md:col-span-6 space-y-4 mt-4 md:mt-0">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center md:text-left">
                Elevator DOT Display SIFA-DOT-R-BO
              </h1>

              <div className="space-y-2 text-base sm:text-lg text-gray-700">
                <p>
                  <span className="font-bold text-gray-900">Product Name:</span>{" "}
                  <span className="ml-1">Elevator DOT Display</span>
                </p>
                <p>
                  <span className="font-bold text-gray-900">Model:</span>{" "}
                  <span className="ml-1">SIFA-DOT-R-BO</span>
                </p>
                <p>
                  <span className="font-bold text-gray-900">Category:</span>{" "}
                  <span className="ml-1">Elevator Display</span>
                </p>
                <p>
                  <span className="font-bold text-gray-900">Type:</span>{" "}
                  <span className="ml-1">Dot Display Series</span>
                </p>
              </div>

              <hr className="border-gray-200 my-4 sm:my-6" />

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 text-sm sm:text-base">
                <p>
                  <span className="font-bold text-gray-900">Condition:</span>
                  <span className="ml-2 text-gray-700">
                    Brand-new, unused, unopened, and undamaged. Delivered in
                    original SlFA packaging to guarantee quality and
                    authenticity.
                  </span>
                </p>
              </div>

              <hr className="border-gray-200 my-4 sm:my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
                Key Features
              </h2>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "Premium Quality: Manufactured under strict quality control for reliable performance.",
                  "100% Factory Tested: Each unit is tested to ensure flawless functionality.",
                  "Easy Installation: Designed to match OEM standards for direct replacement.",
                  "Safe Packaging: Packed securely to prevent damage during shipping.",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-base sm:text-lg">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-4 sm:my-6" />
            </div>
          </div>

          {/* Specifications Section */}
          <div className="mt-8 sm:mt-10 px-4 sm:px-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
              Specifications
            </h2>
            <div className="space-y-2 text-gray-700 my-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {Object.entries(category)
                  .filter(
                    ([key, val]) =>
                      val &&
                      [
                        "name",
                        "partType",
                        "material",
                        "dimensions",
                        "installSize",
                        "faceplateSize",
                        "weight",
                        "application",
                        "warrantyTime",
                        "certificates",
                        "shippingTerms",
                        "paymentTerms",
                        "paymentCurrency",
                        "packing",
                      ].includes(key)
                  )
                  .map(([key, val]) => (
                    <div
                      key={key}
                      className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <span className="block text-gray-900 font-semibold capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="block mt-1 text-gray-700 break-words">
                          {val}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartDetails;
