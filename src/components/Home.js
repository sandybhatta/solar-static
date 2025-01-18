import React, { useState, useEffect } from 'react';
import './Home.css';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import SixContainer from './SixContainer';
const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleScroll = () => {
    const container = document.getElementById('text-container');
    const containerTop = container.getBoundingClientRect().top;

    // Check if the container is in view (change this value to adjust when it should appear)
    if (containerTop <= window.innerHeight * 0.70) {
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
          <h2>Generate a Higher Return on Roof</h2>

          <p>The Solar Company® specializes in commercial solar that helps</p>

        <p> you evaluate, execute and finance an informed solar installation</p>

          <p>investment so you can achieve the highest return possible.</p>
        </div>
      </div>


        
                 <ThirdContainer />
                <FourthContainer />
                <FifthContainer />
                <SixContainer />

    </div>
  );
};

export default Home;
