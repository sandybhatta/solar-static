import React, { useEffect } from 'react';
import logo from "../logo.png"
import pic1 from "../ComponentA/imagesA/pic1.jpg";
import pic2 from "../ComponentA/imagesA/pic2.jpg";
import pic3 from "../ComponentA/imagesA/pic3.avif";
import pic4 from "../ComponentA/imagesA/pic4.jpg";
import pic5 from "../ComponentA/imagesA/pic5.jpg";
import pic6 from "../ComponentA/imagesA/pic6.jpg";

import "./TurnkeyProcess.css";

import SixContainer from '../components/SixContainer';
import Footer from '../components/Footer';
const bg=["rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(211, 214, 222)","rgb(255, 255, 255)","rgb(204, 209, 65)"]
const data = [
  {
    image: pic2,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-meeting.svg",
    heading: "Consultation",
    paragraph: "We’ll provide a proposal based on your roof’s solar potential and your historical electricity usage so you can make an informed decision about the financial viability of solar for your business. We can also help you secure financing and determine your potential for tax benefits and rebate savings. ",
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-buildings-clouds.svg",
    heading: "Site Assessment & Design",
    paragraph: "We will visit your site to verify the system design in your proposal, using drones and specialized software to measure your roof. We will then design your system based on zoning restrictions and limitations that may be inherent to your building’s structure.",
  },
  
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-document-sign.svg",
    heading: "Permits & Approvals",
    paragraph: "Before installation, we will secure all the required permits and approvals from the city, your utility company and any other governing agency within your area to fulfill all zoning requirements and city ordinances. ",
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hand-wrench.svg",
    heading: "Installation",
    paragraph: "Our NABCEP-certified team of solar technicians works quickly and efficiently to install your solar panels with minimal disruption to your business. While most installations can be completed within a week, complex systems such as multi-family housing systems with a battery backup may take longer.",
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-check.svg",
    heading: "Inspection",
    paragraph: "After your solar system is installed, it will be inspected by your utility company and city inspector to ensure it is up to code before activation. The utility company may also install a new meter to enable net metering so you can sell excess electricity back to the grid.",
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hand-technology.svg",
    heading: "Activation",
    paragraph: "Once the installation is complete, the system passes all inspections, and the proper permits have been granted, it’s time to flip the switch. We’ll work with you to energize the system and show you how to leverage the monitoring system.",
  },
];

const TurnkeyProcess = () => {
    
  
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
       
  <div className='unwanted'>
    <h2>Our Turnkey Process</h2>
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


<div className='form-contact'>
  {/* Left Section with Text */}
  <div className='form-left'>
    <h2>Let's talk about your offset.</h2>
  </div>

  {/* Right Section with Form */}
  <div className='form-right'>
    <form>
      {/* Name Inputs */}
      <div className="form-group">
        <label>Name<span className="required">*</span></label>
        <div className="name-inputs">
          <input type="text" placeholder="First" required />
          <input type="text" placeholder="Last" required />
        </div>
      </div>

      {/* Phone Input */}
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" placeholder="Your Phone Number" />
      </div>

      {/* Email Input */}
      <div className="form-group">
        <label>Email<span className="required">*</span></label>
        <input type="email" placeholder="Your Email Address" required />
      </div>

      {/* Company Input */}
      <div className="form-group">
        <label>Company<span className="required">*</span></label>
        <input type="text" placeholder="Your Company Name" required />
      </div>

      {/* Message Input */}
      <div className="form-group">
        <label>Message<span className="required">*</span></label>
        <textarea placeholder="Your Message" required></textarea>
      </div>

      {/* Submit Button */}
      <div className="form-group">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  </div>
</div>

   <Footer logo={logo}/>

      </div>
    );
  };

export default TurnkeyProcess