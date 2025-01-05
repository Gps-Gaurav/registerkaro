const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="md:flex justify-between items-start">
          {/* Left Side */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <p className="text-gray-300 mb-4">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-google text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-apple text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <h5 className="text-orange-400 font-semibold mb-4">
                Start a Business
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li>Features</li>
                <li>Solutions</li>
                <li>Integrations</li>
                <li>Enterprise</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-4">
                Government Registration
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li>Partners</li>
                <li>Community</li>
                <li>Developers</li>
                <li>App</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-4">
                Compliance & Tax
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li>Channels</li>
                <li>Scale</li>
                <li>Watch the Demo</li>
                <li>Our Competition</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-4">BIS & CDSCO</h5>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>News</li>
                <li>Leadership</li>
                <li>Media Kit</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
          >
            <i className="fas fa-arrow-up"></i>
          </a>
          <p className="mt-4 text-gray-400">
            © 2024 RegisterKaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

