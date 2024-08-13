import React, { useState } from 'react';
import './Shareviews.css';
import Navbar2 from './Navbar2.jsx';
import { supabase } from './client'; // Import the Supabase client

const Shareviews = () => {
  const [opinion, setOpinion] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Insert the data into the 'community' table
      const { data, error } = await supabase.from('community').insert([{ message: opinion, imageurl: imageUrl }]);
      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }
      console.log('Data inserted successfully:', data);
      // Reset the form fields after successful submission
      setOpinion('');
      setImageUrl('');
      // Navigate back to the Community page
      // You can use the history object or react-router-dom's Link component for navigation
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };

  return (
    <div className='shareviews'>
      <Navbar2/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="opinion">Share your experience and opinions with the reading community. They are invaluable contributions.</label>
        <textarea
          id="opinion"
          value={opinion}
          onChange={handleOpinionChange}
          placeholder="Enter your thoughts here..."
          rows="8"
          cols="50"
        />
        <label htmlFor="imageUrl">Enter the image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="https://example.com/image.jpg"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Shareviews;
