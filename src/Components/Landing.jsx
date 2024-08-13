import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Navbar from './Navbar';
import booksImage from './books.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

function Landing() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [booksImage, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleExploreClick = () => {
    navigate('/login');
  };

  const landingStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div>
      <Navbar />
      <div className="Landing-landing" style={landingStyle}>
      <div className="sentence-landing">
      Discover, <span className="connect">Connect</span>, and Share Stories
    </div>
    <div className="slogan-landing">
      Your <span className="community">Community Library</span>
    </div>
    
        <button className="exploreButton-landing" onClick={handleExploreClick}>Explore</button>
        <div id="about">
          {/* About section content */}
        </div>
        <div id="contact">
          {/* Contact section content */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
