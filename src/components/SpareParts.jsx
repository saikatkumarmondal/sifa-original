import React from 'react';

const SpareParts = () => {
    return (
      <div className="mt-10 p-10 mx-auto">
        <h1 className="text-5xl font-bold text-center">Spare Parts Solution</h1>
        <p className="my-9 text-2xl text-center">
          “Quality Spare Parts and Components We Offer for Elevators &
          Escalators”
        </p>

        <div className="grid grid-cols-1 pr-6 space-y-6 gap-6 my-5 mr-3 md:grid-cols-2 md:gap-6 P-3 lg:grid-cols-4 lg:gap-10">
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/1. Elevator Control System.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Elevator Control System
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/2. Display.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Display
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/3. Photoelectric Switch.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Photoelectric Switch
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/public/Photo/Photo/3. Section/4. Elevator Safety Gear Set.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Elevator Safety Gear Set
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/5. Intercom Set.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Intercom Set
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/6. Encoder.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Encoder
              </p>
            </div>
          </div>

          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/7. Limit Switch.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Limit Switch
              </p>
            </div>
          </div>
          <div className="card relative group w-96 shadow-sm">
            <figure>
              <img
                src="/Photo/Photo/3. Section/8. Elevator Push Button.jpg"
                alt="Shoes"
                className="w-80 h-[400px]"
              />
            </figure>

            {/* Bottom-right hoverable label */}
            <div className="absolute -bottom-4 right-5 w-[300px] bg-gray-500 p-5 rounded-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-white">
              <p className="text-center text-white font-semibold transition-colors duration-300 group-hover:text-black">
                Elevator Push Button
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpareParts;