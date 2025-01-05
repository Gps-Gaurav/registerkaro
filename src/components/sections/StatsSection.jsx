const StatsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <p className="text-orange-500 font-semibold tracking-wide uppercase mb-2">
          Why Register Karo
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Some Numbers are important
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-8 justify-center">
        {/* Customers */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-yellow-500 to-blue-500 inline-block">
            1M+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">Customers</p>
        </div>
        {/* Years of Excellence */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
            12+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">Years of Excellence</p>
        </div>
        {/* R&D Engineers */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-gray-800 inline-block">
            41+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">R&D Engineers</p>
        </div>
        {/* Countries */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-blue-500 inline-block">
            78+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">Countries</p>
        </div>
        {/* Partners */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-orange-400 to-yellow-600 inline-block">
            3287+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">Partners</p>
        </div>
        {/* Awards Received */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-yellow-500 to-brown-700 inline-block">
            41+
          </h3>
          <p className="mt-2 text-gray-700 font-medium">Awards Received</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
