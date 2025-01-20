import React from 'react';
import logo from "../logo.png"
import pic1 from "../ComponentA/imagesA/pic1.jpg";
import { Link } from 'react-router-dom';
import SixContainer from '../components/SixContainer';
import "./Warranty.css"
import Footer from '../components/Footer';

const Warranty = () => {
    return (
        <div>
          <div className='image-container'>
            <img src={pic1} alt="piccs" />
          </div>
          <div className='header'>
            <h2>Warranty</h2>
          </div>

          <div className='warranty'>
                <div className='half-width'>
                    <div className='logo-row'>
                        <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/08/warranty-25.png" alt="pic"/>
                        <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/08/warranty-25.png" alt="pic"/>
                        <img src="https://www.thesolarcompany.com/wp-content/uploads/2022/08/warranty-10.png" alt="pic"/>
                    </div>
                    <div className='logo-info'>
                        <p>Solar panels</p>
                        <p>Inverters</p>
                        <p>Workmanship</p>
                    </div>
                    <p>Your solar panels are an investment and that investment needs to be protected. At The Solar Company, we stand behind our equipment and our installation. That's why we have included warranties on everything from the solar panels we install, the inverters, and the workmanship we provide while building your solar energy system.</p>
                    <p>Our products are covered by a 25-year manufacturer warranty so you do not have to worry about your investment not paying off. We install all of our systems with a highly-skilled in-house team, not subcontractors. This allows us to guarantee up our work with a 10-year workmanship warranty.</p>
                    <p>To learn more about our warranties and to get a PDF copy please email travis@thesolarcompany.com.</p>
                </div>
          </div>
         <SixContainer />

<div className='get'>
    <div className='get-cont'>
        <h2>Get Started with the Leading Commercial Solar Installation Company.</h2>
        <p>The Solar Company is one of the top commercial solar companies around. We work with business leaders to install savings that cut or reduce one of their highest expenses. We help lower your utility bills and make your building energy independent with an inexhaustible and free energy source. Not only can this energy source help save you millions of dollars, but it also helps save the environment since solar energy is 100% renewable, and thus, generates a positive environmental impact for a greener solution. Get in touch with us today to book a consultation and our helpful team will answer any questions you have about solar installations.</p>
    </div>
</div>

      <Footer logo={logo} />
    </div>
  );
};



export default Warranty