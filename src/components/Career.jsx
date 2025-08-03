import React from "react";

import Header from "./Header";
import Navbar2 from "./Navbar2";
import AOS from "aos";
import Footer from "./Footer";
const Career = () => {
  return (
    <div>
      {/* Fixed Background Section */}
      <Header></Header>
      <Navbar2></Navbar2>
      <div
        className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center "
        style={{ backgroundImage: "url('/Photo/career/1.jpg')" }}
      >
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug px-4 sm:px-10 ml-4 sm:ml-12 text-left drop-shadow-lg">
          Careers at Ningbo SIFA Elevator Co., Ltd.
          <br />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Climb Higher with Us — Where Innovation Meets Opportunity
          </span>
        </h1>
      </div>

      {/* Scrollable Content Container */}
      {/* Removed px-6 from here as the inner divs handle their own padding/margins */}
      <div className="min-h-screen bg-white text-gray-800 text-lg leading-relaxed">
        {/* Container for "Be a Part of Something Great at SIFA!" section */}
        {/* Added pt-16 to create space from the top of the scrollable content */}
        <div className="min-h-screen bg-white flex justify-center items-center  px-4 sm:px-8">
          {/* Grey Box: Removed -top-80 which was causing overlap */}
          <div
            className="w-full h-[550px] max-w-6xl bg-gray-200 rounded-md shadow-md p-4 sm:p-6 relative -top-50 flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="text-green-700 text-center  sm:text-2xl md:text-5xl font-semibold mb-7 relative -top-10">
              Be a Part of Something Great at SIFA!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
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
                  Take your career to new heights. We offer a dynamic platform
                  for learning, skill development, and long-term professional
                  advancement.
                </p>
              </div>

              {/* Right Column */}
              <div className="p-3 text-center sm:text-left">
                <h2 className="text-lg font-semibold text-green-900">
                  Competitive <br className="hidden sm:block" /> Benefits
                  Package
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

        {/* Our Commitment Section */}
        <div
          className="grid relative -top-[300px] grid-cols-1 lg:grid-cols-2 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-6 md:mb-8 lg:mb-10"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="w-full">
            <img
              src="/Photo/career/2.jpg"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
                Sustainable Growth through skilled and passionate <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;team members
              </li>
              <li>Integrity and Trust in everything we do</li>
            </ul>
          </div>
        </div>

        {/* Application Process Section */}
        <div
          className="w-full max-w-screen-xl relative -top-70 mx-auto bg-white border-[6px] border-black rounded-lg shadow-lg p-6 sm:p-10"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-center my-6 text-green-700 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
            Application Process at Ningbo SIFA Elevator Co., Ltd.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-6 sm:px-10 pb-10">
            {/* Step 1 */}
            <div>
              <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
                Submit Your Application
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Visit our Careers page to complete the online application form.
                Please include your updated resume and a brief cover letter
                outlining your interest and qualifications.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
                Offer & Onboarding
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                If your profile matches our current needs, our HR team will
                contact you to schedule an initial interview. Depending on the
                role, further interviews or assessments may follow.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
                Interview & Evaluation
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Selected candidates will receive a formal job offer. Once
                accepted, you’ll begin our structured onboarding program to
                smoothly transition into the SIFA team and culture.
              </p>
            </div>
          </div>
        </div>

        {/* Work Environment Section */}
        <div
          className="flex flex-col lg:flex-row min-h-screen bg-white py-16 relative -top-50"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
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
                contributions matter. We value teamwork, clear communication,
                and continuous improvement across all departments.
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

        {/* Ready to Apply Section */}

        <div
          className="w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 py-16"
          style={{ backgroundImage: "url('/Photo/career/4.jpg')" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-5xl text-white font-bold mb-4">
            Ready to Apply?
          </h1>
          <p className="text-white text-xl max-w-3xl leading-relaxed">
            Join us today and take the first step toward a rewarding career at
            Ningbo SIFA Elevator Co., Ltd.—where your growth rises with every
            floor.
          </p>
        </div>

        {/* Form Section: Removed mt-32 and added py-16 for vertical spacing */}
        <div
          className="py-16 mx-auto max-w-lg px-4 sm:px-0"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <form className="space-y-10">
            {/* Name Input */}
            <div className="relative border-b border-gray-300 focus-within:border-green-600">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full bg-transparent py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Email and Phone Inputs */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Email */}
              <div className="relative flex-1 border-b border-gray-300 focus-within:border-green-600">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-transparent py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative flex-1 border-b border-gray-300 focus-within:border-green-600">
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full bg-transparent py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div className="relative border-b border-gray-300 focus-within:border-green-600">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full bg-transparent py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* About You */}
            <div className="relative border-b border-gray-300 focus-within:border-green-600">
              <textarea
                id="aboutyou"
                placeholder="About You"
                rows={4}
                className="w-full bg-transparent py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
              <button className="flex items-center space-x-2 text-black text-lg font-semibold py-3 px-6 rounded-full border-2 border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                <span>SEND YOUR INFO</span>
                <div className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Career;
