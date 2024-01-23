import React from "react";
import Navbar from "./Nav";
import Logo from "../assets/Logo.png";
import Footer from "./Footer";
import Gallery from './Gallery';


function Home() {
  return (
  
    <div className="hp">

<Navbar></Navbar>
<div id="home" className="home">
<img src={Logo} width={500} height={500} alt="Logo"></img>
<Footer></Footer>
</div>

<div id="gallery" className="gallery">
<h1>Choose your Stencil</h1>
<Gallery></Gallery>
</div>


<div id="contact" className="Contact">

</div>

<div className="one">
<h1>Place Holder</h1>
</div>

<div className="two">
<h1>Place Holder</h1>

</div>

<div className="three">
<h1>Place Holder</h1>

</div>

    </div>
 
  );
}

export default Home;