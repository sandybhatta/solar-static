import React, { useState, useEffect } from 'react';
import './ThirdContainer.css';
import officePicture from '../building-6528075_960_720.jpg';

const ThirdContainer = () => {
  const [showContent, setShowContent] = useState(false);

  const handleScroll = () => {
    const container = document.getElementById('third-container');
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop <= window.innerHeight * 0.45) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="third-container"
      className="third-container"
      style={{ backgroundImage: `url(${officePicture})` }}
    >
      <h2 className={`heading ${showContent ? 'visible' : ''}`}>
        Why Going Solar Is the Best Decision You’ll Ever Make
      </h2>
      <div className={`icon-grid ${showContent ? 'visible' : ''}`}>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-taxsavings.svg" alt="Tax Incentives" />
          <h3>Tax Incentives</h3>
          <p>You can take advantage of great government financial incentives and tax benefits for going solar.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-arrows.svg" alt="Lower Utility Bill" />
          <h3>Lower Utility Bill</h3>
          <p>This free and inexhaustible energy source lets your building be energy independent.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-trail.svg" alt="Business Savvy" />
          <h3>Business Savvy</h3>
          <p>Solar can save your business millions, increase your property value, and create a new revenue stream – all at once.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-sun.svg" alt="Greener Impact" />
          <h3>Greener Impact</h3>
          <p>Solar is 100% renewable, generating a net positive impact on the environment and a positive impact on your company’s reputation.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-thefinger.svg" alt="It's Easy" />
          <h3>It's Easy</h3>
          <p>Our installation experts and in-house finance team handle everything for you, from financing and design to installation.</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
