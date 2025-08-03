import React from "react";

const extra = () => {
  return (
    <div>
      {/* Hero Section with smooth parallax effect */}
      <div className="bg-[url('/Photo/career/1.jpg')] bg-fixed h-screen flex items-center">
        <div>
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug px-4 sm:px-10 ml-4 sm:ml-12 text-left drop-shadow-lg">
            Careers at Ningbo SIFA Elevator Co., Ltd.
            <br />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Climb Higher with Us — Where Innovation Meets Opportunity
            </span>
          </h1>
        </div>
      </div>

      {/* Section: Why Join Us */}
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-6xl bg-gray-200 rounded-md shadow-md p-4 sm:p-6">
          <h1 className="text-green-700 text-center text-xl sm:text-2xl font-semibold mb-6">
            Be a Part of Something Great at SIFA!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="p-3 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-green-900">
                Innovative Work <br className="hidden sm:block" /> Environment
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Join a passionate team driving excellence in elevators,
                escalators, and spare parts. At SIFA, innovation and smart
                engineering are at the heart of everything we do.
              </p>
            </div>

            {/* Middle Column */}
            <div className="p-3 text-center sm:text-left border-y sm:border-y-0 sm:border-x-2 border-[#D1441B]">
              <h2 className="text-lg font-semibold text-green-900">
                Career Growth <br className="hidden sm:block" /> Opportunities
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Take your career to new heights. We offer a dynamic platform for
                learning, skill development, and long-term professional
                advancement.
              </p>
            </div>

            {/* Right Column */}
            <div className="p-3 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-green-900">
                Competitive <br className="hidden sm:block" /> Benefits Package
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                We care about our team. Enjoy a well-rounded benefits package
                designed to support your health, work-life balance, and
                financial well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OurCommitment Section */}
      <div className="min-h-screen">
        <OurCommitment />
      </div>

      {/* ApplicationProcess Section */}
      <div className="min-h-screen">
        <ApplicationProcess />
      </div>

      {/* WorkEnvironment Section */}
      <div className="min-h-screen">
        <WorkEnvironment />
      </div>

      {/* ReadyToApply Section */}
      <div className="min-h-screen">
        <ReadyToApply />
      </div>
    </div>
  );
};

export default extra;
