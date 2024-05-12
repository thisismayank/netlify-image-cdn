import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ImageCarousel from "./Components/imagecarousel.component";
import Navbar from "./Components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ImageCarousel />
      </div>
    </Router>
  );
}

export default App;
