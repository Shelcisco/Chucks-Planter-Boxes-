import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="topnav">
      <ScrollLink to="home" smooth={true} duration={500}>
        Home
      </ScrollLink>
      <ScrollLink to="gallery" smooth={true} duration={500}>
        Gallery
      </ScrollLink>
      <ScrollLink to="place" smooth={true} duration={500} offset={75}>
        Orders
      </ScrollLink>
      <ScrollLink to="stencil" smooth={true} duration={500}>
        Stencils
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500}>
        Contact
      </ScrollLink>
    </div>
  );
}

export default Navbar;
