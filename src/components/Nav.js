import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="topnav">
      <ScrollLink to="home" smooth={true} duration={500}>
        Home
      </ScrollLink>
      <ScrollLink to="place" smooth={true} duration={500}>
        Place Your Order
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500}>
        Contact
      </ScrollLink>
    </div>
  );
}

export default Navbar;
