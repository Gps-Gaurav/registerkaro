// src/components/sections/WhyChooseUs.jsx
const features = [
  {
    title: "Confidential & Safe",
    description: "All your private information is safe with us.",
    icon: "🛡️",
    bgColor: "bg-red-50",
  },
  {
    title: "No Hidden Fee",
    description: "Everything is put before you with no hidden charges or conditions.",
    icon: "✅",
    bgColor: "bg-green-50",
  },
  {
    title: "Guaranteed Satisfaction",
    description: "We ensure that you stay 100% satisfied with our offered services.",
    icon: "😊",
    bgColor: "bg-blue-50",
  },
  {
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals.",
    icon: "👨‍💼",
    bgColor: "bg-pink-50",
  },
];
  
  const WhyChooseUs = () => {
    return (
      <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          Why RegisterKaro.in
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Why Choose Register Karo
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It is with consistent services and results that build trust with the people, and that in turn help us to serve the business better.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default WhyChooseUs;