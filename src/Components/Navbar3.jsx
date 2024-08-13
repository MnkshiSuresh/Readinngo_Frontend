
import './Navbar3.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar3 = () => {
  return (
    <div className='nav-navbar3'>
      <div className='nav-text-navbar3'>
        <Link to="/main">Readinngo</Link> {/* Link to the Main page */}
      </div>
      <div className='nav-links-navbar3'>
        <Link to="/main">Home</Link> {/* Link to the Main page */}
        <Link to="/booked"> My Books</Link> 
        <Link to="/about2">About</Link> {/* Link to the About page */}
        <Link to="/contact2">Contact</Link> {/* Link to the Contact page */}
      </div>
    </div>
  );
}

export default Navbar3;
