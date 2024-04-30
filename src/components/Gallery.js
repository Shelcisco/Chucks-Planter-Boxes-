import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";


export default function Gallery(){

   const location = useLocation();
   const pathname = location.pathname;

    return(
<div className = "shortgal">
<div className="fgl">
<Link to="/fullgall" className={pathname === "/fullgall" ? "active" : ""}>
Click here to see the full Gallery
</Link>
  </div>
<div className="po">Ready to get started? <ScrollLink to="place" smooth={true} duration={500} style={{ color: 'blue' }}>
   Click here to place your order!
</ScrollLink> </div>

   </div>



    )
}