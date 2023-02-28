import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Vans from "./components/Vans";
import Footer from "./components/Footer";
import LogoVan from './assets/logog.png'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="home_link" to="/">{<img src={LogoVan} />}</Link>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
