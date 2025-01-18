// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavComponent from "./components/NavComponent";
import SolarFieldInstallations from "./components/SolarFieldInstallations";
import SolarPanelsCarport from "./SolarPanelsCarport";
import SolarPanelsWarehouse from "./SolarPanelsWarehouse";
import SolarPanelApartments from "./components/SolarPanelApartments";
import TurnkeyProcess from "./components/TurnkeyProcess";
import Home from "./components/Home";




const App = () => {
  return (
    <div>
      <NavComponent />
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
      </Routes>
    </div>
  );
};

export default App;
