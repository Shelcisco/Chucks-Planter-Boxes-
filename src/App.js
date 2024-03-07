// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Gallery from './components/Gallery'; // Import the new Gallery component
import Contact from './components/Contact';
import "./index.css";
import "./App.css";
import Social from './components/Social';
import Place from './components/Place';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/place" element={<Place />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this line for the gallery */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

