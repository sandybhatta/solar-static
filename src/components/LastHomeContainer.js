import React from 'react';
import logo from '../logo.png'; // Ensure the logo image file is in the correct path
import './LastHomeContainer.css'; 
import Footer from './Footer';
const LastHomeContainer = () => {
  return (
    <div className="last-home-container">
      {/* Top Section */}
      <div className="top-section">
        <h2>Get Started with the Leading Commercial Solar Installation Company</h2>
        <p>
          The Solar Company is one of the top commercial solar companies around. We work with business leaders to
          install savings that cut or reduce one of their highest expenses. We help lower your utility bills and make
          your building energy independent with an inexhaustible and free energy source. Not only can this energy source
          help save you millions of dollars, but it also helps save the environment since solar energy is 100%
          renewable, and thus, generates a positive environmental impact for a greener solution. Get in touch with us
          today to book a consultation and our helpful team will answer any questions you have about solar
          installations.
        </p>
      </div>
   <Footer logo={logo}/> 
   
    </div>
  );
};

export default LastHomeContainer;
