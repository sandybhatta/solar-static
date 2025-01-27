import React, { useState } from 'react';
import logo from "./logo.png";
import pic1 from "./ComponentA/aprts-pic.jpg";
import "./ContactUs.css";
import Footer from './components/Footer';

const ContactUs = () => {
  const [mapLocation, setMapLocation] = useState("jaipur");

  return (
    <div>
      <div className="image-front3">
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

          {/* Map Section */}
          <div className="map-section">
            <h3>Our Locations</h3>
            <div className="map-container">
              {mapLocation === "jaipur" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.0532085481!2d75.6257470087723!3d26.88511514579534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1738004373415!5m2!1sen!2sin"
                  width="300px"
                  title='first'
                  height="200px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871161.2289747281!2d84.32662411170834!3d23.65407047669949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b2386df480857%3A0x62c5b809eee29004!2sJharkhand!5e0!3m2!1sen!2sin!4v1738004422375!5m2!1sen!2sin"
                  width="300px"
                  title='second'
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
            <button
              className="location-button"
              onClick={() => setMapLocation(mapLocation === "jaipur" ? "jharkhand" : "jaipur")}
            >
              {mapLocation === "jaipur" ? "View Jharkhand Location" : "View Jaipur Location"}
            </button>
          </div>
        </div>
      </div>
      <Footer logo={logo} />
    </div>
  );
};

export default ContactUs;
