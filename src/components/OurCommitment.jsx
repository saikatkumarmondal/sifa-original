import React from "react";

const OurCommitment = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-6 md:mb-8 lg:mb-10">
          <div className="w-full">
            <img src="/Photo/career/2.jpg" alt="" className="w-full h-auto" />
          </div>

          <div className="min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 text-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-green-800">
              Our Commitment
            </h2>

            <p className="text-base sm:text-lg md:text-xl max-w-xl text-center mb-4 sm:mb-6">
              At Ningbo SIFA Elevator Co., Ltd., we are committed to:
            </p>

            <ul className="list-disc list-inside space-y-2 sm:space-y-3 max-w-xl text-base sm:text-lg md:text-xl">
              <li>Engineering Excellence in every product we deliver</li>
              <li>Customer-Centric Service across global markets</li>
              <li>
                Sustainable Growth through skilled and passionate team members
              </li>
              <li>Integrity and Trust in everything we do</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCommitment;
