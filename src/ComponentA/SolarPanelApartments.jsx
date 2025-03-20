import React, { useEffect} from 'react';
import logo from "../logo.png"
import pic1 from "./aprts-pic.jpg";
import pic2 from "./imagesA/pic2.jpg";
import pic3 from "./imagesA/pic3.avif";
import pic4 from "./imagesA/pic4.jpg";
import pic5 from "./imagesA/pic5.jpg";
import pic6 from "./imagesA/pic6.jpg";
import pic7 from "./imagesA/pic7.jpg";
import pic8 from "./imagesA/pic8.jpg";
import pic9 from "./imagesA/pic9.avif";
import pic10 from "./imagesA/pic10.jpg";


import "./SolarPanelApartments.css"



import SixContainer from '../components/SixContainer';
import Footer from '../components/Footer';
const bg=["rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(211, 214, 222)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(204, 209, 65)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"]
const data = [
  {
    image: pic2,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-property-value.svg",
    heading: "Increase Your Property Value with Solar",
    paragraph: "Installing solar panels can significantly boost your property’s value. Plus, if you decide to refinance, having a solar array could help you secure better rates."
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-family.svg",
    heading: "Enhance Tenant Satisfaction with Solar",
    paragraph: "Tenants love the idea of low-cost or even free electricity. By adding solar panels, you’re offering them great value and improving their living experience. Solar panels work best with master meter systems, but there are many ways to incorporate them into any existing energy plan."
  },
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-tax-credits.svg",
    heading: "Take Advantage of Government Incentives for Solar",
    paragraph: "There are numerous government incentives for adopting solar energy. For example, the federal government offers a 26% tax credit for commercial solar installations, and many states, like California, offer additional rebates. These incentives make solar more affordable and encourage its widespread adoption."
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-house-shield-check.svg",
    heading: "Solar Panels Can Protect Your Property",
    paragraph: "Solar panels aren’t just for energy—they can also provide physical protection. Their durable design helps block debris and deflect harsh weather conditions, with some property owners even reporting reduced hail damage thanks to their panels."
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-sign-arrows.svg",
    heading: "Slash Your Energy Bills with Solar",
    paragraph: "Solar panels can help you significantly lower your energy bills and, depending on the size of your system and location, might even eliminate your electricity costs entirely. Plus, you may qualify for tax credits and rebates."
  },
  {
    image: pic7,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-chart-arrow-up.svg",
    heading: "Protect Your Business Against Rising Energy Costs",
    paragraph: "Electricity prices continue to rise, but the cost of solar energy remains stable or even decreases. Installing a solar system now can protect you from future rate hikes, providing a long-term financial benefit."
  },
  {
    image: pic8,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-storefront.svg",
    heading: "Solar Works in Almost Any Environment",
    paragraph: "Thanks to advancements in solar technology, there's now a solution for nearly every environment. Whether your property is in a city or a rural area, there’s a solar option for you. Even homes with shaded roofs can benefit from solar energy."
  },
  {
    image: pic9,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-sun-rays.svg",
    heading: "Reduce Your Carbon Footprint with Solar",
    paragraph: "Solar panels are one of the most effective ways to cut carbon emissions while supporting renewable energy. They help property owners save on energy bills and play a key role in reducing environmental impact, contributing to a cleaner, sustainable future."
  },
  {
    image: pic10,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-panels.svg",
    heading: "Position Your Property for the Future with Solar",
    paragraph: "Solar energy is the future of clean power. By installing solar panels, you position your property as a forward-thinking, environmentally conscious business that aligns with the growing interest in green technology and sustainability."
  }
];


const SolarPanelApartments = () => {
   
  
    const handleScroll = () => {
      const containers = document.querySelectorAll('.row-text1');
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
        <div className="text-box-appartments">
          <div id="text-container" className="text-box-app">
            <h2>Solar Panels for Apartments</h2>
 
            <p>The Solar Company® offers affordable solar panel solutions for apartments in Texas and the Sunbelt, providing sustainable options with excellent returns on investment. With the cost of solar panels more affordable than ever, we help owners maximize the value of their solar energy systems.</p>

            <p>Solar panels significantly boost the ROI of apartment complexes. Experts estimate that each retrofit can contribute up to 20% ROI annually.</p>


            <p>Buildings with high energy consumption in areas with high energy costs benefit most from solar panel installation. Over the past decade, installation costs have dropped by more than 70%, and solar technology is growing in popularity, with usage increasing by up to 42% each year.</p>
           
            
          </div>
        </div>
  <div className='unwanted'>
    <h2>The Benefits of Solar</h2>
  </div>
        {/* Row Containers */}
        {data.map((item, index) => (
          <div
            className={`row-container1 ${index % 2 !== 0 ? "reverse-layout2" : ""}`}
            key={index}
          >
            {/* Text Section */}
            <div className="row-text1" style={{ backgroundColor: `${bg[index]}` }}>
              <img src={item.logo} alt="Logo" className="row-logo1" />
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
  
            {/* Image Section */}
            <div className="row-image1">
              <img src={item.image} alt={`Row ${index + 1}`} />
            </div>
          </div>
        ))}



<SixContainer />

<div className='install-solar-container1'>
    <div className='install-solar'>
        <h2>Install Solar Panels for Your Multi-Family Property Today</h2>
        <p>The Solar Company partners with businesses to provide tailored solar panel solutions for apartments and multi-family properties. Reach out to us today, and we'll guide you through every step of the installation process. Let us help you get started!</p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelApartments;