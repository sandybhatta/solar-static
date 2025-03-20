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
      Why Switching to Solar Could Be the Smartest Choice You Make
      </h2>
      <div className={`icon-grid ${showContent ? 'visible' : ''}`}>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-taxsavings.svg" alt="Tax Incentives" />
          <h3>Tax Incentives</h3>
          <p>Enjoy valuable government incentives and tax benefits when you switch to solar.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-arrows.svg" alt="Lower Utility Bill" />
          <h3>Lower Utility Bills</h3>
          <p>Harness free, unlimited solar energy to make your building more energy independent.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-trail.svg" alt="Business Savvy" />
          <h3>Business Smart</h3>
          <p>Switching to solar can cut costs, boost property value, and open new revenue opportunities—all at once.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-sun.svg" alt="Greener Impact" />
          <h3>Greener Impact</h3>
          <p>Solar energy is fully renewable, reducing your environmental footprint while enhancing your company's reputation.</p>
        </div>
        <div className="icon-item">
          <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-thefinger.svg" alt="It's Easy" />
          <h3>Hassle-Free Process</h3>
          <p>Our experts take care of everything—from financing and design to installation—making your switch to solar seamless.</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
