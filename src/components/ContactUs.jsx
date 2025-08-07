import React from "react";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <>
      <div className="relative">
        {/* Fixed Fullscreen Background Image */}
        <div
          className="fixed top-0 left-0 w-full h-[80%] bg-cover bg-center z-[-1]"
          style={{ backgroundImage: "url('/Photo/career/6.jpg')" }}
        />

        {/* Hero Section with Transparent Background */}
        <div className="min-h-screen flex items-center justify-center ">
          <h1 className="text-5xl font-bold text-white relative -top-35">
            Contact Us
          </h1>
        </div>

        {/* Scrollable Content Over Background */}
        <div className=" z-10 bg-white/90 text-gray-800 px-6 py-20 relative -top-40">
          <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section: How Can We Help? (Form) */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-[#006800]">
                    How Can We Help?
                  </h2>
                  {/* Orange underline, adjusted width to match image more closely */}
                  <div className="w-full h-1 bg-[#006800] rounded-full mb-6"></div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Do you have questions, requests, or suggestions? We look
                    forward to your call and will be pleased to assist you .
                    Please fill out the form by specifying your concern
                    alongside the necessary contact information.
                    <br /> Our Customer Support staff will get back to you
                    shortly!
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="" // Placeholder removed to match image
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="" // Placeholder removed to match image
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="" // Placeholder removed to match image
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="" // Placeholder removed to match image
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryDetails"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Inquiry Details
                      </label>
                      <textarea
                        id="inquiryDetails"
                        name="inquiryDetails"
                        rows="5"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="" // Placeholder removed to match image
                      ></textarea>
                    </div>

                    <div className="flex justify-start items-center pt-4">
                      <button
                        type="submit"
                        className="relative overflow-hidden inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-black bg-transparent transition duration-300 ease-in-out group"
                      >
                        <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition duration-500 ease-out scale-150 group-hover:scale-100 rounded-full"></span>
                        <span className="relative z-10 group-hover:text-green-900 transition duration-300">
                          SEND BUSINESS INQUIRY
                        </span>
                      </button>
                      {/* Adjusted border and text color for the arrow circle */}
                      <div className="ml-4 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Right Section: Contact Information & Business Hours */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-[#006800] mb-2">
                    Contact Information
                  </h2>
                  {/* Orange underline, adjusted width to match image more closely */}
                  <div className="w-full h-1 bg-[#006800] rounded-full mb-6"></div>

                  {/* Adjusted background color to match the image's teal/dark cyan */}
                  <div className="bg-white text-black p-6 rounded-lg shadow-md mb-8">
                    <p className="mb-3 flex gap-2 ">
                      <strong className="block text-sm  ">Address:</strong>
                      A3085, Building 1, No.888, Dongchang Road, Jiangbei
                      District, Ningbo, China.
                    </p>
                    <p className="mb-3 flex gap-2 items-center text-center">
                      <strong className="block text-sm  text-center">
                        Email:
                      </strong>
                      <a
                        href="mailto:info@nbsifa.com"
                        className="text-black hover:underline text-center"
                      >
                        info@nbsifa.com
                      </a>
                    </p>
                    <p className="mb-3 flex gap-2 items-center text-center">
                      <strong className="block text-sm  text-center">
                        Phone/WeChat:
                      </strong>
                      +86 13028953265
                    </p>
                    <p className="flex gap-2 items-center ">
                      <strong className="block text-sm ">WhatsApp:</strong>
                      +86 13056798250
                    </p>
                  </div>

                  <h2 className="text-3xl font-semibold text-[#006800] mb-2">
                    Business Hours
                  </h2>
                  {/* Orange underline, adjusted width to match image more closely */}
                  <d2iv className="w-[70%] h-1 bg-[#006800] rounded-full mb-6"></d2iv>

                  <div className="text-gray-700">
                    <p className="mb-2">
                      <span className="inline-block w-40">
                        Monday – Friday:
                      </span>
                      <span className="relative -left-8"> 9 AM – 6 PM</span>
                    </p>
                    <p className="mb-2">
                      <span className="inline-block w-40">Saturday:</span>
                      <span className="relative -left-23"> 10 AM – 2 PM</span>
                    </p>
                    <p>
                      <span className="inline-block w-40">Sunday:</span>
                      <span className="relative -left-25"> Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[500px] overflow-hidden rounded shadow-lg mt-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.454252200011!2d121.59499507538652!3d29.937609974977587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d622796aa4b75%3A0x89d6b1fa6654109f!2sA3085%2C%20Building%201%2C%20888%20Dongchang%20Rd%2C%20Jiang%20Bei%20Qu%2C%20Ning%20Bo%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20315021!5e0!3m2!1sen!2sbd!4v1754211657722!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContactUs;
