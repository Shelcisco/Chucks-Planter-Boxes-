import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Parade from "../assets/Parade.mp4";
import Sasvid from "../assets/Sasvid.mp4";
import P1 from "../assets/1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.png";


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
    // Add more items here
    { id: 101, type: "video", url: Parade, tier: 2 },
    { id: 102, type: "video", url: Sasvid, tier: 2 }
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


