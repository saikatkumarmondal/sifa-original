import React from "react";
import { GoArrowRight } from "react-icons/go";
const ReadyToApply = () => {
  ///Photo/career/4.jpg
  return (
    <>
      <div
        className="w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('/Photo/career/4.jpg')" }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">Ready to Apply?</h1>
        <p className="text-white text-xl max-w-3xl leading-relaxed">
          Join us today and take the first step toward a rewarding career at
          Ningbo SIFA Elevator Co., Ltd.—where your growth rises with every
          floor.
        </p>
      </div>

      <div className="mt-32 mx-auto max-w-lg px-4 sm:px-0">
        {" "}
        {/* Added max-w-lg and horizontal padding for better centering and responsiveness */}
        <form className="space-y-8">
          {" "}
          {/* Increased space between form elements */}
          {/* Name Input */}
          <div className="relative border-b border-gray-300 focus-within:border-black">
            <input
              type="text"
              className="block w-full py-2 px-0 text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" " // Important: Placeholder must be a space for the label effect
              id="name"
            />
            <label
              htmlFor="name"
              className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          {/* Email and Phone Inputs */}
          <div className="flex flex-col sm:flex-row gap-8">
            {" "}
            {/* Changed to flex-col for mobile, sm:flex-row for larger screens */}
            <div className="relative  focus-within:border-black flex-1">
              <input
                type="email"
                className="block w-full py-2 px-0 text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black flex-1">
              <input
                type="text"
                className="block w-full py-2 px-0 text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                id="phone"
              />
              <label
                htmlFor="phone"
                className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
          </div>
          {/* Address Input */}
          <div className="relative border-b border-gray-300 focus-within:border-black">
            <input
              type="text"
              className="block w-full py-2 px-0 text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              id="address"
            />
            <label
              htmlFor="address"
              className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>
          {/* About You Textarea */}
          <div className="relative border-b border-gray-300 focus-within:border-black">
            <textarea
              className="block w-full py-2 px-0 text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer resize-none h-24" // Added h-24 for fixed height
              placeholder=" "
              id="aboutyou"
            ></textarea>
            <label
              htmlFor="aboutyou"
              className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              About You
            </label>
          </div>
          {/* Button */}
          <div className="flex justify-center mt-10">
            {" "}
            {/* Centered the button */}
            <button className="flex items-center space-x-2 text-black text-lg font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:text-gray-700">
              <span>SEND YOUR INFO</span>
              <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                {/* Using inline SVG for the arrow icon */}
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
    </>
  );
};

export default ReadyToApply;
