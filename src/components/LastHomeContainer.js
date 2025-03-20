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
        The Solar Company is a top-tier commercial solar provider, working with business leaders to reduce one of their biggest expenses. We help lower utility bills and make your building energy independent by harnessing free, renewable solar power. This not only saves you millions but also benefits the environment by providing a sustainable energy solution. Contact us today to schedule a consultation, and our team will gladly answer all your questions about solar installations.
        </p>
      </div>
   <Footer logo={logo}/> 
   
    </div>
  );
};

export default LastHomeContainer;
