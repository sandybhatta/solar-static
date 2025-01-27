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
    heading: "Solar Panels Generate Fantastic ROI",
    paragraph:"Solar panels create a great return on investment in terms of energy output costs.Some may try to argue that installing solar panels is a costly initial investment, but they fail to realize the potential of energy savings down the road. The ROI you get from solar panels often exceeds that of other investments made into your business, especially if you have a large warehouse space. If you have multiple large warehouses, solar panels are a smart bet towards moving you into true energy independence."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-sign-arrows.svg",
    heading: "Solar Panels Can Reduce Your Operating Costs",
    paragraph: "Once your commercial grade solar panels are paid off, they create a world of difference on your business's balance sheet. The cost to install the solar panels will more than pay for itself once you stop paying for electric utilities.",
  },
  
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-pie-chart.svg",
    heading: "Control Over Energy Bills",
    paragraph: "Budgeting for operating costs from utility bills can be tricky given their month-to-month variance. With high-grade commercial solar panels, you can know what to expect each month cost-wise for your energy bill. You won't have to worry about rising energy costs, meaning you can focus on other areas of your budget to help your business grow.",
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-property-value.svg",
    heading: "Increase Property Value",
    paragraph: "Solar panels are incredibly popular. Businesses with solar panels typically have higher property values and sell faster, even if there are payments remaining. Business owners understand the financial benefits of having commercial solar panels, meaning they will be more incentivized to purchase properties with them installed.",
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-tax-credits.svg",
    heading: "Government Tax Credits",
    paragraph: "Users of commercial solar panels can also take advantage of tax benefits from the Solar Investment Tax Credit (ITC), which gives a 26% federal tax credit. Businesses can also take advantage of an immediate first-year deduction on the solar panel installation due to an available bonus depreciation. You know it is a sign of something valuable if the government is incentivizing business owners to make the switch to solar.",
  },
  {
    image: pic7,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-chart-arrow-down.svg",
    heading: "Increasing Affordability",
    paragraph: "One of the biggest complaints against solar panels was the cost of installation. However, these costs have dropped significantly over the last decade. Consider this along with the federal Solar Investment Tax Credit, any applicable state tax credits for solar panel installation, and cash rebates from the installer and these panels practically pay for themselves in advantages.",
  },
  {
    image: pic8,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-money-atm.svg",
    heading: "Long Term Cash Flow Growth",
    paragraph: "As your solar panels get to work, you will notice your energy savings. This means more cash in your pocket to find other investment opportunities for your business. Imagine how much extra liquidity you could have if you could cut down on your overhead costs with powering your warehouse space. Once the panels are completely paid off, there will be even more cash flow to tap into.",
  },
  {
    image: pic9,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-hands-heart.svg",
    heading: "Helps with Branding",
    paragraph: "Today many customers prioritize companies that go green with their logistics and operations. Switching to solar panels allows you to market your commitment to a greener planet by doing your part. This creates a positive message and brand image. Your customers and employees will be happier knowing the business is operating with conservation in mind.",
  },
  {
    image: pic10,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-panels.svg",
    heading: "Low Maintenance Once Installed",
    paragraph: "The solar cells that generate power for your business are encased in strong, tempered glass. These panels are built to withstand the elements and can survive heavy rains, hail, wind, and snow. While solar panels are built to be durable, manufacturers also provide warranties for replacement should anything go wrong.",
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

            <p>The Solar Company® specializes in solar panels for warehouses that help you evaluate, execute and finance an informed solar installation investment so you can achieve the highest return possible.</p>

            <p>Our team of solar and real estate experts can conduct a thorough cost-benefit analysis on your property to show you how much you could potentially save. This analysis will include potential ROI, potential revenue generation via energy savings, and property appreciation.</p>


            <p>Contact The Solar Company if you would like to kickstart the process and see how much you could be generating from switching to solar. </p>
           
            
          </div>
        </div>
  <div className='unwanted3'>
    <h2>Benefits From Switching to Solar</h2>
    <p>Now is the time to switch your commercial warehouse space to solar energy. Solar panels increase the value of a property and make for a solid long-term investment. While solar panels already come with energy-based incentives, they also come with other business advantages.</p>
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
        <h2>Contact Us to Get Started</h2>
        <p>Ready to make the switch to solar and start saving money? The Solar Company specializes in increased ROI for many types of businesses including auto dealers, apartments, warehouses, and solar fields.</p>
        <p>Contact our team of experts if you are ready to convert your energy spending into energy savings. We can start the consultation phase of the process and get you a free quote on solar panel installation today. Our team can also answer any questions you may have about the process from start to finish. </p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelsWarehouse;