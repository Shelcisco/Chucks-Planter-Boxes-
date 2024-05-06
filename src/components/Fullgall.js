import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

//Photos/Videos
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
import P14 from "../assets/P14.png";
import P15 from "../assets/P15.png";
import P16 from "../assets/P16.png";
import P17 from "../assets/P17.png";
import P18 from "../assets/P18.png";
import P19 from "../assets/P19.png";
import P20 from "../assets/P20.png";
import P21 from "../assets/P21.png";
import P22 from "../assets/P22.png";
import P23 from "../assets/P23.png";
import P24 from "../assets/P24.png";
import P25 from "../assets/P25.png";
import Cork from "../assets/Cork.png";



const Fullgall = () => {
  // Define state variables
  const [galleryItems, setGalleryItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const maxIndex = sortedItems.length - 1;

  // Sample gallery data
  const sampleGallery = [
    { id: 22, type: "photo", url: P22},
    
    { id: 2, type: "photo", url: P2},
    { id: 8, type: "photo", url: P8},
    { id: 3, type: "photo", url: P3},
    { id: 4, type: "photo", url: P4},
    
    { id: 5, type: "photo", url: P5},
    { id: 17, type: "photo", url: P17},
    { id: 18, type: "photo", url: P18},
    { id: 6, type: "photo", url: P6},
    { id: 7, type: "photo", url: P7},
    
    
    { id: 9, type: "photo", url: P9},
    { id: 10, type: "photo", url: P10},
    { id: 11, type: "photo", url: P11},
    { id: 12, type: "photo", url: P12},
    
    { id: 13, type: "photo", url: P13},
    { id: 14, type: "photo", url: P14},
    { id: 15, type: "photo", url: P15},
    { id: 16, type: "photo", url: P16},
   
    
    { id: 19, type: "photo", url: P19},
    { id: 20, type: "photo", url: P20},
    { id: 21, type: "photo", url: P21},
    { id: 1, type: "photo", url: P1},
    { id: 23, type: "photo", url: P23},
    { id: 24, type: "photo", url: P24},
    { id: 25, type: "photo", url: P25},
    { id: 104, type: "video", url: Crown},
    // Add more items here
    { id: 103, type: "video", url: Flamingo},
    { id: 102, type: "video", url: Sasvid},
    { id: 101, type: "video", url: Parade},
    { id: 105, type: "video", url: Depth}
  ];

  // Load gallery items on component mount
  useEffect(() => {
    setGalleryItems(sampleGallery);
    setSortedItems(sampleGallery); // Initial sorting
  }, []);

 // Function to handle item click and enlargement
const handleItemClick = (item, index) => {
  setSelectedItem(sortedItems[index]); // Update selectedItem based on sortedItems and index
  setSelectedIndex(index);
};

// Function to handle clicking on the left arrow
const handleLeftArrowClick = () => {
  const currentIndex = sortedItems.findIndex((item) => item.id === selectedItem.id);
  const newIndex = currentIndex === 0 ? sortedItems.length - 1 : currentIndex - 1;
  setSelectedItem(sortedItems[newIndex]);
};

// Function to handle clicking on the right arrow
const handleRightArrowClick = () => {
  const currentIndex = sortedItems.findIndex((item) => item.id === selectedItem.id);
  const newIndex = currentIndex === sortedItems.length - 1 ? 0 : currentIndex + 1;
  setSelectedItem(sortedItems[newIndex]);
};



  
 // Function to sort items by type (photo or video)
 const handleSort = (type) => {
  const sorted = galleryItems.filter((item) => item.type === type);
  setSortedItems(sorted);
  setSelectedItem(null); // Close modal when sorting
};

  // Function to return to original view
  const handleReturn = () => {
    setSortedItems(galleryItems);
    setSelectedItem(null); // Close modal when returning
  };
   // Function to close the modal
   const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="fg">
      <Social />
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
        {sortedItems.map((item, index) => (
          <div key={item.id} className="gallery-item" onClick={() => handleItemClick(item, index)}>
            {/* Render each item */}
            {item.type === "photo" ? <img src={item.url} alt={item.id} /> : <video src={item.url} controls />}
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            {/* Left arrow */}
            <button className="arrow left" onClick={handleLeftArrowClick}>
              &lt;
            </button>
            {/* Selected item */}
            {selectedItem.type === "photo" ? (
              <img src={selectedItem.url} alt={selectedItem.id} />
            ) : (
              <video src={selectedItem.url} controls />
            )}
            {/* Right arrow */}
            <button className="arrow right" onClick={handleRightArrowClick}>
              &gt;
            </button>
            {/* Close button */}
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Fullgall;


