import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Footer from "./Footer";

const ElevatorDetails2 = () => {
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

  const [currentPage, setCurrentPage] = useState(0);
  let imagesPerPage = 9;

  useEffect(() => {
    setCurrentPage(0);
  }, [type]);
  const startIndex = currentPage * imagesPerPage;
  const paginatedImages = elevator?.images?.slice(
    startIndex,
    startIndex + imagesPerPage
  );
  const totalPages = Math.ceil((elevator?.images?.length || 0) / imagesPerPage);

  if (!elevator) {
    return (
      <div className="text-center mt-10 text-red-500">
        Invalid elevator type
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 px-4">
        {/* Header Image */}
        <div
          className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('/Photo/Image_20250806171845.jpg')`,
          }}
        >
          <h1 className="text-3xl font-bold text-white text-center">
            Elevators
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-8 px-4">
          {/* Left Menu (col-span-4) */}
          <div className="col-span-12 md:col-span-4 bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Elevator Types</h2>
            <ul className="space-y-2">
              {Object.entries(elevatorData).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={`/elevators/${key}`}
                    className="block p-2 bg-white rounded hover:bg-blue-100"
                  >
                    {value.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content (col-span-8) */}
          <div className="col-span-12 md:col-span-8 bg-white p-4 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">{elevator.title}</h1>
            <p className="mb-6">{elevator.description}</p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {paginatedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${type} elevator ${i + 1}`}
                  className="w-full rounded border"
                />
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className={`py-1 px-3 rounded ${
                  currentPage === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Prev
              </button>

              <span>
                Page {currentPage + 1} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages - 1 ? prev + 1 : prev
                  )
                }
                disabled={currentPage >= totalPages - 1}
                className={`py-1 px-3 rounded ${
                  currentPage >= totalPages - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ElevatorDetails2;
