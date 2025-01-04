// src/components/home/sections/AboutSection.js
export const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Register Karo</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Register Karo is your trusted partner in business registration and compliance.
              We make the process simple, efficient, and hassle-free.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/about-image.jpg" 
                alt="About Register Karo"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};