import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Prestations from "./components/Prestations";
import VoituresAVendre from "./components/VehicleSection";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <VoituresAVendre />
        <Routes>
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/voitures" element={<VoituresAVendre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<div></div>} />
        </Routes>
        <Prestations />
      </div>
    </Router>
  );
};

export default App;
