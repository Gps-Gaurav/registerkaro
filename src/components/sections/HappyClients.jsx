const HappyClients = () => {
  const clientLogos = [
    "/logos/Display Round Logo (1).png",
    "/logos/Display Round Logo (2).png",
    "/logos/Display Round Logo (3).png",
    "/logos/Display Round Logo (4).png",
    "/logos/Display Round Logo (5).png",
    "/logos/Display Round Logo (6).png",
    "/logos/Display Round Logo (7).png",
    "/logos/Display Round Logo (8).png",
    "/logos/Display Round Logo (9).png",
    "/logos/Display Round Logo (10).png",
    "/logos/Display Round Logo (11).png",
    "/logos/Logo Glyphs (1).png",
    "/logos/Logo Glyphs (2).png",
    "/logos/Logo Glyphs (3).png",
    "/logos/Logo Glyphs (4).png",

  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Happy Clients
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="mt-10">
          <button className="text-blue-600 hover:underline font-medium flex items-center justify-center gap-2">
            Show more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
