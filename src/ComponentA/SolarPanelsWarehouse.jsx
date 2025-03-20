import React, { useEffect } from 'react';
import logo from "../logo.png"
import pic1 from "./imagesA/ware-1.avif";
import pic2 from "./imagesA/pic2.jpg";
import pic3 from "./imagesA/pic3.avif";
import pic4 from "./imagesA/pic4.jpg";
import pic5 from "./imagesA/pic5.jpg";
import pic6 from "./imagesA/pic6.jpg";
import pic7 from "./imagesA/pic7.jpg";
import pic8 from "./imagesA/pic8.jpg";
import pic9 from "./imagesA/pic9.avif";
import pic10 from "./imagesA/pic10.jpg";

import "./SolarPanelsWarehouse.css";



import SixContainer from '../components/SixContainer';
import Footer from '../components/Footer';
const bg=["rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(211, 214, 222)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"];

const data = [
  {
    image: pic2,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-hand.svg",
    heading: "Solar Panels Deliver Impressive ROI",
    paragraph: "Solar panels offer an exceptional return on investment, especially when considering long-term energy savings. Although the initial investment may seem steep, the long-term benefits, such as reduced energy bills and potential tax credits, make it worthwhile. For large warehouses or multiple properties, solar panels can significantly boost your energy independence and financial performance."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-sign-arrows.svg",
    heading: "Reduce Operating Expenses with Solar",
    paragraph: "After your commercial solar system is paid off, the ongoing savings on energy costs become clear. No longer will you be burdened with high electricity bills, freeing up resources that can be reinvested into your business for further growth and development."
  },
  
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-pie-chart.svg",
    heading: "Gain Control Over Your Energy Bills",
    paragraph: "Managing your energy costs becomes much easier with solar panels. High-quality commercial solar systems allow you to predict your energy expenses, minimizing surprises from rising utility rates. This predictability makes it easier to plan your finances and focus on business growth without worrying about fluctuating energy costs."
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-property-value.svg",
    heading: "Boost Property Value with Solar Panels",
    paragraph: "Properties with solar panels are in high demand and often sell for more. Solar systems can significantly increase the value of your business premises, making it an attractive investment for potential buyers. Moreover, properties equipped with solar are quicker to sell, especially when compared to those without solar technology."
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-tax-credits.svg",
    heading: "Take Advantage of Tax Incentives",
    paragraph: "By switching to solar, businesses can benefit from significant tax incentives, such as the federal Solar Investment Tax Credit (ITC), which offers a 26% tax credit. Additionally, businesses can enjoy first-year deductions on solar installation costs thanks to bonus depreciation, making the transition to solar even more financially attractive."
  },
  {
    image: pic7,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-chart-arrow-down.svg",
    heading: "More Affordable Solar Installation",
    paragraph: "While installation costs used to be a significant barrier to solar adoption, prices have dropped significantly in recent years. With the addition of federal and state incentives, as well as installer rebates, solar panels have become more affordable than ever, offering an impressive return on investment over time."
  },
  {
    image: pic8,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-atm.svg",
    heading: "Increase Your Cash Flow with Solar",
    paragraph: "As you save on energy costs, you'll notice an improvement in your business's cash flow. The money saved on utility bills can be reinvested into other aspects of your business. Once the solar panels are paid off, the savings will continue to build, giving you even more flexibility in managing your finances."
  },
  {
    image: pic9,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hands-heart.svg",
    heading: "Enhance Your Brand's Reputation",
    paragraph: "In today's world, customers are increasingly drawn to companies that prioritize sustainability. By installing solar panels, you show your commitment to a greener future, enhancing your brand's reputation. Both your customers and employees will appreciate knowing you're taking steps to reduce your environmental footprint."
  },
  {
    image: pic10,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-panels.svg",
    heading: "Solar Panels: Low Maintenance, High Durability",
    paragraph: "Solar panels are built to last. Encased in durable tempered glass, they withstand harsh weather conditions like hail, rain, and snow. Not only are they designed for durability, but they also come with warranties for peace of mind, ensuring that your investment remains protected for years to come."
  }
];


const SolarPanelsWarehouse = () => {
   
  
    const handleScroll = () => {
      const containers = document.querySelectorAll('.row-text3');
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
        <div className="image-front3">
          <img src={pic1} alt="Solar Panels" />
        </div>
  
        {/* Main Text Section */}
        <div className="text-box-appartments3">
          <div id="text-container" className="text-box-app">
            <h2>Solar Panels for Warehouses</h2>

            <p>The Solar Company® specializes in providing solar panel solutions for warehouses, helping you evaluate, execute, and finance a strategic solar investment to achieve maximum returns.</p>

            <p>Our team of solar and real estate experts will conduct a comprehensive cost-benefit analysis for your property, showcasing potential savings, return on investment (ROI), revenue generation through energy savings, and increased property value.</p>


            <p>Reach out to The Solar Company today to begin the process and discover how much you could be saving and generating by switching to solar.</p>
           
            
          </div>
        </div>
  <div className='unwanted3'>
    <h2>Benefits of Switching to Solar</h2>
    <p>Now is the perfect time to convert your commercial warehouse to solar energy. Solar panels not only increase property value but also serve as a smart long-term investment. In addition to energy savings, solar panels offer several other business advantages, making them a valuable addition to your property.</p>
  </div>
        {/* Row Containers */}
        {data.map((item, index) => (
          <div
            className={`row-container3 ${index % 2 !== 0 ? "reverse-layout3" : ""}`}
            key={index}
          >
            {/* Text Section */}
            <div className="row-text3" style={{ backgroundColor: `${bg[index]}` }}>
              <img src={item.logo} alt="Logo" className="row-logo3" />
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
  
            {/* Image Section */}
            <div className="row-image3">
              <img src={item.image} alt={`Row ${index + 1}`} />
            </div>
          </div>
        ))}



<SixContainer />

<div className='install-solar-container3'>
    <div className='install-solar3'>
    <h2>Get in Touch and Start Your Solar Journey</h2>
<p>Ready to switch to solar and start saving on energy costs? At The Solar Company, we specialize in helping businesses of all sizes—including auto dealerships, apartment complexes, warehouses, and solar fields—maximize their return on investment with solar energy.</p>
<p>Contact our team of experts to begin transforming your energy expenses into long-term savings. We’ll guide you through the entire process, starting with a consultation and a free quote for your solar panel installation. Have questions? We’re here to answer them and ensure a seamless transition to solar power from start to finish.</p>

    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelsWarehouse;