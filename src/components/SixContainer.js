import React from "react";
import "./SixContainer.css";
import { Link } from "react-router-dom";

const SixContainer = () => {
  return (
    <div className="six-container">
      <div className="six-content">
        <h2>We are The Solar Company</h2>
        <p>
        The Solar Company is a full-service B2B solar installer, specializing in solar panel systems for commercial real estate. Our expert team helps you enhance the value of your property while taking full advantage of the financial benefits solar energy offers your business.
        </p>
        
        <Link to="/commercial-solar-projects/process/"><button>See Our Process</button></Link>
      </div>
    </div>
  );
};

export default SixContainer;
