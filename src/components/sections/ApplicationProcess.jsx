import React from 'react';

const ApplicationProcess = () => {
  return (
    <div className="bg-orange-500 py-8">
      <div className="flex justify-center items-center gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-red-500 rounded-full w-16 h-16 flex justify-center items-center">
            <span className="text-white text-2xl">
              {/* Icon */}
              📝
            </span>
          </div>
          <p className="text-white font-medium mt-2">Fill up Application Form</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full w-16 h-16 flex justify-center items-center">
            <span className="text-white text-2xl">
              {/* Icon */}
              💳
            </span>
          </div>
          <p className="text-white font-medium mt-2">Make Online Payment</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-300 rounded-full w-16 h-16 flex justify-center items-center">
            <span className="text-white text-2xl">
              {/* Icon */}
              👨‍💻
            </span>
          </div>
          <p className="text-white font-medium mt-2">
            Executive will Process Application
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-500 rounded-full w-16 h-16 flex justify-center items-center">
            <span className="text-white text-2xl">
              {/* Icon */}
              ✉️
            </span>
          </div>
          <p className="text-white font-medium mt-2">Get Confirm Mail</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
