
import './Navbar2.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar2 = () => {
  return (
    <div className='nav-navbar'>
      <div className='nav-text-navbar'>
        <Link to="/main">Readinngo</Link> {/* Link to the Main page */}
      </div>
      <div className='nav-links-navbar'>
        <Link to="/main">Home</Link> {/* Link to the Main page */}
        <Link to="/about2">About</Link> {/* Link to the About page */}
        <Link to="/contact2">Contact</Link> {/* Link to the Contact page */}
      </div>
    </div>
  );
}

export default Navbar2;
