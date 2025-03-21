import React, { useState, useEffect } from 'react';
import './Home.css';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import SixContainer from './SixContainer';
import LastHomeContainer from './LastHomeContainer';
const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleScroll = () => {
    const container = document.getElementById('text-container');
    const containerTop = container.getBoundingClientRect().top;

    // Check if the container is in view (change this value to adjust when it should appear)
    if (containerTop <= window.innerHeight * 0.60) {
      setShowText(true); // Show text when it's in the viewport
    } else {
      setShowText(false); // Hide text when it's out of the viewport
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      
      <div className='video-container'>
        <video 
          src="https://cdn.pixabay.com/video/2018/03/02/14609-258212436_large.mp4" 
          autoPlay 
          muted 
          loop
          className="video"
        />
      </div>

      <div id="text-container" className='text-container'>
        <div className={`text-content ${showText ? 'visible' : ''}`}>
          <h2>Maximize Your Roof’s Potential!</h2>

          <p>The Solar Company® specializes in commercial solar solutions,

        guiding you through evaluation, installation, 98and financing to help you make a smart investment with the best possible returns</p>
        </div>
      </div>


        
                 <ThirdContainer />
                <FourthContainer />
                <FifthContainer />
                <SixContainer />
                <LastHomeContainer />

    </div>
  );
};

export default Home;
