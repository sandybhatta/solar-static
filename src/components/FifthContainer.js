import React, { useEffect } from "react";
import pic1 from "../pic1.jpg";
import pic2 from "../pic2.jpg";
import pic3 from "../pic3.jpg";
import "./FifthContainer.css";


const FifthContainer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll(".fifth-row");
      rows.forEach((row) => {
        const rowTop = row.getBoundingClientRect().top;
        // Check if the row is in view
        if (rowTop <= window.innerHeight * 0.8) {
          row.classList.add("visible");
        }
        else{
            if(row.classList.contains("visible")){
                row.classList.remove("visible")
            }
        }
      });
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fifth-container">
      {/* Row 1 */}
      <div className="fifth-row">
        <div className="fifth-image">
          <img src={pic1} alt="Solar Business 1" />
        </div>
        <div className="fifth-text" style={{background:"rgb(211, 214, 222)"}}>
          <h2>We Understand the Business Side of Solar</h2>
          <p>
          Our experts can help you go beyond the benefits of sustainability. We know the solar energy business inside and out and will help you make an informed strategic investment decision.
          </p>
        </div>
      </div>
      {/* Row 2 */}
      <div className="fifth-row reverse">
        <div className="fifth-image">
          <img src={pic2} alt="Solar Business 2" />
        </div>
        <div className="fifth-text">
          <h2>We Install Savings</h2>
          <p>
          Our in-house finance experts have a decade of experience under their belts and use a variety of strategic services to help make your commercial solar project an impressive money-making stream with a great ROI. Our design team and consultants ensure your system is right for your business. We customize a plan tailored to your energy needs, goals, and budget.
          </p>
        </div>
      </div>
      {/* Row 3 */}
      <div className="fifth-row">
        <div className="fifth-image">
          <img src={pic3} alt="Solar Business 3" />
        </div>
        <div className="fifth-text" style={{background:"rgb(211, 214, 222)"}}>
          <h2>We Make Solar Simple</h2>
          <p>
          With the commercial solar installation cost lower than ever and commercial solar financing companies being so generous today, installing a solar energy system is easier than ever and a great investment opportunity. It can increase the value of your property, decrease operating costs, and develop a new stream of revenue for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthContainer;
