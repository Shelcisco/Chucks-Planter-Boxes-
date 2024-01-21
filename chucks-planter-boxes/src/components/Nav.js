import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="topnav">
      <ScrollLink to="home" smooth={true} duration={500}>
        Home
      </ScrollLink>
      <ScrollLink to="wwa" smooth={true} duration={500}>
        Who We Are
      </ScrollLink>
      <ScrollLink to="mtf" smooth={true} duration={500}>
        Meet the Founder
      </ScrollLink>
    </div>
  );
}

export default Navbar;
