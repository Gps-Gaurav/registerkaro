import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Video Introductions</h2>
          <p className="mt-4 text-gray-300">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:w-1/2">
            {/* Card 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-full">
                  <span className="text-white text-lg font-bold">💡</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Explore ideas together</h3>
                <p className="mt-2 text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-full">
                  <span className="text-white text-lg font-bold">📈</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Bring those ideas to life</h3>
                <p className="mt-2 text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="rounded-lg border-4 border-gray-700 overflow-hidden shadow-lg">
                <img
                  src="/video-placeholder.jpg"
                  alt="Video introduction"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-5.197-3.113A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.113a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
