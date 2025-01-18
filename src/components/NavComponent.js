// NavComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import logo from "../logo.png"

const NavComponent = () => {
  return (
    <div className='navigation'>
    <nav className="navbar">
      <Link to="/" className='logo-link'>
          <img src={logo} alt='the solar' className='logo'/>
        </Link>
      <ul className="nav-options">
       
        <li className="nav-item dropdown">
          Commercial Solar Systems
          <ul className="dropdown-menu">
            <li><Link to="/commercial-solar-systems/solar-panels-apartments/">Solar Panels for Apartments</Link></li>
            <li><Link to="/commercial-solar-systems/solar-panels-carport/">Solar Panels for Carport</Link></li>
            <li><Link to="/commercial-solar-systems/solar-panels-warehouse/">Solar Panels for Warehouse</Link></li>
            <li><Link to="/commercial-solar-systems/solar-field-installations/">Solar Field Installations</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          Commercial Solar Projects
          <ul className="dropdown-menu">
            <li><Link to="/commercial-solar-projects/process/">our turnkey process</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">About Us
            <ul className="dropdown-menu">
              <li><Link to="/about/our-story/">Our Story
                  </Link>
              </li>
              <li><Link to="/about/Our-Team/">Our team
                  </Link>
              </li>
              <li><Link to="/about/Gallery/">Gallery
                  </Link>
              </li>
              <li><Link to="/about/Solar-News/">Solar News
                  </Link>
              </li>
              <li><Link to="/about/FAQ/">Frequently Asked Questions
                  </Link>
              </li>
              <li><Link to="/about/warranty/">warranty
                  </Link>
              </li>
            
            </ul>
        </li>

        <li className="nav-item" ><Link style={{color:"black", textDecoration:"none"}} to="/contact-us">Contact us</Link></li>

        <li className="nav-item"><Link style={{color:"black", textDecoration:"none"}} to="/store">Store</Link>
        </li>
      </ul>


    </nav>
    <div className='free-quote-line'>
      <div className='button'>
        <Link  to="/contact-us">Free Quote</Link>
      </div>
    </div>
    </div>
  );
};

export default NavComponent;
