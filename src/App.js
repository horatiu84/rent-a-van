import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Vans from "./components/Vans/Vans";
import VanDescription from "./components/VanDescription/VanDescription";
import Layout from "./components/Layout/Layout";
import { Routes, Route} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDescription />} />
      </Route>
    </Routes>
  );
};

export default App;
