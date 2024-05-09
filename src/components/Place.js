//Place.js
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Hum from "../assets/46.png";


export default function Place(){
    return(
        <div className="order">
            
            <br></br>
            <div className="content-container">
            <div className="bird">
                    <img src={Hum} alt="Bird" />
                </div>
                <div className="text-box">
                <h1 id='pt'>Place Your Order</h1>
                    <p>We're currently offering our standard boxes, like our Frog box here, that measure approximately 12”x12”x12” deep</p>
                    <p>Our standard box is one for $30.00 or two for $25.00 each</p>
                    <p>To place your order please pick your preferred stencil and fill out our contact form. In your message please include:</p>
                    <div className="PO2">
                        <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
                            <li>Your Email</li>
                            <li>Your Name</li>
                            <li>The number of the Stencil you would like</li>
                            <li>The number of boxes you would like</li>
                            <li>Any questions or anything special we should know!</li>
                        </ul>
                    </div>
                    <p>If you're interested in any of our other planter box styles please include that in your message and we can discuss availability for special orders!</p>
                </div>
               
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ready">Ready to get started? <ScrollLink to="stencil" smooth={true} duration={500} style={{ color: 'blue' }}>
                Click here to pick your Stencil!
            </ScrollLink> </div>
        </div>
    );
}
