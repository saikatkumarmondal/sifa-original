import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import axiosInstance from "../api/axiosInstance";
import Loading from "./Loading";
import SparePartsLogo from "/SpareParts.png";
import { FaCogs, FaCheckCircle, FaTimes } from "react-icons/fa";
import SparePartsSidebar from "./SparePartsSidebar";
import Footer from "./Footer";

const SparePartDetails = () => {
  const { id } = useParams();
  const [part, setPart] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [isFullZoom, setIsFullZoom] = useState(false);
  const [lensStyle, setLensStyle] = useState({
    left: 0,
    top: 0,
    bgPosX: 0,
    bgPosY: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imgRef = useRef(null);

  const LENS_SIZE = 200;
  const ZOOM_SCALE = 2.5;

  // ✅ Fixed: base URL and image path handling
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const buildUrl = (img) => {
    if (!img) return SparePartsLogo;
    if (img.startsWith("http")) return img;
    if (img.startsWith("/uploads")) return `${API_BASE_URL}${img}`;
    return `${API_BASE_URL}/uploads/${img}`;
  };

  useEffect(() => {
    const fetchSparePart = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axiosInstance.get(`/spare-parts/${id}`);
        setPart(res.data);
        const initialImg =
          res.data.image || res.data.images?.[0] || SparePartsLogo;
        setMainImage(buildUrl(initialImg));
      } catch (err) {
        console.error(err);
        setError("Failed to fetch spare part details.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchSparePart();
  }, [id]);

  const imagesList = React.useMemo(() => {
    if (!part) return [];
    return Array.from(
      new Set(
        [...(part.images || []).filter(Boolean), part.image].filter(Boolean)
      )
    ).map(buildUrl);
  }, [part]);

  useEffect(() => {
    if (!mainImage && imagesList.length > 0) setMainImage(imagesList[0]);
  }, [imagesList, mainImage]);

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

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!part)
    return (
      <>
        <p className="text-gray-500 text-center mt-6">Spare part not found.</p>
        <Footer />
      </>
    );

  if (imagesList.length === 0) imagesList.push(SparePartsLogo);

  return (
    <>
      <img
        src={SparePartsLogo}
        alt="Spare Parts"
        className="w-full h-full object-contain"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-gray-50">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-4 h-screen p-4">
            <div className="w-full max-w-xs mx-auto relative -right-6 mt-9">
              <SparePartsSidebar selectedId={part.categoryId?._id} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9 bg-gray-50 p-12 w-full max-w-[1400px]]">
          <div className="overflow-hidden pb-8">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 text-black bg-white rounded-xl shadow-xl ring-1 ring-yellow-500/30">
              {/* Left Section: Images */}
              <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center">
                <div className="w-full h-52 sm:h-80 flex justify-center items-center bg-gray-100 rounded-lg relative overflow-hidden transition-shadow duration-300 hover:shadow-xl p-2">
                  {mainImage ? (
                    <>
                      <img
                        ref={imgRef}
                        src={mainImage}
                        alt={part.name}
                        className="w-full h-full object-contain cursor-zoom-in"
                        onClick={() => setIsFullZoom(true)}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                      {isZoomActive && (
                        <div
                          aria-hidden
                          style={{
                            position: "absolute",
                            width: LENS_SIZE,
                            height: LENS_SIZE,
                            borderRadius: "50%",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
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
                                ? imgRef.current.getBoundingClientRect()
                                    .height * ZOOM_SCALE
                                : 0
                            }px`,
                            backgroundPosition: `${lensStyle.bgPosX}px ${lensStyle.bgPosY}px`,
                            transform: "translateZ(0)",
                          }}
                        />
                      )}
                      {isFullZoom && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]">
                          <button
                            onClick={() => setIsFullZoom(false)}
                            className="absolute top-5 right-5 text-white text-3xl hover:text-red-400 transition"
                          >
                            <FaTimes />
                          </button>
                          <img
                            src={mainImage}
                            alt="Zoomed"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <FaCogs className="text-6xl sm:text-7xl text-yellow-500/50 animate-pulse" />
                  )}
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-2 sm:gap-3 mt-3 overflow-x-auto justify-center w-full pb-2">
                  {imagesList.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMainImage(img)}
                      className={`border-2 border-transparent rounded-lg p-0 transition-all duration-200 ${
                        mainImage === img
                          ? "ring-2 ring-yellow-500 shadow-md"
                          : "hover:border-gray-300"
                      }`}
                      style={{ background: "transparent" }}
                    >
                      <img
                        src={img}
                        alt={`thumb-${idx}`}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg cursor-pointer"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="col-span-12 md:col-span-6 space-y-3 mt-3 md:mt-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3 text-center md:text-left">
                  {part.name}
                </h1>

                <div className="space-y-1 text-sm sm:text-base text-gray-700">
                  {[
                    ["Product Name", part.name],
                    ["Brand", part.brand],
                    ["Part Type", part.partType],
                    ["Material", part.material],
                    ["Dimensions", part.dimensions],
                    ["Category", part.categoryId?.name],
                  ].map(([label, value], i) =>
                    value ? (
                      label === "Delivery Time" ? (
                        <div
                          key={i}
                          className="w-full mt-4 whitespace-normal break-words"
                        >
                          <span className="font-bold text-gray-900">
                            {label}:
                          </span>
                          <p className="mt-1 text-gray-700 w-full break-words">
                            {value}
                          </p>
                        </div>
                      ) : (
                        <p key={i}>
                          <span className="font-bold text-gray-900">
                            {label}:
                          </span>{" "}
                          <span className="ml-1">{value}</span>
                        </p>
                      )
                    ) : null
                  )}
                </div>

                <hr className="border-gray-200 my-3 sm:my-4" />

                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 text-sm sm:text-base">
                  <p>
                    <span className="font-bold text-gray-900">Condition:</span>
                    <span className="ml-2 text-gray-700">
                      Brand-new, unused, unopened, and undamaged. Delivered in
                      original packaging.
                    </span>
                  </p>
                </div>

                <hr className="border-gray-200 my-3 sm:my-4" />

                <h2 className="text-lg sm:text-xl font-bold text-gray-700">
                  Key Features
                </h2>
                <ul className="list-none space-y-2 pl-0">
                  {[
                    "Premium Quality: Manufactured under strict quality control for reliable performance.",
                    "100% Factory Tested: Each unit is tested to ensure flawless functionality.",
                    "Easy Installation: Designed to match OEM standards for direct replacement.",
                    "Safe Packaging: Packed securely to prevent damage during shipping.",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm sm:text-base"
                    >
                      <span className="text-yellow-500 mr-2 mt-1">✓</span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                <hr className="border-gray-200 my-3 sm:my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div>
        <div className="mt-4 sm:mt-8 px-4 sm:px-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
            Specifications
          </h2>
          <div className="space-y-2 text-gray-700 my-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(part)
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
                      "brand",
                      "deliveryTime",
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

      <Footer />
    </>
  );
};

export default SparePartDetails;
