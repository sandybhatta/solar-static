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
    paragraph: "We begin by providing a customized proposal tailored to your roof's solar potential and your past energy usage, ensuring you have the information needed to make an informed decision about adopting solar. Our team will also assist you in securing financing options and guide you through the process of accessing tax benefits and rebate opportunities."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-buildings-clouds.svg",
    heading: "Site Assessment & Design",
    paragraph: "Our experts will visit your site to validate the proposed system design, utilizing drones and specialized software to assess your roof. We’ll then craft a system tailored to your specific needs, considering zoning regulations and any structural limitations that may impact the design."
  },
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-document-sign.svg",
    heading: "Permits & Approvals",
    paragraph: "Before installation begins, we handle all the necessary permits and approvals from local authorities, utility companies, and other governing bodies. This ensures your installation meets all zoning and regulatory requirements, streamlining the entire process."
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hand-wrench.svg",
    heading: "Installation",
    paragraph: "Our NABCEP-certified solar technicians work swiftly and efficiently, minimizing any disruption to your business. While most installations take less than a week, more complex setups, such as multi-family systems with battery backups, may require a bit more time."
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-check.svg",
    heading: "Inspection",
    paragraph: "After installation, your system will undergo a thorough inspection by the city inspector and utility company to ensure compliance with all codes and regulations. If applicable, the utility company may install a new meter to facilitate net metering, allowing you to sell excess energy back to the grid."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hand-technology.svg",
    heading: "Activation",
    paragraph: "Once your system has passed inspections and all necessary permits are in place, we’ll guide you through the final step—activating your solar system. We’ll help you get started with the monitoring system, ensuring you can track and maximize your energy production moving forward."
  }
];


const TurnkeyProcess = () => {
    
  
    const handleScroll = () => {
      const containers = document.querySelectorAll('.row-text2');
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
        <div className="image-front2b">
          <img src={pic1} alt="Solar Panels" />
        </div>
  
        {/* Main Text Section */}
       
  <div className='unwanted'>
    <h2>Our Turnkey Process</h2>
  </div>
        {/* Row Containers */}
        {data.map((item, index) => (
          <div
            className={`row-container2 ${index % 2 !== 0 ? "reverse-layout2" : ""}`}
            key={index}
          >
            {/* Text Section */}
            <div className="row-text2" style={{ backgroundColor: `${bg[index]}` }}>
              <img src={item.logo} alt="Logo" className="row-logo2" />
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
  
            {/* Image Section */}
            <div className="row-image2">
              <img src={item.image} alt={`Row ${index + 1}`} />
            </div>
          </div>
        ))}
<SixContainer/>

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