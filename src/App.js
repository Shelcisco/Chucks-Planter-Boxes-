import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home';
import Stencil from './components/Stencil';
import Contact from './components/Contact';
import "./index.css";
import "./App.css";
import Social from './components/Social';
import Place from './components/Place';
import Gallery from './components/Gallery';
import Fullgall from './components/Fullgall';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop /> {/* Place ScrollToTop component outside Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stencil" element={<Stencil />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/place" element={<Place />} />
          <Route path="/fullgall" element={<Fullgall />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



