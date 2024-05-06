import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import Parade from "../assets/Parade.mp4";
import Flamingo from "../assets/Flamingo.mp4";
import Crown from "../assets/Crown.mp4";

export default function Gallery(){

   const location = useLocation();
   const pathname = location.pathname;

    return(
      <div className="shortgal">
         <div className= "gtitle">
         <h1>Gallery</h1>
         <Link to="/fullgall" className={pathname === "/fullgall" ? "active" : ""}>
               Click here to see the full Gallery
            </Link>
            </div>
         <div className="sgvid">
         <video className="video-item" controls>
               <source src={Flamingo} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <video className="video-item" controls>
               <source src={Parade} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <video className="video-item" controls>
               <source src={Crown} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="fgl">
           </div>
         <div className="po">
            Ready to get started? <ScrollLink to="place" smooth={true} duration={500} style={{ color: 'blue' }}>
               Click here to place your order!
            </ScrollLink>
         </div>
      </div>
    )
}
