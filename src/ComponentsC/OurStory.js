import React, { useEffect} from 'react';
import logo from "../logo.png"
import pic1 from "../ComponentA/imagesA/pic1.jpg";
import pic2 from "../ComponentA/imagesA/pic2.jpg";
import pic3 from "../ComponentA/imagesA/pic3.avif";
import pic4 from "../ComponentA/imagesA/pic4.jpg";
import pic5 from "../ComponentA/imagesA/pic5.jpg";
import pic6 from "../ComponentA/imagesA/pic6.jpg";

import "./ourStory.css";
import SixContainer from '../components/SixContainer';
import Footer from '../components/Footer';
const bg=["rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(211, 214, 222)","rgb(255, 255, 255)","rgb(204, 209, 65)"]
const data = [
  {
    image: pic2,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-trails.svg",
    heading: "Return on Roof",
    paragraph: "We speak in savings, not just sustainability; our commercial real estate expertise helps you understand the complete Return on Roof your property can provide with solar, including energy savings, potential revenue generation and property appreciation.",
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-hand.svg",
    heading: "Generating Solar ROI",
    paragraph: "This consultative approach helps you make a financially driven decision about when and how to incorporate solar, so you can achieve the maximum return on investment sooner.",
  },
  
  
];

const OurStory = () => {

  
    const handleScroll = () => {
      const containers = document.querySelectorAll('.row-text');
      containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
  
        // Check if the container is in view
        if (containerTop <= window.innerHeight * 0.70) {
          container.classList.add('visible'); // Show text when it's in the viewport
        } else {
          container.classList.remove('visible'); // Hide text when it's out of the viewport
        }
      });
    };
  
    // Add scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        {/* Main Image Section */}
        <div className="image-front">
          <img src={pic1} alt="Solar Panels" />
        </div>
  
        {/* Main Text Section */}
        <div className="text-box-appartments-story">
          <div id="text-container" className="text-box-app">
            <h2>Generating electricity, ROI, and your trust.</h2>
            <p>The Solar Company® specializes in helping commercial real estate owners and operators maximize the value of their property by leveraging the full financial impact of solar – anywhere in the country.</p>
            
          </div>
        </div>
  
        {/* Row Containers */}
        {data.map((item, index) => (
          <div
            className={`row-container ${index % 2 !== 0 ? "reverse-layout" : ""}`}
            key={index}
          >
            {/* Text Section */}
            <div className="row-text" style={{ backgroundColor: `${bg[index]}` }}>
              <img src={item.logo} alt="Logo" className="row-logo" />
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
  
            {/* Image Section */}
            <div className="row-image">
              <img src={item.image} alt={`Row ${index + 1}`} />
            </div>
          </div>
        ))}


<div className='solar-comp-container'>
    <div className='solar-comp'>
            <h2>The Solar Company: Your Turnkey Solar Installer</h2>
            <p>The Solar Company® is your local solar panel system specialist for commercial real estate. We help you maximize the assets and value of your property by introducing the financial benefits of solar for your business. Achieve impressive energy savings, property appreciation, a potential revenue stream, and company integrity.</p>
            <p>We always support our clients every step of the way and help them access the financial subsidies and tax benefits of solar from the local government. We take care of the entire process from design to activation to provide you with a turnkey solar system that you know how to operate.  </p>
            <p>We are lucky enough to work with a wide variety of clients from various businesses and establishments who rate us for quality and efficiency. They are always amazed by the financial benefits of our systems.</p>
            
    </div>
</div>
<SixContainer />

<div className='install-solar-container'>
    <div className='install-solar'>
        <h2>Get Started with Solar </h2>
        <p>If the numbers make sense, with our in-house finance team and installation experts, we can take care of the entire process – from design and financing to installation and commissioning – so you don’t have to worry about a thing.</p>
        <p>Get in touch with our helpful team to get answers to your questions and book a consultation for your solar installation today.</p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
 
export default OurStory