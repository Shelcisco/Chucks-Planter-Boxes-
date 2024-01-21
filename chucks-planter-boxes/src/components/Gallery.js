import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import FIRST from "../assets/FIRST.png";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";

import B5 from "../assets/B5.png";

// ... (import all other images)

const Gallery = () => {
  const images = [FIRST, B1, B2, B3, B4, B5 /* ... add all other images */];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className={`image-item ${index === currentImageIndex ? "active" : ""}`}>
          <img src={image} alt={`Design ${index + 1}`} />
          <p>{`Design ${index + 1}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

