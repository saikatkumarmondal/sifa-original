import React, { useState, useRef } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import { FaCogs } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
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

  // Helper to build full URL (handles backslashes)
  const buildUrl = (img) =>
    img &&
    (img.startsWith("http")
      ? img
      : `http://localhost:7777/${img.replace(/\\/g, "/")}`);

  // Fetch category data
  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:7777/category/${id}`);
      if (res.data.success) return res.data.data;
      throw new Error(res.data?.message || "Category not found");
    },
    enabled: !!id,
  });

  // Ensure mainImage is set whenever category changes
  React.useEffect(() => {
    if (category) {
      const initial = category.image || category.images?.[0] || null;
      setMainImage(initial ? buildUrl(initial) : null);
    }
  }, [category]);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  // Zoom config
  const LENS_SIZE = 200; // px diameter of magnifier
  const ZOOM_SCALE = 2.5; // how much to zoom

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x relative to image
    const y = e.clientY - rect.top; // y relative to image

    // clamp cursor inside image
    const imgW = rect.width;
    const imgH = rect.height;
    const cx = Math.max(0, Math.min(x, imgW));
    const cy = Math.max(0, Math.min(y, imgH));

    // lens top-left so cursor at center of lens
    const left = cx - LENS_SIZE / 2;
    const top = cy - LENS_SIZE / 2;

    // background position for magnifier
    const bgPosX = -(cx * ZOOM_SCALE - LENS_SIZE / 2);
    const bgPosY = -(cy * ZOOM_SCALE - LENS_SIZE / 2);

    setLensStyle({ left, top, bgPosX, bgPosY });
  };

  const handleMouseEnter = () => setIsZoomActive(true);
  const handleMouseLeave = () => setIsZoomActive(false);

  // Build a combined, unique images array
  const imagesList = Array.from(
    new Set(
      [...(category?.images || []).filter(Boolean), category?.image].filter(
        Boolean
      )
    )
  ).map(buildUrl);

  return (
    // Updated Container: 50/50 Layout (gap-10), Professional Styling (shadow, ring)
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-10 text-black bg-white rounded-xl shadow-2xl ring-4 ring-yellow-500/80">
      {/* Left: Main image + thumbnails (50% width) */}
      <div className="col-span-12 md:col-span-6 flex flex-col items-center">
        {/* BIGGER Main Image Container: h-[30rem] */}
        <div className="w-full h-[30rem] flex justify-center items-center bg-gray-100 rounded-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          {mainImage ? (
            <>
              {/* actual image */}
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

              {/* magnifier lens (improved border for professionalism) */}
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
            <FaCogs className="text-8xl text-yellow-500/50 animate-pulse" />
          )}
        </div>

        {/* thumbnails (better spacing and focus style) */}
        <div className="flex gap-3 mt-6 overflow-x-auto justify-center">
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
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: details (50% width) */}
      <div className="col-span-12 md:col-span-6 space-y-4">
        {/* Product Title: Bigger and bolder */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Elevator DOT Display SIFA-DOT-R-BO
        </h1>

        {/* Main Product Info: Grouped and styled */}
        <div className="space-y-2 text-lg text-gray-700">
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

        <hr className="border-gray-200 my-6" />

        {/* Condition: Highlighted box */}
        <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
          <p>
            <span className="font-bold text-gray-900">Condition:</span>
            <span className="ml-2 text-gray-700">
              Brand-new, unused, unopened, and undamaged. Delivered in original
              SlFA packaging to guarantee quality and authenticity.
            </span>
          </p>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Key Features: Clearer heading and styled list */}
        <h2 className="text-2xl font-bold text-gray-700">Key Features</h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="flex items-start text-lg">
            <span className="text-yellow-500 mr-2 mt-1">✓</span>
            <p>
              <span className="font-semibold text-gray-800">
                Premium Quality:
              </span>
              &nbsp;
              <span>
                Manufactured under strict quality control for reliable
                performance.
              </span>
            </p>
          </li>
          <li className="flex items-start text-lg">
            <span className="text-yellow-500 mr-2 mt-1">✓</span>
            <p>
              <span className="font-semibold text-gray-800">
                100% Factory Tested:
              </span>
              &nbsp;
              <span>
                Each unit is tested to ensure smooth and flawless functionality.
              </span>
            </p>
          </li>
          <li className="flex items-start text-lg">
            <span className="text-yellow-500 mr-2 mt-1">✓</span>
            <p>
              <span className="font-semibold text-gray-800">
                Easy Installation:
              </span>
              &nbsp;
              <span>
                Designed to match OEM standards for a direct replacement.
              </span>
            </p>
          </li>
          <li className="flex items-start text-lg">
            <span className="text-yellow-500 mr-2 mt-1">✓</span>
            <p>
              <span className="font-semibold text-gray-800">
                Safe Packaging:
              </span>
              &nbsp;
              <span>
                Packed securely in sturdy export-quality boxes to prevent damage
                during shipping.
              </span>
            </p>
          </li>
        </ul>

        <hr className="border-gray-200 my-6" />

        {/* Technical Specs: Clearer heading and bolded labels */}
        <h2 className="text-2xl font-bold text-gray-700">Specifications</h2>
        <div className="space-y-2 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {category.name && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Brand
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.name}
                  </span>
                </div>
              </div>
            )}

            {category.partType && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Part Type
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.partType}
                  </span>
                </div>
              </div>
            )}

            {category.material && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Material
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.material}
                  </span>
                </div>
              </div>
            )}

            {category.dimensions && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Dimensions
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.dimensions}
                  </span>
                </div>
              </div>
            )}

            {category.installSize && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Install Size
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.installSize}
                  </span>
                </div>
              </div>
            )}

            {category.faceplateSize && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Faceplate Size
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.faceplateSize}
                  </span>
                </div>
              </div>
            )}

            {category.weight && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Weight
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.weight}
                  </span>
                </div>
              </div>
            )}

            {category.application && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Application
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.application}
                  </span>
                </div>
              </div>
            )}

            {category.warrantyTime && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Warranty Time
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.warrantyTime}
                  </span>
                </div>
              </div>
            )}

            {category.certificates && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Certificates
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.certificates}
                  </span>
                </div>
              </div>
            )}

            {category.shippingTerms && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Shipping Terms
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.shippingTerms}
                  </span>
                </div>
              </div>
            )}

            {category.paymentTerms && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Payment Terms
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.paymentTerms}
                  </span>
                </div>
              </div>
            )}

            {category.paymentCurrency && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Payment Currency
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.paymentCurrency}
                  </span>
                </div>
              </div>
            )}

            {category.packing && (
              <div className="flex items-start p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="block text-gray-900 font-semibold">
                    Packing
                  </span>
                  <span className="block mt-1 text-gray-700">
                    {category.packing}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartDetails;
