const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="md:flex justify-between items-start gap-8">
          {/* Left Side */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <p className="text-gray-300 mb-4 pr-4">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-google text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-apple text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 flex-1">
            <div>
              <h5 className="text-orange-400 font-semibold mb-3">
                Start a Business
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Solutions</li>
                <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                <li className="hover:text-white cursor-pointer transition-colors">Solutions</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-3">
                Government Registration
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Partners</li>
                <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                <li className="hover:text-white cursor-pointer transition-colors">Developers</li>
                <li className="hover:text-white cursor-pointer transition-colors">App</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-3">
                Compliance & Tax
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Channels</li>
                <li className="hover:text-white cursor-pointer transition-colors">Scale</li>
                <li className="hover:text-white cursor-pointer transition-colors">Watch the Demo</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Competition</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-3">
                BIS & CDSCO
              </h5>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">News</li>
                <li className="hover:text-white cursor-pointer transition-colors">Leadership</li>
                <li className="hover:text-white cursor-pointer transition-colors">Media Kit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center relative">
          <button 
            onClick={scrollToTop}
            className="absolute -top-5 w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </button>
          <p className="text-gray-400 text-sm mt-8">
            © 2024 RegisterKaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;