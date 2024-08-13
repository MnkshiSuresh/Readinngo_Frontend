import React from 'react';
import './Contact.css';
import Navbar from './Navbar.jsx';

const Contact = () => { 
  return (
    <div className='cnct'>
      <Navbar/>
      <div className="cnct-container">
        <div className="cnct-content">
          <h1 className="cnct-heading">Contact Us</h1>
          <p className="cnct-description">
           readingo@gmail.com<br></br>
           1234567890
        </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
