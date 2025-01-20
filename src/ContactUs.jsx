import React from 'react';
import logo from "./logo.png"
import pic1 from "./ComponentA/aprts-pic.jpg";
import "./ContactUs.css";
import Footer from './components/Footer';

const ContactUs = () => {
  return (
    <div>
      <div className="image-container">
        <img src={pic1} alt="piccs" />
      </div>

      <div className="contact-us">
        {/* Left Section - Contact Information */}
        <div className="contact-info">
          <h2>Leave us a message</h2>
          <p><strong>Phone</strong></p>
          <p>972-497-2454</p>
          <p><strong>Email</strong></p>
          <p>info@thesolarcompany.com</p>
          <p><strong>Address</strong></p>
          <p>17250 Dallas Pkwy,<br />Dallas TX 75248</p>
          <p><strong>Office Hours</strong></p>
          <p>Mon-Fri | 9am – 5pm<br />Sat-Sun | 9am – 2pm</p>
        </div>

        {/* Right Section - Form */}
        <div className="contact-form">
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
      <Footer logo={logo} />
    </div>
  );
};

export default ContactUs;
