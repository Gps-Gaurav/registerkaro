import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 px-6">
          <p className="text-orange-500 font-bold text-sm uppercase mb-2">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-gray-900 text-3xl font-bold mb-4">
            About <span className="text-orange-500">Register Karo</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team which has consistently delivered on projects
            thereby exceeding everyone’s expectations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
            Learn More →
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 px-6 mt-8 lg:mt-0 relative">
          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-orange-500">
            <Image
              src="/public/About.png"
              alt="Register Karo Team"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
