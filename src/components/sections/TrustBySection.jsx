import Image from "next/image";

const TrustedBySection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-gray-600 text-lg font-medium">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-6 gap-8">
          <Image
            src="/logos/Group.png"
            alt="Oracle Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/Vector.png"
            alt="Morpheus Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/Vector.png"
            alt="Morpheus Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/Vector (1).png"
            alt="Samsung Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/Group (1).png"
            alt="Monday.com Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/Group (2).png"
            alt="Segment Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
