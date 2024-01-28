import React, { useEffect, useState } from "react";
// import "../styles/Gallery.css"; // Create this CSS file for styling
// import imageCompression from "rowser-image-compression";


import B1 from "../assets/1.png"
import B2 from "../assets/2.png"
import B3 from "../assets/3.png"
import B4 from "../assets/4.png"
import B5 from "../assets/5.png"
import B6 from "../assets/6.png"
import B7 from "../assets/7.png"
import B8 from "../assets/8.png"
import B9 from "../assets/9.png"
import B10 from "../assets/10.png"
import B11 from "../assets/11.png"
import B12 from "../assets/12.png"
import B13 from "../assets/13.png"
import B14 from "../assets/14.png"
import B15 from "../assets/15.png"
import B16 from "../assets/16.png"
import B17 from "../assets/17.png"
import B18 from "../assets/18.png"
import B19 from "../assets/19.png"
 import B20 from "../assets/20.png"
import B21 from "../assets/21.png"
import B22 from "../assets/22.png"
import B23 from "../assets/23.png"
import B24 from "../assets/24.png"
import B25 from "../assets/25.png"
 import B26 from "../assets/26.png"
import B27 from "../assets/27.png"
import B28 from "../assets/28.png"
import B29 from "../assets/29.png"
 import B30 from "../assets/30.png"
 import B31 from "../assets/31.png"
 import B32 from "../assets/32.png"
 import B33 from "../assets/33.png"
 import B34 from "../assets/34.png"
import B35 from "../assets/35.png"
 import B36 from "../assets/36.png"
  import B37 from "../assets/37.png"
  import B38 from "../assets/38.png"
import B39 from "../assets/39.png"
import B40 from "../assets/40.png"
 import B41 from "../assets/41.png"
 import B42 from "../assets/42.png"
 import B43 from "../assets/43.png"
 import B44 from "../assets/44.png"
 import B45 from "../assets/45.png"
 import B46 from "../assets/46.png"
  import B47 from "../assets/47.png"





function Gallery() {
  // const [compressedImages, setCompressedImages] = useState([]);
  

  // const images = useMemo(
  //   () => [FIRST,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48],
  //   []

    const announcements = [
      {
        text: "1",
        image: B1,
      },
      {
        text: "2",
        image: B2,
      },
      {
        text: "3",
        image: B3,
      },
      {
        text: "4",
        image: B4,
      },
      {
        text: "5",
        image: B5,
      },
       {
        text: "6",
        image: B6,
       },
     {
         text: "7",
         image: B7,
       },
       {
       text: "8",
        image: B8,
       },
      {
         text: "9",
        image: B9,
      },
      {
         text: "10",
         image: B10,
       },
       {
        text: "11",
        image: B11,
       },
       {
         text: "12",
         image: B12,
       },
       {
         text: "13",
         image: B13,
       },
       {
         text: "14",
         image: B14,
       },
       {
         text: "15",
         image: B15,
       },
       {
         text: "16",
        image: B16,
      },
     {
        text: "17",
         image: B17,
       },
       {
        text: "18",
       image: B18,
       },
       {
       text: "19",
      image: B19,
       },
       {
         text: "20",
         image: B20,
       },
       {
         text: "21",
         image: B21,
       },
       {
         text: "22",
         image: B22,
       },
       {
         text: "23",
         image: B23,
       },
       {
         text: "24",
         image: B24,
       },
       {
         text: "25",
         image: B25,
       },
       {
         text: "26",
         image: B26,
       },
       {
         text: "27",
         image: B27,
       },
       {
         text: "28",
         image: B28,
       },
       {
         text: "29",
         image: B29,
       },
       {
         text: "30",
         image: B30,
       },
       {
         text: "31",
         image: B31,
       },
       {
         text: "32",
         image: B32,
       },

       {
        text: "33",
        image: B33,
      },
      {
        text: "34",
        image: B34,
      },
      {
        text: "35",
        image: B35,
      },
      {
        text: "36",
        image: B36,
      },
      {
        text: "37",
        image: B37,
      },
      {
        text: "38",
        image: B38,
      },
      {
        text: "39",
        image: B39,
      },
      {
        text: "40",
        image: B40,
      },
      {
        text: "41",
        image: B41,
      },
      {
        text: "42",
        image: B42,
      },
      {
        text: "43",
        image: B43,
      },
      {
        text: "44",
        image: B44,
      },
      {
        text: "45",
        image: B45,
      },
      {
        text: "46",
        image: B46,
      },
      {
        text: "47",
        image: B47,
      },


      // Add more ojects as needed
    ];
  
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  
    const goToNextAnnouncement = () => {
      setCurrentAnnouncementIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrevAnnouncement = () => {
      setCurrentAnnouncementIndex((prevIndex) =>
        prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(goToNextAnnouncement, 3000); // Change slide every 3 seconds (adjust as needed)
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  


  return (
 <div clasNAme="">
  <div className="Announce">
<p>Announcements</p>
<div className="slideshow-container">
        <div className="slideshow-ox">
          <div className="slideshow">
            <div className="announcement">
              <p>{announcements[currentAnnouncementIndex].text}</p>
              <img
                src={announcements[currentAnnouncementIndex].image}
                alt="announcement_image"
              />
            </div>
          </div>
          <utton className="arrow left" onClick={goToPrevAnnouncement}>
            &#10094;
          </utton>
          <utton className="arrow right" onClick={goToNextAnnouncement}>
            &#10095;
          </utton>
        </div>
 </div>
 </div></div>
  );
};

export default Gallery;

