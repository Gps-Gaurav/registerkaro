import Image from "next/image";

 const HeroSection =()=> {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-blue-100 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl font-bold">★</span>
            <p className="text-lg font-medium">Google Rating</p>
            <p className="text-lg font-bold">★★★★★</p>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-lg text-gray-600">
            An online business compliance platform that helps entrepreneurs and other individuals with various{" "}
            <span className="font-semibold text-gray-800">registrations</span>,{" "}
            <span className="font-semibold text-gray-800">tax filings</span>, and other{" "}
            <span className="font-semibold text-gray-800">legal matters</span>.
          </p>
          <div className="flex space-x-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">4.5+</p>
              <p className="text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">20,000+</p>
              <p className="text-gray-600">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">99.8%</p>
              <p className="text-gray-600">Financial Stability</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">
              Talk An Expert
            </button>
            <button className="bg-transparent text-blue-600 px-6 py-3 border border-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white">
              See how it works
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col justify-items-stretch lg:items-end">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg text-gray-800">Annual Compliance</h3>
          </div>
          <div className="mt-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg text-gray-800">Payroll Services</h3>
          </div>
          <div className="mt-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg text-gray-800">Company Formation</h3>
          </div>
          <div className="mt-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg text-gray-800">Annual Compliance</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;

