
import React, { useEffect, useState } from 'react';
import logo from "../logo.png"
import pic1 from "./imagesA/pic1.jpg";
import pic2 from "./imagesA/pic2.jpg";
import pic3 from "./imagesA/pic3.avif";
import pic4 from "./imagesA/pic4.jpg";
import pic5 from "./imagesA/pic5.jpg";
import pic6 from "./imagesA/pic6.jpg";

import "./SolarPanelsCarport.css";
import SixContainer from '../components/SixContainer';
import Footer from '../components/Footer';
const bg=["rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(211, 214, 222)","rgb(255, 255, 255)","rgb(204, 209, 65)"]
const data = [
  {
    image: pic2,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-trails.svg",
    heading: "Generate Additional Revenue with Solar",
    paragraph: "By investing in commercial solar power, you can take advantage of valuable federal and state incentives. Our financial team can guide you through available tax credits and utility rebates. During your consultation, we'll provide an estimate of how much you could earn. With excess energy, you can sell it back to the grid, creating a new income stream to reinvest into your business."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-store-carports.png",
    heading: "Boost Your Property’s Value with Solar",
    paragraph: "Commercial properties with solar panels tend to have higher market value and sell faster than those without. Installing solar carports increases the usable space on your property. As solar energy gains popularity, properties with solar installations will likely be in high demand due to their energy savings. Let us help you understand the return on investment from installing solar on your roof."
  },
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-bag.svg",
    heading: "Protect Your Vehicles & Customers from the Elements",
    paragraph: "Texas is known for its intense hail storms and extreme heat, which can damage your vehicles. In fact, Texas had the highest number of hail loss claims in 2017. Solar carports not only shield your cars but also provide reliable protection from hail damage. Say goodbye to expensive insurance premiums with our durable, hail-proof solar panels."
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-document-check.svg",
    heading: "Save Money with Solar Carports",
    paragraph: "We offer free quotes for solar carports at your dealership. Our high-quality solar panels are competitively priced to give you the best value. We understand that commercial solar is a big investment, but we’ll help you maximize your return by guiding you through available financing options, government grants, and tax credits in your area."
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-vehicle-check.svg",
    heading: "Comprehensive Solar Panel Warranty",
    paragraph: "Rest easy knowing your entire solar system is covered by the manufacturer’s warranty. We ensure your installation is seamless and that you’re fully satisfied with the performance and longevity of your new solar energy system."
  }
];


const SolarPanelCarport = () => {
    const [showText, setShowText] = useState(false); // State to control visibility
  
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
        <div className="image-front4">
          <img src={pic1} alt="Solar Panels" />
        </div>
  
        {/* Main Text Section */}
        <div className="text-box-appartments2">
          <div id="text-container" className="text-box-app">
            <h2>Solar Panels for Carports & Auto Dealers</h2>
            <p>Solar panels for carports and auto dealerships are an efficient and profitable investment. Maximize the roof space of your carports and generate extra revenue with solar power.</p>

            <p>Looking out over the parking lot of your auto dealership, you'll see an opportunity to save and make money by utilizing that vast space. Whether you already have carports or are planning a new solar carport installation, you can boost your ROI by using your roof space effectively.</p>

            <p>Running an auto dealership requires a lot of energy, as seen in your monthly electricity bills. From vehicle lighting to security, solar energy can eliminate your electricity costs and even generate extra power that you can sell back to the grid.</p>

            <p>Switching to solar will not only reduce your energy expenses but will also appeal to eco-conscious customers who prioritize sustainable businesses. More consumers are choosing to support businesses that help reduce their carbon footprint.</p>

            <p>Explore the long-term advantages of solar carports and unlock the full potential of your property and business. Contact us today to learn how we can help your business thrive with solar energy.</p>
          </div>
        </div>
  <div className='unwanted'>
    <h2>The Benefits of Solar Carports</h2>
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


<div className='solar-comp-container2'>
    <div className='solar-comp2'>
            <h2>The Solar Company: Your Full-Service Solar Installer</h2>
            <p>The Solar Company® is your trusted local specialist for solar panel systems tailored to commercial real estate. We help you enhance your property’s value and assets by unlocking the financial benefits of solar energy for your business. Enjoy substantial energy savings, increased property value, a potential new revenue stream, and enhanced company credibility.</p>

            <p>Our team is committed to supporting you at every stage, assisting you in securing financial incentives and tax benefits from local government programs. We handle everything from design to activation, ensuring that your turnkey solar system is ready for operation and easy to manage. </p>

            <p>We are proud to work with a diverse range of clients across various industries who consistently rate us highly for our quality and efficiency. They are always impressed by the significant financial returns our solar systems bring to their businesses.</p>
            
    </div>
</div>
<SixContainer />

<div className='install-solar-container2'>
    <div className='install-solar2'>
        <h2>Get Started with Solar Carports</h2>
        <p>Unlock the full potential of your car dealership by installing solar-powered carports. Enhance your property value, boost revenue, and protect your vehicles with this innovative solar solution for commercial spaces.</p>
        <p>Contact our friendly team today to get all your questions answered and schedule a consultation for your solar installation.</p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelCarport;