import React from 'react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: "📝",
      text: "Fill up Application Form",
      bgColor: "bg-red-400"
    },
    {
      icon: "💳",
      text: "Make Online Payment",
      bgColor: "bg-green-500"
    },
    {
      icon: "👨‍💻",
      text: "Executive will Process Application",
      bgColor: "bg-orange-300"
    },
    {
      icon: "✉️",
      text: "Get Confirm Mail",
      bgColor: "bg-gray-500"
    }
  ];

  return (
    <div className="bg-orange-400 py-8 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Changed flex to grid for better responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step container */}
              <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-3 hover:bg-white/20 transition-all duration-300">
                {/* Icon container */}
                <div className={`${step.bgColor} rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0`}>
                  <span className="text-white text-xl">
                    {step.icon}
                  </span>
                </div>
                {/* Text container */}
                <p className="text-white font-medium text-sm md:text-base">
                  {step.text}
                </p>
              </div>

              {/* Arrow - Only show between steps and not after the last step */}
              {index < steps.length - 1 && (
                <>
                  {/* Down arrow for mobile */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-90 sm:hidden">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>

                  {/* Right arrow for tablet (2 columns) */}
                  <div className="hidden sm:block lg:hidden absolute top-1/2 -right-3 transform -translate-y-1/2">
                    {index % 2 === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    )}
                  </div>

                  {/* Right arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;