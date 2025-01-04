import React from "react";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Start a Business",
      links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
    },
    {
      title: "Government Registration",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "Compliance & Tax",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex justify-center space-x-6">
            <FaFacebookF className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaGoogle className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaApple className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-white text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-yellow-500 text-lg font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-gray-300 hover:text-gray-400">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-yellow-500 rounded-full p-4 text-white shadow-lg hover:bg-yellow-600 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-lg">↑</span>
          </button>
        </div>
        <p className="text-center text-gray-300 text-sm mt-6">
          © 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
