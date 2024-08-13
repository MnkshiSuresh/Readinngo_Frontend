import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Navbar3 from './Components/Navbar3';
import Landing from './Components/Landing';
import About from './Components/About'; 
import Contact from './Components/Contact'; 
import Login from './Components/Login'; 
import Signup from './Components/Signup'; 
import Details from './Components/Details';
import Main from './Components/Main';
import About2 from './Components/About2'; 
import Contact2 from './Components/Contact2';
import Library from './Components/Library';
import Community from './Components/Community';
import Booked from './Components/Booked';
import Demoo from './Components/Demoo';
import Bookdetailslibrary from './Components/Bookdetailslibrary';
import Bookswap from './Components/Bookswap';
import Shareviews from './Components/Shareviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} /> {/* Ensure correct component */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about2" element={<About2 />} /> 
        <Route path="/contact2" element={<Contact2 />} /> 
        <Route path="/library" element={<Library />} />
        <Route path="/bookswap" element={<Bookswap />} />
        <Route path="/community" element={<Community />} /> 
        <Route path="/Booked" element={<Booked />} />
        <Route path="/Demoo" element={<Demoo />} />
        <Route path="/Navbar3" element={<Navbar3 />} />
        <Route path="/bookdetailslibrary" element={<Bookdetailslibrary />} />
        <Route path="/shareviews" element={<Shareviews />} />
      </Routes>
    </Router>
  );
}

export default App;


