import React from "react";

function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Main Section (Background Video & Cards) */}
      <div className="relative w-full h-[50vh] flex justify-center items-center">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg_V.mp4" // No need to import if placed in the public folder
          autoPlay
          loop
          muted
        />

        {/* Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Card Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {[1, 2, 3].map((card) => (
            <a
              key={card}
              href="#"
              className="relative bg-green-200 block p-6 border border-gray-700 rounded-lg max-w-sm shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="my-4">
                <h2 className="text-black text-2xl font-bold pb-2">
                  Card Title {card}
                </h2>
                <p className="text-black-300 py-1">
                  Card description or content goes here.
                </p>
              </div>

              <div className="flex justify-end">
                <button className="px-3 py-1 text-black border border-black-800 font-semibold rounded hover:bg-orange-200 transition">
                  Click Me
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Content Below */}
      <div className="w-full h-auto bg-white p-8">
        <h2 className="text-3xl font-bold text-center">Additional Section</h2>
        <p className="text-center mt-2 text-gray-700">
          Add the rest of your webpage content here.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
