
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";         
import SymptomChecker from "./components/SymptomChecker";
import About  from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checker" element={<SymptomChecker />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      
    
    </Routes>
  );
}
