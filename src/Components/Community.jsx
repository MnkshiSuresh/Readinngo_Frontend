import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Community.css';
import Navbar2 from './Navbar2.jsx';
import { supabase } from './client'; // Import the Supabase client

const Community = () => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const { data, error } = await supabase.from('community').select('*');
        if (error) {
          console.error('Error fetching community data:', error.message);
          return;
        }
        setCommunityData(data || []);
      } catch (error) {
        console.error('Error fetching community data:', error.message);
      }
    };
    fetchCommunityData();
  }, []);

  return (
    <div className='bookswap-comm'>
      <Navbar2 />
      
      {/* Render rectangle boxes for each row in the community table */}
      {communityData.map((item, index) => (
        <div className="rectangle-box-comm" key={index}>
          <div className="text-comm">
            <h2>{item.message}</h2>
          </div>
          <div className="image-comm">
            <img src={item.imageurl} alt="Community Image" />
          </div>
        </div>
      ))}

      {/* Bar at the bottom */}
      <Link to="/shareviews" className="bottom-bar-button-comm">Share your views</Link>

      {/* Button at the top right corner */}
      <Link to="/bookswap" className="top-right-button-comm">📚 Swap</Link>
    </div>
  );
}

export default Community;
