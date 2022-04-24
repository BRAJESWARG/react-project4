import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Student from "./components/Students";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar.jsx";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
