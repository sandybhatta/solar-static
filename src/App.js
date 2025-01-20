// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavComponent from "./components/NavComponent";
import Home from "./components/Home";


import SolarPanelApartments from "./ComponentA/SolarPanelApartments";
import SolarFieldInstallations from "./ComponentA/SolarFieldInstallations";
import SolarPanelsCarport from "./ComponentA/SolarPanelsCarport";
import SolarPanelsWarehouse from "./ComponentA/SolarPanelsWarehouse";
import TurnkeyProcess from "./ComponentsB/TurnkeyProcess";
import ScrollToTop from "./ScrollToTop";
import OurStory from "./ComponentsC/OurStory";
import OurTeam from "./ComponentsC/OurTeam";
import Faq from "./ComponentsC/Faq";
import Warranty from "./ComponentsC/Warranty";
import ContactUs from "./ContactUs";





const App = () => {
  return (
    <div>
      <NavComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route
          path="/commercial-solar-systems/solar-panels-apartments/"
          element={<SolarPanelApartments />}
        />
        <Route
          path="/commercial-solar-systems/solar-field-installations/"
          element={<SolarFieldInstallations />}
        />
        <Route
          path="/commercial-solar-systems/solar-panels-carport/"
          element={<SolarPanelsCarport />}
        />
        <Route
          path="/commercial-solar-systems/solar-panels-warehouse/"
          element={<SolarPanelsWarehouse />}
        />
        <Route
          path="/commercial-solar-projects/process/"
          element={<TurnkeyProcess />}
        />
        <Route
          path="/about/our-story"
          element={<OurStory />}
        />
        <Route
          path="/about/Our-Team"
          element={<OurTeam />}
        />
        <Route
          path="/about/FAQ"
          element={<Faq />}
        />
        <Route
          path="/about/warranty"
          element={<Warranty />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />
      </Routes>
    </div>
  );
};

export default App;
