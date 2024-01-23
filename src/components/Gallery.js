import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import FIRST from "../assets/FIRST.png";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";

import B5 from "../assets/B5.png";

// ... (import all other images)

function Gallery() {
    return (
      <div className="Gal">
      
<div className="container">

  <div className="mySlides">
    <div className="numbertext">1 / 6</div>
    <img src={FIRST} width={100}></img>
  </div>

  <div className="mySlides">
    <div className="numbertext">2 / 6</div>
      <img src="img_5terre_wide.jpg" style="width:100%">
  </div>

  <div className="mySlides">
    <div className="numbertext">3 / 6</div>
      <img src="img_mountains_wide.jpg" style="width:100%">
  </div>

  <div className="mySlides">
    <div className="numbertext">4 / 6</div>
      <img src="img_lights_wide.jpg" style="width:100%">
  </div>

  <div className="mySlides">
    <div className="numbertext">5 / 6</div>
      <img src="img_nature_wide.jpg" style="width:100%">
  </div>

  <div className="mySlides">
    <div className="numbertext">6 / 6</div>
      <img src="img_snow_wide.jpg" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a className="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div className="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div className="row">
    <div className="column">
      <img className="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
    </div>
    <div className="column">
      <img className="demo cursor" src="img_5terre.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
    </div>
    <div className="column">
      <img className="demo cursor" src="img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
    </div>
    <div className="column">
      <img className="demo cursor" src="img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">
    </div>
    <div className="column">
      <img className="demo cursor" src="img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise">
    </div>
    <div className="column">
      <img className="demo cursor" src="img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains">
    </div>
  </div>
</div> 
      </div>
    );
  }
  
  export default Gallery;

