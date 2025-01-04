import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#003366', color: '#ffffff', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span>📧</span>
        <a href="mailto:www.registerkaro.in" style={{ color: '#ffffff', textDecoration: 'none' }}>
          www.registerkaro.in
        </a>
        <span>|</span>
        <span>📞</span>
        <a href="tel:+918447746183" style={{ color: '#ffffff', textDecoration: 'none' }}>
          +918447746183
        </a>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
          <FaInstagram />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
          <FaPinterest />
        </a>
      </div>
    </div>
  );
};

export default Header;
