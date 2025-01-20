import React from "react";
import "./SixContainer.css";
import { Link } from "react-router-dom";

const SixContainer = () => {
  return (
    <div className="six-container">
      <div className="six-content">
        <h2>We are The Solar Company</h2>
        <p>
          The Solar Company is a turnkey business-to-business solar installer
          company. We specialize in solar panel systems for commercial real
          estate. Our team of experts can help maximize the value and assets of
          your property. Thus, we also help you take advantage of the many
          financial benefits of solar energy for your business.
        </p>
        
        <Link to="/commercial-solar-projects/process/"><button>See Our Process</button></Link>
      </div>
    </div>
  );
};

export default SixContainer;
