// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Gallery from './components/Gallery'; // Import the new Gallery component
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Add this line for the gallery */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

