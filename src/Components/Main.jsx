import React, { useState, useEffect } from 'react';
import './Main.css';
import Navbar2 from './Navbar2.jsx';
import { Link } from 'react-router-dom'; 
import { supabase } from './client'; // Import Supabase client

const Main = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = supabase.auth.user();

        if (user) {
          setUserName(user.user_metadata.full_name);
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="main"> 
      <h1 className="title">Welcome to <span className="readingo">Readinngo</span>, hope you'll find it <span className="interesting">interesting</span>..</h1>
      <div className="user-info">
        Welcome, {userName}
      </div>
      <Navbar2 />
      <div className="button-container-main">
        <div className="button-wrapper-main">
          <Link to="/demoo"> 
            <button className="library-button-main">Library</button>
          </Link>
          <p className="button-description-main">Explore our vast collection of books<br></br> and borrow your favorites.</p>
        </div>
        <div className="button-wrapper-main">
          <Link to="/community"> 
            <button className="community-button-main">Community</button>
          </Link>
          <p className="button-description-main">Connect with fellow book lovers, share your<br></br> thoughts, and participate in book swaps.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
