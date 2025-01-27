import React, { useState } from 'react';
import logo from "../logo.png"
import pic1 from "../ComponentA/imagesA/pic1.jpg";
import { Link } from 'react-router-dom';
import './Faq.css';
import Footer from '../components/Footer';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqQuestions = [
    { question: "What is my ROI on installing solar panels?", 
    answer: "It depends, sometimes it’s 2 years, others it’s 10 years. We usually see 4-7 years to break even. BUT disregard ROI, you can start saving or earning Day 1. The long-term savings are so substantial that it’s hard to just focus on the immediate ROI. BUT here’s another question, what’s the ROI on your siding being replaced or your parking lot being repaved? You don’t go solar based strictly on ROI." },
    { question: "Will adding solar work for me?", answer: "There’s only one way to find out. Let’s look at your electric bill and see! Everyone’s building is different, every solar system is a custom project, and we won’t know until we design your system and get the projections." },
    { question: "Why does it work now but it didn’t a few years ago when we looked at it?", 
    answer: "The efficiency has increased, and the pricing has dropped (for now, just look at gas prices 3 years ago)." },
    { question: "Can we put a solar panel system on a building currently under construction or one we are about to build?", answer: "Yes, we can price it just like any other subcontractor would another trade. There are also additional benefits from lenders when initially applying for a construction loan that directly relates to building and operating “Green”." },
    { question: "How long does it take to install a solar power system?", answer: "Depending on the size of your building it can take between 2-4 weeks after permit." },
    { question: "How does it connect to the roof?", answer: "Depending on the type of construction of the roof, we have multiple racking options to choose from. The most common being lagging into the trusses of the structure for traditional buildings and non-penetrating ballasted mounts for flat roof applications. Engineering will ensure that the roof is structurally sound." },
    { question: "Will hail damage my solar panels?", answer: "Our solar panels are tested with 1.5-inch steel balls shot at 80mph." },
    { question: "Will I get Tax & Green Credits for having a solar system?", answer: "You get a 26% Federal Tax Credit immediately and there are depreciation tax reductions & credits given in your area. With the government’s current agenda, it’s probably a good time to take advantage." },
    { question: "Does The Solar Company use Tesla Solar?", answer: "We love Tesla technology, but there are downsides to solar shingles. If you do wait for them, you will be waiting another three to four years and the expenses will likely not drop at that point to where they are manageable for most people who would otherwise go solar with regular panels. Three to four years also reduces the time value of money and cuts significantly into opportunity cost. Therefore, waiting for solar shingles hinders the amount of money you can ultimately save with rooftop solar. Additionally, the price of solar panels is about ¼ of the cost of solar shingles at present date." },
    { question: "Is it cheaper to get solar installed when I put on a new roof?", answer: "Yes, let us include solar and you can get that roof for 26% off because it would include the Federal Tax Credit and you can get it financed together." },
    { question: "Can I get more for my building when I sell it with solar panels installed?", answer: "Yes! Green buildings, even in down economies, continuing to sell at a better rate than non-Green buildings. More power efficient buildings are more attractive to investors in today’s market. Who wouldn’t want a more efficient building?" },
    { question: "Can I really afford to add solar to my building?", answer: "With the new financing options, savings and possibly additional cash flow… can you afford not to get it?" },
  ];

  return (
    <div>
      <div className='image-front3'>
        <img src={pic1} alt="piccs" />
      </div>
      <div className='header'>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className='faq'>
        {faqQuestions.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleAnswer(index)}>
              <span className='faq-icon'>{activeIndex === index ? '-' : '+'}</span>
              {faq.question}
            </div>
            {activeIndex === index && <div className='faq-answer'>{faq.answer}</div>}
          </div>
        ))}
      </div>

      <div className='how-it'>
        <div className='text-how'>
          <h2>How it Works</h2>
          <p>We work individually with companies and owners to carefully survey and address many factors of your solar power installation project. Our aim is to provide you with a system that meets the unique needs of your property.</p>
          <Link to="/commercial-solar-projects/process/">
            <button>SEE OUR PROCESS</button>
          </Link>
        </div>
      </div>

      <div className='form-contact'>
        {/* Left Section with Text */}
        <div className='form-left'>
          <h2>Let's talk about your offset.</h2>
        </div>

        {/* Right Section with Form */}
        <div className='form-right'>
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

export default Faq;
