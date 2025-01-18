import React, { useEffect } from 'react';
import './FourthContainer.css';

const FourthContainer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('fourth-container');
      const images = document.querySelectorAll('.icon-item-f img');
      const containerTop = container.getBoundingClientRect().top;

      // Check if the container has been scrolled into view
      if (containerTop <= window.innerHeight * 0.8) {
        images.forEach((image) => {
          const imageTop = image.getBoundingClientRect().top;
          // Check if the image is visible after scrolling some part of the container
          if (imageTop <= window.innerHeight * 0.8) {
            image.classList.add('visible');
          }else{
            if(image.classList.contains('visible')){
                image.classList.remove('visible')
            }
          }
        });
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="fourth-container" className="fourth-container">
      <h2 className="fourth-heading">Learn More About Our Commercial Rooftop Solar Installations</h2>
      <div className="icon-grid-four">
        <div className="icon-item-f">
          <img
            src="https://www.thesolarcompany.com/wp-content/uploads/2022/03/industry-dealership.svg"
            alt="Car Dealerships"
          />
          <p>Solar Carport Installations for Car Dealerships</p>
        </div>
        <div className="icon-item-f">
          <img
            src="https://www.thesolarcompany.com/wp-content/uploads/2022/03/industry-apartments.svg"
            alt="Apartment Buildings"
          />
          <p>Solar Power Systems for Apartment Buildings</p>
        </div>
        <div className="icon-item-f">
          <img
            src="https://www.thesolarcompany.com/wp-content/uploads/2022/03/industry-warehouses.svg"
            alt="Warehouses"
          />
          <p>Solar Power Systems for Warehouses</p>
        </div>
        <div className="icon-item-f">
          <img
            src="https://www.thesolarcompany.com/wp-content/uploads/2022/03/industry-fields.svg"
            alt="Field Construction"
          />
          <p>Solar Power Field Construction</p>
        </div>
      </div>
    </div>
  );
};

export default FourthContainer;
