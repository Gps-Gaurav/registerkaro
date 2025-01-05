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
    <div className="bg-orange-400 py-8">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300">
              <div className={`${step.bgColor} rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0`}>
                <span className="text-white text-xl">
                  {step.icon}
                </span>
              </div>
              <p className="text-white font-medium whitespace-nowrap">
                {step.text}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-1rem] top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
