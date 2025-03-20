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
          Our team goes beyond sustainability. With in-depth knowledge of the solar industry, we guide you to make an informed, strategic investment decision.
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
          With over a decade of experience, our finance experts use strategic services to turn your solar project into a profitable investment with excellent ROI. Our design team customizes a plan based on your business's energy needs, goals, and budget.
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
          With lower installation costs and generous financing options, going solar is more accessible than ever. It boosts property value, reduces operating costs, and creates a new revenue stream for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthContainer;
