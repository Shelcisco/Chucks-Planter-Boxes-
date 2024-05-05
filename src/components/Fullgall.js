import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Parade from "../assets/Parade.mp4";
import Sasvid from "../assets/Sasvid.mp4";
import Depth from "../assets/12Deep.mp4";
import Crown from "../assets/Crown.mp4";
import Flamingo from "../assets/Flamingo.mp4";
import P1 from "../assets/1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.png";
import P5 from "../assets/P5.png";
import P6 from "../assets/P6.png";
import P7 from "../assets/P7.png";
import P8 from "../assets/P8.png";
import P9 from "../assets/P9.png";
import P10 from "../assets/P10.png";
import P11 from "../assets/P11.png";
import P12 from "../assets/P12.png";
import P13 from "../assets/P13.png";



const Fullgall = () => {
  // Define state variables
  const [galleryItems, setGalleryItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample gallery data
  const sampleGallery = [
    { id: 1, type: "photo", url: P1, tier: 1 },
    { id: 2, type: "photo", url: P2, tier: 1 },
    { id: 3, type: "photo", url: P3, tier: 1 },
    { id: 4, type: "photo", url: P4, tier: 1 },
    { id: 5, type: "photo", url: P5, tier: 1 },
    { id: 6, type: "photo", url: P6, tier: 1 },
    { id: 7, type: "photo", url: P7, tier: 1 },
    { id: 8, type: "photo", url: P8, tier: 1 },
    { id: 9, type: "photo", url: P9, tier: 1 },
    { id: 10, type: "photo", url: P10, tier: 1 },
    { id: 11, type: "photo", url: P11, tier: 1 },
    { id: 12, type: "photo", url: P12, tier: 1 },
    { id: 13, type: "photo", url: P13, tier: 1 },
    // Add more items here
    { id: 101, type: "video", url: Parade, tier: 2 },
    { id: 102, type: "video", url: Sasvid, tier: 2 },
    { id: 103, type: "video", url: Flamingo, tier: 2 },
    { id: 104, type: "video", url: Crown, tier: 2 },
    { id: 105, type: "video", url: Depth, tier: 2 }
  ];

  // Load gallery items on component mount
  useEffect(() => {
    setGalleryItems(sampleGallery);
    setSortedItems(sampleGallery); // Initial sorting
  }, []);

  // Function to handle item click and enlargement
  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Logic to enlarge item
  };

  // Function to sort items by tier or video
  const handleSort = (type) => {
    let sorted = [];
    if (type === "video") {
      sorted = galleryItems.filter((item) => item.type === "video");
    } else {
      sorted = galleryItems.filter((item) => item.type === "photo");
    }
    setSortedItems(sorted);
  };

  // Function to return to original view
  const handleReturn = () => {
    setSortedItems(galleryItems);
  };

  return (
    <div className="fg">
      <div className="topnav">
        <Link to="/home">Home</Link>
      </div>
      <h1>Photo and Video Gallery</h1>
      <div>
        {/* Sorting buttons */}
        <button onClick={() => handleSort("photo")}>Photos</button>
        <button onClick={() => handleSort("video")}>Video</button>
        <button onClick={handleReturn}>See All</button>
      </div>
      <div className="gallery grid">
        {/* Render gallery items */}
        {sortedItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => handleItemClick(item)}>
            {/* Render each item */}
            {item.type === "photo" ? (
              <img src={item.url} alt={item.id} />
            ) : (
              <video src={item.url} controls />
            )}
          </div>
        ))}
      </div>
      {/* Modal or enlarged view logic here */}
    </div>
  );
};

export default Fullgall;


