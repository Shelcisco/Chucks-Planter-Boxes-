import React from "react";
import Navbar from "./Nav";
import Logo from "../assets/Logo.png";
import Footer from "./Footer";
import Gallery from './Gallery';
import Contact from "./Contact";
import Social from "./Social";
import Place from "./Place";


function Home() {
  return (
  
    <div className="hp">

<Navbar></Navbar>
<Social></Social>
<div id="home" className="home">
<img src={Logo} width={500} height={500} alt="Logo"></img>
{/* <Footer></Footer> */}
</div>

<div id="place" className="place">
  <Place></Place>
</div>

<div id="gallery" className="gallery">

<Gallery></Gallery>
</div>



<div id="contact" className="Contact">
<Contact></Contact>
</div>


    </div>
 
  );
}

export default Home;