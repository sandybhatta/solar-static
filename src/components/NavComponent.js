// // NavComponent.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavComponent.css';
// import logo from "../logo.png"

// const NavComponent = () => {
//   return (
//     <div className='navigation'>
//     <nav className="navbar">
//       <Link to="/" className='logo-link'>
//           <img src={logo} alt='the solar' className='logo'/>
//         </Link>
//       <ul className="nav-options">
       
//         <li className="nav-item dropdown">
//           Commercial Solar Systems
//           <ul className="dropdown-menu">
//             <li><Link to="/commercial-solar-systems/solar-panels-apartments/">Solar Panels for Apartments</Link></li>
//             <li><Link to="/commercial-solar-systems/solar-panels-carport/">Solar Panels for Carport</Link></li>
//             <li><Link to="/commercial-solar-systems/solar-panels-warehouse/">Solar Panels for Warehouse</Link></li>
//             <li><Link to="/commercial-solar-systems/solar-field-installations/">Solar Field Installations</Link></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           Commercial Solar Projects
//           <ul className="dropdown-menu">
//             <li><Link to="/commercial-solar-projects/process/">our turnkey process</Link></li>
            
//           </ul>
//         </li>
//         <li className="nav-item dropdown">About Us
//             <ul className="dropdown-menu">
//               <li><Link to="/about/our-story/">Our Story
//                   </Link>
//               </li>
//               <li><Link to="/about/Our-Team/">Our team
//                   </Link>
//               </li>
//               <li><Link to="/about/Gallery/">Gallery
//                   </Link>
//               </li>
//               <li><Link to="/about/Solar-News/">Solar News
//                   </Link>
//               </li>
//               <li><Link to="/about/FAQ/">Frequently Asked Questions
//                   </Link>
//               </li>
//               <li><Link to="/about/warranty/">warranty
//                   </Link>
//               </li>
            
//             </ul>
//         </li>

//         <li className="nav-item" ><Link style={{color:"black", textDecoration:"none"}} to="/contact-us">Contact us</Link></li>

//         <li className="nav-item"><Link style={{color:"black", textDecoration:"none"}} to="/store">Store</Link>
//         </li>
//       </ul>


//     </nav>
//     <div className='free-quote-line'>
//       <div className='button'>
//         <Link  to="/contact-us">Free Quote</Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default NavComponent;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import logo from '../logo.png';

const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null); // Close all dropdowns when toggling the main menu
  };
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className='navigation'>
      <nav className='navbar'>
        <Link to='/' className='logo-link'>
          <img src={logo} alt='The Solar Company' className='logo' />
        </Link>
        <button className='hamburger-menu' onClick={toggleMenu}>
          <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </button>
        <ul className={`nav-options ${menuOpen ? 'show-mobile' : ''}`}>
          <li className='nav-item dropdown' onClick={() => toggleDropdown(0)}>
            <div className='nav-item-header'>
              <Link to='/'>Commercial Solar Systems</Link>
              <i className={`bx bx-right-arrow-alt`}></i>
            </div>
            <ul
              className={`dropdown-menu ${
                dropdownOpen === 0 ? 'show-dropdown' : ''
              }`}
            >
              <li>
                <Link to='/commercial-solar-systems/solar-panels-apartments/'>
                  Solar Panels for Apartments
                </Link>
              </li>
              <li>
                <Link to='/commercial-solar-systems/solar-panels-carport/'>
                  Solar Panels for Carport
                </Link>
              </li>
              <li>
                <Link to='/commercial-solar-systems/solar-panels-warehouse/'>
                  Solar Panels for Warehouse
                </Link>
              </li>
              <li>
                <Link to='/commercial-solar-systems/solar-field-installations/'>
                  Solar Field Installations
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item dropdown' onClick={() => toggleDropdown(1)}>
            <div className='nav-item-header'>
              <Link to='/'>Commercial Solar Projects</Link>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
            <ul
              className={`dropdown-menu ${
                dropdownOpen === 1 ? 'show-dropdown' : ''
              }`}
            >
              <li>
                <Link to='/commercial-solar-projects/process/'>
                  Our Turnkey Process
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item dropdown' onClick={() => toggleDropdown(2)}>
            <div className='nav-item-header'>
              <Link to='/'>About Us</Link>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
            <ul
              className={`dropdown-menu ${
                dropdownOpen === 2 ? 'show-dropdown' : ''
              }`}
            >
              <li>
                <Link to='/about/our-story/'>Our Story</Link>
              </li>
              <li>
                <Link to='/about/Our-Team/'>Our Team</Link>
              </li>
              <li>
                <Link to='/about/Gallery/'>Gallery</Link>
              </li>
              <li>
                <Link to='/about/Solar-News/'>Solar News</Link>
              </li>
              <li>
                <Link to='/about/FAQ/'>Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to='/about/warranty/'>Warranty</Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/contact-us'>
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/store'>
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className='free-quote-line'>
        <div className='button'>
          <Link to='/contact-us'>Free Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;

