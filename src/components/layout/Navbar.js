import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-blue-900">
            Register<span className="text-orange-500">Karo</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-orange-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" legacyBehavior passHref>
                <a className="hover:text-orange-500 transition-colors duration-200">Home</a>
              </Link>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-500 transition-colors duration-200">
                Our Services ▾
              </a>
            </li>
            <li>
              <Link href="/#blog" legacyBehavior>
                <a className="hover:text-orange-500 transition-colors duration-200">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact" legacyBehavior>
                <a className="hover:text-orange-500 transition-colors duration-200">Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/#about" legacyBehavior>
                <a className="hover:text-orange-500 transition-colors duration-200">About Us</a>
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            <FaSearch className="text-gray-600 cursor-pointer hover:text-orange-500 transition-colors duration-200 text-lg" />
            <a
              href="/talk-to-expert"
              className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap"
            >
              Talk To An Expert
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
      >
        <ul className="px-6 py-4 space-y-4">
          <li>
            <Link href="/" legacyBehavior passHref>
              <a className="block hover:text-orange-500 transition-colors duration-200">Home</a>
            </Link>
          </li>
          <li>
            <a
              href="/services"
              className="block hover:text-orange-500 transition-colors duration-200"
            >
              Our Services ▾
            </a>
          </li>
          <li>
            <Link href="/#blog" legacyBehavior>
              <a className="block hover:text-orange-500 transition-colors duration-200">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact" legacyBehavior>
              <a className="block hover:text-orange-500 transition-colors duration-200">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/#about" legacyBehavior>
              <a className="block hover:text-orange-500 transition-colors duration-200">About Us</a>
            </Link>
          </li>
          <li className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <FaSearch className="text-gray-600 cursor-pointer hover:text-orange-500 transition-colors duration-200 text-lg" />
              <a
                href="/talk-to-expert"
                className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap"
              >
                Talk To An Expert
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;