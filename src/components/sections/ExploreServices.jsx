// src/components/sections/ExploreServices.jsx
const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "⚙️",
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "📊",
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: "⭐",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: "📦",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: "🛒",
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    icon: "✏️",
  },
];
const ExploreServices = () => {
  return (
    <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
        Welcome to RegisterKaro.in
      </h2>
      <h1 className="mt-2 text-4xl font-bold text-gray-900">Explore Our Services</h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover how we can help your business grow with our specialized services.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-center text-orange-500 text-4xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
        See All Services
      </button>
    </div>
  </section>
  );
};

export default ExploreServices;