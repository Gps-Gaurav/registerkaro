import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-blue-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-sm font-medium mb-2">1% OF THE INDUSTRY</p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Welcome to your new digital reality. Now.
        </h1>

        {/* Email Input */}
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 rounded-l-lg text-gray-700 outline-none"
          />
          <button className="bg-orange-500 px-6 py-3 rounded-r-lg font-bold text-white hover:bg-orange-600 transition">
            Submit
          </button>
        </div>

        {/* Features */}
        <div className="flex justify-center items-center gap-8 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Instant results
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            User-friendly interface
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Personalized customization
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
