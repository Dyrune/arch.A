
import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaUpwork, FaEnvelope } from 'react-icons/fa'; // Import Font Awesome icons
import { SiUpwork } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2023 My Website. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
          <SiUpwork />
        </a>
        <a href="mailto:your-email@example.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
