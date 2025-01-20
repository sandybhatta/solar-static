import React from 'react';

const Footer = ({logo}) => {
  return (
    <div className="last-home-container">
      
      {/* Footer Section */}
      <div className="footer-section">
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        {/* Logo as Link */}
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="The Solar Company Logo" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>
          ©2025 The Solar Company. All rights reserved. |{' '}
          <a href="/privacy-policy/">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};



export default Footer;
