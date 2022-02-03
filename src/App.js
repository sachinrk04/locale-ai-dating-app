import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Revenue from "./pages/Revenue/Revenue";

import "./App.css";

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/revenue" element={<Revenue />} />
      </Routes>
    </div>
  );
}

export default App;
