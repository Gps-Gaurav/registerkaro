import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-blue-900">
          Register<span className="text-orange-500">Karo</span>
        </h1>
      </div>

      <ul className="hidden md:flex items-end space-x-6">
        <li>
          <Link href="/" legacyBehavior passHref>
            <a className="hover:text-orange-500 transition">Home</a>
          </Link>
        </li>
        <li>
          <a href="/services" className="hover:text-orange-500">
            Our Services ▾
          </a>
        </li>
        <li>
  <Link href="/blog" legacyBehavior>
    <a className="hover:text-orange-500 transition">Blog</a>
  </Link>
</li>
<li>
  <Link href="/contact" legacyBehavior>
    <a className="hover:text-orange-500 transition">Contact Us</a>
  </Link>
</li>
<li>
  <Link href="/about" legacyBehavior>
    <a className="hover:text-orange-500 transition">About Us</a>
  </Link>
</li>
      </ul>

      {/* Search and Button Section */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 cursor-pointer hover:text-orange-500 transition" />
        <a
          href="/talk-to-expert"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Talk An Expert
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
