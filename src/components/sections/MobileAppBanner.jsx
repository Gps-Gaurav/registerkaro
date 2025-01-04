import Image from 'next/image';

const MobileAppBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Manage Your Services on Mobile
            </h2>
            <p className="mb-6">
              Download our app and manage everything on the go!
            </p>
            <div className="flex gap-4">
              <button className="bg-black px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                App Store
              </button>
              <button className="bg-black px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                Play Store
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full">
              <Image
                src="/images/mobile-app.png"
                alt="Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;