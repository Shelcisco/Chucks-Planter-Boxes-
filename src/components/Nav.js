import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="topnav">
      <ScrollLink to="home" smooth={true} duration={500}>
        Home
      </ScrollLink>
      <ScrollLink to="gallery" smooth={true} duration={500}>
        Stencils
      </ScrollLink>
      <ScrollLink to="mtf" smooth={true} duration={500}>
        Meet the Founder
      </ScrollLink>
    </div>
  );
}

export default Navbar;
