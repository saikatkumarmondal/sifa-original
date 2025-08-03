import React from "react";

const WorkEnvironment = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Section: Image */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-0">
        <img
          src="/Photo/career/3.jpg"
          alt="Work Environment"
          className="w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-4 space-y-6 text-black rounded-lg">
        {/* Work Environment at SIFA Elevator */}
        <div className="p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Work Environment at SIFA Elevator
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            At Ningbo SIFA Elevator Co., Ltd., we cultivate a professional,
            respectful, and innovation-driven workplace. Whether you're in
            sales, engineering, logistics, or customer support, your
            contributions matter. We value teamwork, clear communication, and
            continuous improvement across all departments.
          </p>
        </div>

        {/* Benefits and Perks */}
        <div className="p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-md text-black">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Benefits and Perks
          </h1>
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            Working at SIFA comes with valuable advantages:
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Competitive salary and performance bonuses</li>
            <li>Health insurance and paid holidays</li>
            <li>Career growth and skill development opportunities</li>
            <li>Flexible working hours (where applicable)</li>
            <li>A modern, supportive, and safety-focused environment</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Build your future with a company that’s going up—every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkEnvironment;
