import React from "react"; 
import FB from "../assets/FB.png";
import Insta from "../assets/Insta.png";
import Tiktok from "../assets/Tiktok.png";
import Email from "../assets/email.png";




export default function Footer(){
    return(
<div className = "footer">
        <a href="https://www.facebook.com/ChucksPlanterBoxes" target="_blank" rel="noreferrer">
          <img src={FB} width={40} height={40} alt="Fb"></img>
        </a>
        <a href="https://github.com/Shelcisco" target="_blank" rel="noreferrer">
          <img src={Insta} width={40} height={40} alt="Inst"></img>
        </a>
        <a href="https://github.com/Shelcisco" target="_blank" rel="noreferrer">
          <img src={Tiktok} width={40} height={40} alt="Tik"></img>
        </a>
        <a href="https://github.com/Shelcisco" target="_blank" rel="noreferrer">
          <img src={Email} width={40} height={40} alt="Em"></img>
        </a>
   </div>



    )
}

