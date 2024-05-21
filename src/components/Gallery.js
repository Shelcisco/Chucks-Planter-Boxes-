import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import G1 from "../assets/P22.png";
import G2 from "../assets/44.png";
import G3 from "../assets/P28.png";

export default function Gallery(){

   const location = useLocation();
   const pathname = location.pathname;

    return(
      <div className="shortgal">
         <div className= "gtitle">
            <h1>Gallery</h1>
            <div className= "fgtext">
            <Link to="/fullgall" className={pathname === "/fullgall" ? "active" : ""}>
               Click here to see the full Gallery
            </Link>
            </div>
          </div>
          <br></br>
          <br></br>
         <div className="sgvid-grid">
         <img src={G1} alt="GP" id="GP" />
<img src={G2} alt="GP" id="GP" className="center-image" />
<img src={G3} alt="GP" id="GP" />
         </div>
         <br></br>
          <br></br>
 <div className="po">
            Ready to get started? <ScrollLink to="place" smooth={true} duration={500} style={{ color: 'blue' }}>
               Click here to place your order!
            </ScrollLink>
         </div>
      </div>
    )
}

