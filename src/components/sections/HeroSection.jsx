import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-blue-100 min-h-[70vh] flex items-center justify-center py-6 -mt-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-0">
        <div className="space-y-4 lg:pr-4">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl font-bold">★</span>
            <p className="text-lg font-medium">Google Rating</p>
            <p className="text-lg font-bold">★★★★★</p>
          </div>
          <div className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            Your trusted partner for compliance business needs
          </div>
          <p className="text-base text-gray-600">
            An online business compliance platform that helps entrepreneurs and other individuals with various{" "}
            <span className="font-semibold text-gray-800">registrations</span>,{" "}
            <span className="font-semibold text-gray-800">tax filings</span>, and other{" "}
            <span className="font-semibold text-gray-800">legal matters</span>.
          </p>
          <div className="flex space-x-6">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600">4.5+</p>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600">20,000+</p>
              <p className="text-sm text-gray-600">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600">99.8%</p>
              <p className="text-sm text-gray-600">Financial Stability</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Talk An Expert
            </button>
            <button className="bg-transparent text-blue-600 px-5 py-2 border border-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              See how it works
            </button>
          </div>
        </div>

        <div className="relative h-[350px] lg:h-[450px] w-full">
          <div className="absolute left-1/3 transform -translate-x-1/2 h-full w-4/6 z-0">
            <Image
              src="/group3.png"
              alt="Background"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute right-0 top-1/3 -translate-y-1/2 flex flex-col space-y-2 w-64 z-10">
            <div className="bg-white shadow-lg rounded-lg p-3 w-full backdrop-blur-sm bg-opacity-90 hover:transform hover:scale-105 transition duration-300">
              <h3 className="font-bold text-base text-gray-800">Annual Compliance</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-3 w-full backdrop-blur-sm bg-opacity-90 hover:transform hover:scale-105 transition duration-300">
              <h3 className="font-bold text-base text-gray-800">Payroll Services</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-3 w-full backdrop-blur-sm bg-opacity-90 hover:transform hover:scale-105 transition duration-300">
              <h3 className="font-bold text-base text-gray-800">Company Formation</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-3 w-full backdrop-blur-sm bg-opacity-90 hover:transform hover:scale-105 transition duration-300">
              <h3 className="font-bold text-base text-gray-800">Annual Compliance</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;