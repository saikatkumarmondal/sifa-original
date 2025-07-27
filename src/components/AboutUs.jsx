import React from 'react';
import ImageOne from "/Photo/Photo/aboutUs/Photo 1.png";
import ImageTwo from "/Photo/Photo/aboutUs/Phhoto 2.png";
import ImageThree from "/Photo/Photo/aboutUs/Photo 3.png";
const AboutUs = () => {
  return (
    <div>
      <h1
        className="text-5xl md:text-6xl font-bold text-center text-indigo-700 my-3 tracking-wide"
        data-aos="fade-up"
        data-aos-duration="1000">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 scroll-y-0 mb-10">
        {/* Image Section */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center bg-white shadow-xl rounded-xl hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300">
          <img
            src={ImageOne}
            alt="Photo One"
            className="h-full object-cover rounded-xl w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full h-auto sm:h-[700px] md:h-auto flex flex-col justify-between bg-white shadow-xl rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300">
          <div className="w-full h-auto flex flex-col bg-white shadow-xl rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300 gap-3 sm:gap-4 md:gap-5">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700">
              Ningbo SIFA Elevator Co., Ltd.
              <br />
              Your Vertical Movement Partner
            </h3>

            <p className="text-gray-700 leading-relaxed text-[15px] sm:text-[16px] md:text-[17px]">
              <span className="font-bold text-indigo-800">
                Ningbo SIFA Elevator Co., Ltd.
              </span>{" "}
              is a professional company specializing in the design,
              manufacturing, and export of complete elevator and escalator
              systems, as well as a full range of spare parts.
              <br />
              With a strong commitment to safety, reliability, and innovation,
              we have earned the trust of clients across residential,
              commercial, and industrial sectors.
              <br />
              Backed by advanced technology and a highly skilled team of
              engineers and technicians, our products are crafted to meet
              international quality standards.
              <br />
              We focus not only on performance and durability but also on user
              experience — ensuring smooth, safe, and efficient vertical
              movement in every project we support.
              <br />
              At SIFA, we understand that elevators and escalators are essential
              components of modern infrastructure. That’s why we continually
              invest in research, product development, and customer support to
              deliver complete solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-16">
        {/* Text Section */}
        <div
          className="w-full h-auto flex flex-col gap-6 bg-white shadow-xl rounded-xl p-6 hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300"
          data-aos="fade-right"
          data-aos-duration="1000">
          <h3 className="text-3xl font-semibold text-indigo-700">
            Mission & Vision
          </h3>

          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-[16px] md:text-[17px]">
            At{" "}
            <span className="font-bold text-indigo-800">
              Ningbo SIFA Elevator Co., Ltd.,
            </span>{" "}
            we believe elevators, escalators, and spare parts are more than just
            mechanical systems — they are essential to how people connect, live,
            and work in modern spaces. We see vertical transportation not only
            as a solution for moving people and goods, but as a key part of
            smart, safe, and sustainable urban life.
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px]">
            We envision a future where elevators and escalators are intelligent,
            accessible to all, and seamlessly integrated into every environment
            — from private villas and hospitals to high-rise offices and
            industrial facilities. Our passion lies in creating solutions that
            are not only safe and reliable, but also forward-thinking and
            adaptable to tomorrow’s needs.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 mt-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-[17px]">
            To provide innovative, safe, and dependable elevator, escalator, and
            spare parts solutions that elevate the way people move — with a
            strong focus on quality, service, and long-term customer
            satisfaction.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 mt-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-[17px]">
            To become a globally recognized brand in the vertical transportation
            industry by delivering smarter, more efficient solutions that
            enhance everyday life and redefine urban mobility.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="h-[500px] w-full flex items-center justify-center bg-white shadow-xl rounded-xl hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300"
          data-aos="fade-left"
          data-aos-duration="1000">
          <img
            src={ImageTwo}
            alt="Mission and Vision"
            className="h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 my-10 p-10">
        {/* Image Section */}
        <div
          className="h-[400px] sm:h-[500px] md:h-[450px] w-full md:w-[410px] flex items-center justify-center bg-white shadow-xl rounded-xl hover:scale-[1.02] hover:shadow-indigo-200 transition duration-300 md:relative -bottom-35"
          data-aos="fade-left"
          data-aos-duration="1000">
          <img
            src={ImageThree}
            alt="Mission and Vision"
            className="h-full w-full object-cover rounded-xl "
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700">
            Why Choose Us
          </h3>

          <div className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed space-y-6">
            <div className="flex items-start gap-3 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <span className="text-indigo-600 text-xl mt-1 flex-shrink-0">
                ✅
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                  Quality-Driven Manufacturing
                </h2>
                <p>
                  At SIFA, quality is at the heart of everything we do. From
                  selecting the finest materials to rigorous product testing, we
                  ensure our elevators, escalators, and spare parts meet the
                  highest international safety and performance standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <span className="text-indigo-600 text-xl mt-1 flex-shrink-0">
                ✅
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                  Comprehensive Product Support
                </h2>
                <p>
                  We offer not just complete elevator systems, but also all
                  necessary spare parts to ensure long-term maintenance and
                  smooth operation — reducing downtime and enhancing
                  reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <span className="text-indigo-600 text-xl mt-1 flex-shrink-0">
                ✅
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                  Innovation at Every Level
                </h2>
                <p>
                  Our commitment to innovation drives us to continuously improve
                  our technology, designs, and service. Whether it's smarter
                  control systems, energy efficiency, or modern aesthetics, we
                  are always thinking ahead.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <span className="text-indigo-600 text-xl mt-1 flex-shrink-0">
                ✅
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                  Customer-Focused Service
                </h2>
                <p>
                  From project planning to installation and after-sales support,
                  our team works closely with clients to understand their needs
                  and provide personalized solutions. We value long-term
                  relationships built on trust and satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <span className="text-indigo-600 text-xl mt-1 flex-shrink-0">
                ✅
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                  Experienced & Professional Team
                </h2>
                <p>
                  With years of industry experience, our team of professionals
                  brings deep knowledge and attention to detail to every
                  project, ensuring reliable and efficient solutions from start
                  to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
