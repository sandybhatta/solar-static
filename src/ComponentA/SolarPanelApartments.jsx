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
    heading: "Solar Adds Value to the Property",
    paragraph: "Adding solar panels increases the net worth of the property. If you choose to refinance, having a solar panel array may help you to get better rates.",
  },
  {
    image: pic3,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-family.svg",
    heading: "Creates a Better Experience for Tenants",
    paragraph: "The draw of low cost or no cost electricity for tenants is huge, and by adding solar panels you are giving value to them. While solar panel systems work best with master meter systems, there are many ways to work it into any current energy plan you have.",
  },
  
  {
    image: pic5,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-tax-credits.svg",
    heading: "Great Government Incentives for Going Solar",
    paragraph: "There are many government incentives for going solar. For starters, the federal government offers a 26% tax credit for commercial solar system installations. In addition, many states offer their own incentives for solar. California, for example, offers a rebate of up to $5,000 for commercial systems. These government incentives make solar more affordable and help to accelerate the adoption of solar energy. If you're thinking about going solar, learn the incentives available in your state. ",
  },
  {
    image: pic6,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-house-shield-check.svg",
    heading: "Solar Panels Can Physically Protect Property",
    paragraph: "Ultra resilient solar panels may even work as a barrier from natural weather conditions. Solar panels are known to be effective in blocking and deflecting debris. Some property owners have even found that their solar panels have protected their property from hail damage. ",
  },
  {
    image: pic4,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-dollar-sign-arrows.svg",
    heading: "Solar Panels Can Help Reduce Your Energy Bills",
    paragraph: "Installing solar panels can help reduce your energy bills, and may even help you qualify for tax credits or rebates. Depending on your location and the size of your solar system, you could eliminate up to 100% of your electricity bill.",
  },
  {
    image: pic7,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-chart-arrow-up.svg",
    heading: "Solar Panels Can Hedge Against Inflation",
    paragraph: "The cost of electricity from the grid continues to rise, but the cost of solar energy has remained stable or even decreased in some cases. Installing a solar system now could help protect you from future rate hikes, providing another financial return on your investment.",
  },
  {
    image: pic8,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-storefront.svg",
    heading: "Practical for Nearly Every Environment",
    paragraph: "With the advancement of solar technology, there is now a solar panel for nearly every environment. Whether your property is in an urban area or a rural area, there is a solar option that will work for you. Solar panels are also perfect for homes with shaded roofs, as they can still produce energy from the sun's rays.",
  },
  {
    image: pic9,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-sun-rays.svg",
    heading: "Solar Panels Reduce Carbon Emissions and Promote Renewable Energy",
    paragraph: "Solar panels are one of the most effective ways to reduce carbon emissions and promote renewable energy. Installing solar panels can help property owners and businesses save money on their energy bills, while also reducing their environmental impact. Solar panels also play a central role in transitioning our economy to a clean energy future.",
  },
  {
    image: pic10,
    logo: "https://www.thesolarcompany.com/wp-content/uploads/2022/04/icon-panels.svg",
    heading: "Solar Energy is the Future of Clean Energy",
    paragraph: "SPosition your property and business as being on the cutting edge of technology and forward-thinking decisions. With the majority of Americans expressing concern and interest in green tech, your residential living complex's solar panels advertise that you are aligned with their values and can meet their needs.",
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
 
            <p>The Solar Company® provides Solar Panels for Apartments in Texas and the Sunbelt area for sustainable solutions that provide an excellent return on investment. Solar panels are now more affordable than ever, and we help owners get the most value for their solar energy solutions.</p>

            <p>Solar panels add tremendous return on investment to apartment complexes. Experts estimate that each retrofit—or, adding solar panels to existing buildings—contributes as much as 20% ROI annually.</p>


            <p>In fact, high energy consumption buildings in high energy cost areas benefit the most from installing solar panels. During the past ten years, the cost of installing solar has declined by more than 70%. Also, the technology is greatly increasing in popularity, with up to 42% more usage every year.</p>
           
            
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
        <p>The Solar Company works closely with businesses to provide solar panels for apartments and multi-family properties. Let us know how we can get started helping with your installation today. We’ll be with you every step of the process.</p>
    </div>

</div>
   <Footer logo={logo}/>

      </div>
    );
  };
  
  export default SolarPanelApartments;