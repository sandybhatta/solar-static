import React from 'react'
import logo from "../logo.png"
import pic1 from "../ComponentA/imagesA/pic1.jpg"
import { Link } from 'react-router-dom'
import  "./OurTeam.css"
import Footer from '../components/Footer'
const OurTeam = () => {
  return (
    <div>
        <div className='image-front3'>
            <img src={pic1} alt="piccs"/>
        </div>
        <div className='header1'>
             <h2>Company Officers</h2>
        </div>
        <div className='allofthem1'>
             <div className='profile'>
                   <h2 className='name'>Jonathan Koster</h2>
                   <h4 className='post'>Chief Executive Officer</h4>
                   <div className='info'>
                    <p>Benton Holdings, LLC, a family-run private investment organization focused on scaling innovative, purpose-driven business enterprises. Mr. Koster brings a 25-year career as an entrepreneur across several industries including real estate services, real estate development/investments, oil & gas and sustainability products and services. Jon has specialized in creating and integrating partnerships between investors and business operators and was the initial inspiration for the formation of JLK Benton Holdings. In 1996, Jon began his career in real estate brokerage with Fischer & Company, where he executed office and industrial brokerage and development deals exceeding 15 million square feet in size. His clients included Fedex, Alcoa and Owens Corning.</p>
                    <p>In 2002, Jon joined Means Knaus Partners, partnering with Steve Means and Doug Knaus, where his responsibilities included real estate development and corporate client representation. Since 2006, Jon has focused on building and leading several operating companies and partnerships including SMPL Holdings, a commodities supply and trading
organization, QUS Group, an energy and utility management technology and infrastructure business and is a partner and investor in commercial real estate developments and investments.</p>
                    <p>Throughout his career, Jon has led acquisitions and developments of over $4 billion for commercial real estate in industrial, office, multi-family and retail. Jon’s structured finance abilities have led to some major “first’s” in industry, including completing the largest HUD-backed hospital development in history, as well as the State of Texas’ first PPP structured financing for a state college when legislation was first passed in Texas. Jon has worked with institutional, family office and private capital providers throughout his career on debt and
equity structures.</p>
                   </div>
                   <p className='email'>jonathan@thesolarcompany.com |</p>
             </div>
             <div className='profile'>
                   <h2 className='name'>Travis Wildeman</h2>
                   <h4 className='post'>Founder – Head of Sales & Client Relations</h4>
                   <div className='info'>
                    <p>ravis, originally from Harrisburg, Pennsylvania, has made Dallas his home since 2008. His journey to The Solar Company began in the competitive field of Commercial Real Estate Brokerage & Development, where he spent nearly two decades honing his skills. With expertise in underwriting real estate projects, Travis recognizes the advantages of solar energy from an owner's perspective. He holds himself and others to the highest standards of customer satisfaction, striving to build a culture within The Solar Company where every prospect feels valued. Travis is passionate about marketing, dedicating time both inside and outside the office to cultivate and maintain strong, enduring relationships with clients. Outside of work, Travis prioritizes spending quality time with his family, exploring new destinations through travel, staying active, and indulging in his love for golf. Despite his efforts on the course, he's yet to achieve a hole in one, but his persistence remains undeterred.</p>
                   </div>
                   <p className='email'>travis@thesolarcompany.com |</p>
             </div>
             <div className='profile'>
                   <h2 className='name'>Brian Wolf</h2>
                   <h4 className='post'>Chief Financial Officer</h4>
                   <div className='info'>
                    <p>Brian was born in Connecticut but has lived in the DFW area since 1997.  He joined The Solar Company as it’s CFO in 2023 after spending nearly 20 years in the Financial Services industry. He brings extensive experience directing and overseeing corporate finance activity and strategy to improve operational efficiency and value.  His financial expertise and CPA knowledge help him to shape the financial structure of The Solar Company, but also affords him the unique ability to communicate the ROI of a solar investment to clients.  Brian takes pride in his work and believes that The Solar Company will soon become the nationally recognized leader in the Solar Industry.  In his spare time Brian enjoys spending time with his wife Amy and their three kids; traveling, coaching his kids sports teams and golfing, not nearly as much as he would like.</p>
                   </div>
                   <p className='email'>brian@thesolarcompany.com |</p>
             </div>
             <div className='profile'>
                   <h2 className='name'>David West</h2>
                   <h4 className='post'>Chief Strategy Officer</h4>
                   <div className='info'>
                    <p>David West specializes in the strategic development of fast growth companies, experienced in working with start-ups to companies with over $300 million in annual revenue. With an extensive background in building management teams, driving organizational growth, commercializing new products and creating market value on multiple levels, Mr. West brings over 25 years of experience in strategic planning, brand development, leadership training, organizational design / systems implementation and multi-site operations. Particular areas of accomplishment include serving as COO for a renewable energy and utility management solutions company, CEO for a start-up boutique consulting firm (offices in 4 cities) that specialized in accelerating the growth of start-up and early-stage businesses, Executive VP roles for commercial construction companies that experienced aggressive revenue and internal organizational growth and Founder/CEO of an innovative consumer product, requiring hands-on execution of the patent process, product development and brand creation. A “builder” at heart, David has successfully architected the growth and development
of many businesses based on clear vision/values/mission objectives integration. In 1997, David began his career in corporate training working with Dale Carnegie and learned the value of developing human potential as a real asset within an organization. After creating his own training courses based on the real-time needs of his clients, Mr. West expanded his service offering to include strategic consulting, providing a more global influence to a company and its growth, and lastly executive coaching, developing the leadership potential of the management team to effectively implement the strategic plan and create sustained results for the future.</p>
                   </div>
                   <p className='email'>david@thesolarcompany.com |</p>
             </div>
             <div className='profile'>
                   <h2 className='name'>Danny de la Torre</h2>
                   <h4 className='post'>Director of Operations</h4>
                   <div className='info'>
                    <p>Danny de la Torre boasts an extensive professional background spanning over 16 years in the solar industry and 28 years in the HVAC industry. His illustrious career includes tenure at esteemed organizations within the energy conservation and solar sector, including prominent entities like Standard Renewable Energy, Circular Energy, and TAC Solar. Throughout his tenure, he has accumulated a wealth of experience and expertise, positioning him as a seasoned and respected authority in both industries.</p>
                   </div>
                   <p className='email'>danny@thesolarcompany.com |</p>
             </div>
             <div className='profile'>
                   <h2 className='name'>James (Jay) Koster II</h2>
                   <h4 className='post'>Chairman</h4>
                   <div className='info'>
                    <p>James L. Koster II (Jay) serves as Chairman of The Solar Company and is also Co-Founder and Co-Managing Partner of JLK Benton Holdings, LLC, a family-run private investment organization focused on scaling innovative, purpose-driven business enterprises. Prior to cofounding JLK Benton in 2023, Jay served as the Group Head, Capital Markets &amp; Investor Services for Jones Lang LaSalle, where he led more than 5,000 people in its Agency Leasing, Capital Markets and Property Management businesses in the Americas. Following the 2008 merger of JLL and The Staubach Company, Jay assumed the role of President, Americas Capital Markets, driving its revenue growth from $26 million (2009) to $1.1 billion (2019). Jay expanded the firm’s service offering to include GSE lending, loan servicing, loan sales and equity fund raising, and its sector focus on multi family, industrial, office, and retail brokerage and financing. In 2014, Mr. Koster assumed additional responsibilities for the Americas Property Management and Agency Leasing businesses, leading strategic and operational growth efforts that tripled the revenue contribution of those businesses to $650 million (2022). As part of these growth efforts, Jay was responsible for several of JLL’s most strategic corporate acquisitions including HFF ($2 billion), Oak Grove Capital ($300 million) and a joint venture with Sterling Bay in 2021. As a key innovation leader across JLL, Jay led a global Salesforce deployment across 2,000 employees, strategy development for the early exploration of AI/ML, business process redesign and automation across the Property Management business (spanning 1 billion square feet and $10 billion of financial transactions annually), and the integration of emerging PropTech across JLL’s operating businesses. Jay also oversaw the firm’s Investor Accounts Team, responsible for managing relationships with the world’s top real estate investors (client AUM exceeded $1.5 trillion), and as a founding member of its Global Capital Markets board, shared responsibility for the strategic direction, growth and client activities of JLL’s $2 billion global capital markets business. Mr. Koster joined The Staubach Company in 1999 to expand the firm’s Capital Markets services platform, and during his tenure focused on off-balance sheet financing transactions and workouts, earned the Most Valuable Player award in 2008 as the firm's top revenue producer and was responsible for the integration of the Capital Markets groups of JLL and The Staubach Company following the 2008 merger of the two firms. Jay began his real estate career in 1989 with Prudential Real Estate Investors, where he held various roles in investment management, real estate lending and development, and joined Gale &amp; Wentworth in 1997 as a Vice President to help direct the acquisition, financing, planning and leasing of premier office and industrial real estate development projects.

Mr. Koster holds a bachelor’s degree in business administration from the University of Texas at Austin.</p>
                   </div>
                   <p className='email'>jay@thesolarcompany.com |</p>
             </div>
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
<Footer logo={logo}/>
    </div>
  )
}

export default OurTeam