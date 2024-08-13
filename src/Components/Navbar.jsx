// Navbar.jsx
import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div className='nav-navbar'>
      <div className='nav-text-navbar'>
        <Link to="/">Readinngo</Link> {/* Link to the Landing page */}
      </div>
      <div className='nav-links-navbar'>
        <Link to="/">Home</Link> {/* Link to the Landing page */}
        <Link to="/about">About</Link> {/* Link to the About page */}
        <Link to="/contact">Contact</Link> {/* Link to the Contact page */}
      </div>
    </div>
  );
}

export default Navbar;

