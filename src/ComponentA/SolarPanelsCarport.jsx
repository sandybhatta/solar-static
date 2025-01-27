
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
    heading: "Additional Revenue Stream",
    paragraph: "By investing in commercial solar power systems, you as the owner can benefit from a variety of federal and state incentives. Our financial team can help you take advantage of valuable commercial tax credits for solar energy and utility rebates by going green. We can give you an estimate of how much you could earn in your consultation. You could produce so much green electricity that you will be able to sell the excess back to the grid. This additional revenue will enable you to channel the profits into developing other areas of your business. ",
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-store-carports.png",
    heading: "Increase Property Value",
    paragraph: "Commercial properties that have a solar panel system installed have a higher market value and sell faster than other properties that don't. Installing solar carports increases the usable square footage of your property.With the gaining popularity of solar, properties that already have solar installed will likely be in high demand due to the energy bill savings. Our expertise in commercial real estate enables us to help you understand your 'Return on Roof' when it comes to solar power.",
  },
  
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-bag.svg",
    heading: "Protect Your Vehicles & Customers",
    paragraph: "Texas hail storms and relentless heat can cause significant damage to your vehicles. Texas was the top state for hail loss claims on vehicles in 2017. Protecting your valuable assets is paramount for your dealership business.If you have an open surface lot, you probably already have hail insurance, but with an increase in premiums, this is no longer a viable option. Our solar panels are completely hail-proof and offer excellent protection from hail damage to your vehicles. ",
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-document-check.svg",
    heading: "Enjoy Savings with Solar",
    paragraph: "You can receive a free quote for solar carports in your dealership. We only provide the highest quality solar panels for competitive prices. We understand that the commercial solar is a big investment, but we help you get the best return in green energy. Our finance team will help you make the most of the financing options, government grants, and tax credits in your area so you can get the greatest return. ",
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-vehicle-check.svg",
    heading: "Solar Panel Warranty",
    paragraph: "You can enjoy peace of mind knowing that your entire system will be covered by the manufacturer's warranty. We ensure you are completely satisfied with the installation and functioning of your new solar system",
  },
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
            <p>Solar panels for carports & auto dealers is efficient and a great investment. Utilize the surface area of your car port roofs and boost revenue with solar panels.</p>
            <p>Looking across the parking lot of your auto dealership, you'll see the vast expanse of space that could be used to save and make money. Whether you already have carports installed or you're considering having a new commercial solar carport installation, you could maximize your ROI on their roof space.</p>
            <p>It takes a lot of electricity to run an auto dealership – as you know from your monthly electricity bill. Your vehicles need maximum lighting for visibility and security. Solar power could eliminate your monthly bill and you may produce excess power to sell back to the grid.</p>
            <p>Going solar will impress eco-conscious clients who opt for sustainable purchasing. 
More and more consumers will choose businesses that have gone solar to support the reduction of their carbon footprint.</p>
            <p>Discover the lasting benefits of choosing solar carports and optimize the potential of your property and your business. Get in touch to find out how we can help your business thrive with solar.</p>
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
            <h2>The Solar Company: Your Turnkey Solar Installer</h2>
            <p>The Solar Company® is your local solar panel system specialist for commercial real estate. We help you maximize the assets and value of your property by introducing the financial benefits of solar for your business. Achieve impressive energy savings, property appreciation, a potential revenue stream, and company integrity.</p>
            <p>We always support our clients every step of the way and help them access the financial subsidies and tax benefits of solar from the local government. We take care of the entire process from design to activation to provide you with a turnkey solar system that you know how to operate.  </p>
            <p>We are lucky enough to work with a wide variety of clients from various businesses and establishments who rate us for quality and efficiency. They are always amazed by the financial benefits of our systems.</p>
            
    </div>
</div>
<SixContainer />

<div className='install-solar-container2'>
    <div className='install-solar2'>
        <h2>Get Started with Solar Carports</h2>
        <p>Discover how you can maximize the potential of your car dealership business with solarincrease-powered carports. Impress your customers,  your revenue and property value and protect your vehicles with this innovative commercial solar panel installation.</p>
        <p>Get in touch with our helpful team to get answers to your questions and book a consultation for your solar installation today.</p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelCarport;