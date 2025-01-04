// src/components/sections/AboutSection.jsx
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Register Karo</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Register Karo is your trusted partner for all business registration 
              and compliance needs. We provide comprehensive solutions to help you 
              start and grow your business.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="About Register Karo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;