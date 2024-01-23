import React, { useEffect, useState, useMemo } from "react";
import "../styles/Gallery.css"; // Create this CSS file for styling
import imageCompression from "browser-image-compression";

import FIRST from "../assets/FIRST.png";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";
import B5 from "../assets/B5.png";
import B6 from "../assets/B6.png";
import B7 from "../assets/B7.png";
import B8 from "../assets/B8.png";
import B9 from "../assets/B9.png";
import B10 from "../assets/B10.png";
import B11 from "../assets/B11.png";
import B12 from "../assets/B12.png";
import B13 from "../assets/B13.png";
import B14 from "../assets/B14.png";
import B15 from "../assets/B15.png";
import B16 from "../assets/B16.png";
import B18 from "../assets/B18.png";
import B19 from "../assets/B19.png";
import B20 from "../assets/B20.png";
import B21 from "../assets/B21.png";
import B22 from "../assets/B22.png";
import B23 from "../assets/B23.png";
import B24 from "../assets/B24.png";
import B25 from "../assets/B25.png";
import B26 from "../assets/B26.png";
import B27 from "../assets/B27.png";
import B28 from "../assets/B28.png";
import B29 from "../assets/B29.png";
import B30 from "../assets/B30.png";
import B31 from "../assets/B31.png";
import B32 from "../assets/B32.png";
import B33 from "../assets/B33.png";
import B35 from "../assets/B35.png";
import B36 from "../assets/B36.png";
import B37 from "../assets/B37.png";
import B38 from "../assets/B38.png";
import B39 from "../assets/B39.png";
import B40 from "../assets/B40.png";
import B41 from "../assets/B41.png";
import B42 from "../assets/B42.png";
import B43 from "../assets/B43.png";
import B44 from "../assets/B44.png";
import B45 from "../assets/B45.png";
import B46 from "../assets/B46.png";
import B47 from "../assets/B47.png";
import B48 from "../assets/B48.png";


const compressImage = async (image) => {
  try {
    const compressedImage = await imageCompression(image, {
      quality: 0.6, // Adjust the quality as needed (0 to 1)
      maxWidth: 800, // Adjust the maximum width as needed
      maxHeight: 800, // Adjust the maximum height as needed
    });
    return compressedImage;
  } catch (error) {
    console.error("Image compression error:", error);
    return image; // Return the original image if compression fails
  }
};

const Gallery = () => {
  const [compressedImages, setCompressedImages] = useState([]);
  

  const images = useMemo(
    () => [FIRST,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B28,B29,B30,B31,B32,B33,B35,B36,B37,B38,B39,B40,B41,B42,B43,B44,B45,B46,B47,B48],
    []
    ); // Import your images here

  useEffect(() => {
    const compressImages = async () => {
      const compressed = await Promise.all(images.map(compressImage));
      setCompressedImages(compressed);
    };

    compressImages();
  }, [images]);


  return (
    <div className="gallery-container">
      {compressedImages.map((compressedImage, index) => (
        <div key={index} className="image-item">
          <img src={compressedImage} alt={`Design ${index + 1}`} />
          <p>{`Design ${index + 1}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

