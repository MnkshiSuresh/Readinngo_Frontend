import React, { useEffect, useState } from 'react';
import './Library.css';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2.jsx';
import { supabase } from './client'; // Import the Supabase client

const Library = () => {
  const [fetchError, setFetchError] = useState(null);
  const [library, setBooks] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      let query = supabase.from('library');
      
      if (selectedGenre) {
        query = query.select('*').eq('genre', selectedGenre);
      } else {
        query = query.select('*');
      }

      const { data, error } = await query;

      if (error) {
        setFetchError('Could not fetch');
        setBooks(null);
        console.log(error);
      }
      if (data) {
        setBooks(data);
        setFetchError(null);
      }
    }
    fetchBooks();
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <Navbar2 />
      
    </div>
  );
}

export default Library;
