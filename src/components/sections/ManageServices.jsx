import React from 'react';

const ManageServices = () => {
  return (
    <div className="bg-blue-800 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-left">

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Manage Your Services by your Mobile Phone
        </h1>


        <p className="text-gray-300 mb-8">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>


        <div className="flex justify-center md:justify-start gap-4">

          <a
            href="#"
            className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <img
              src="/logos/Frame 7840.png"
              alt="App Store"
              className="w-6 h-6 mr-2"
            />
            <div>
              <p className="text-xs">Get it on</p>
              <p className="font-bold">App Store</p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <img
              src="/logos/Vector.jpg"
              alt="Google Play"
              className="w-6 h-6 mr-2"
            />
            <div>
              <p className="text-xs">Get it on</p>
              <p className="font-bold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
