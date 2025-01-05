import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-[#003366] text-white px-4 py-3 md:px-6">
      {/* Container for both sections */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            {/* Email Section */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <a 
                href="mailto:www.registerkaro.in" 
                className="hover:text-orange-300 transition-colors duration-200"
              >
                www.registerkaro.in
              </a>
            </div>

            {/* Divider - Hidden on mobile */}
            <span className="hidden md:inline">|</span>

            {/* Phone Section */}
            <div className="flex items-center gap-2">
              <FaPhone className="text-base" />
              <a 
                href="tel:+918447746183" 
                className="hover:text-orange-300 transition-colors duration-200"
              >
                +918447746183
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-300 transition-colors duration-200"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-300 transition-colors duration-200"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-300 transition-colors duration-200"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a 
              href="https://www.pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-300 transition-colors duration-200"
            >
              <FaPinterest className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;