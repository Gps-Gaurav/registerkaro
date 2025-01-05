import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white">

      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold text-blue-900">
          Register<span className="text-orange-500">Karo</span>
        </h1>
      </div>


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
            Talk An Expert
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;