import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Social = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
    
  );
};

export default Social;
