import React, { useEffect, useState } from 'react';
import './Demoo.css';
import { Link } from 'react-router-dom';
import Navbar3 from './Navbar3'; // Import Navbar3 instead of Navbar2
import { supabase } from './client'; // Import the Supabase client

const Demoo = () => {
  const [fetchError, setFetchError] = useState(null);
  const [library, setLibrary] = useState(null);
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
        setLibrary(null);
        console.log(error);
      }
      if (data) {
        setLibrary(data);
        setFetchError(null);
      }
    }
    fetchBooks();
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleBookClick = async (book) => {
    try {
      // Insert the clicked book into the booked table
      await supabase.from('booked').insert([book]);

      // Remove the clicked book from the library table
      await supabase.from('library').delete().eq('id', book.id);

      // Refetch the library data
      fetchBooks();
    } catch (error) {
      console.error('Error handling book click:', error.message);
    }
  };

  return (
    <div>
      <Navbar3 />
      <div className="library-library">
        <div className="genres-select-library">
          <label htmlFor="genres-library">Choose a genre :</label>
          <select id="genres-library" value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="emotional">Emotional</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            {/* Add more genre options as needed */}
          </select>
        </div>
       
        {fetchError && <p>{fetchError}</p>}
        {library && (
          <div className='library-grid'>
            {/* Additional card at the beginning */}
            <Link to="/bookdetailslibrary" className="card-library additional-card" key="additional-card"  title="Do you want to give a book?">
              <div>+</div>
            </Link>

            {/* Render other cards */}
            {library.map(book => (
              <div className="card-library" key={book.id} onClick={() => handleBookClick(book)}>
                <div className="card-image-library">
                  <img src={book.imageurl} alt={book.name} />
                </div>
                <div className="card-details-library">
                  <h3>{book.name}</h3>
                  <p>{book.author}</p>
                  <p className="book-genre">{book.genre}</p> {/* Display the genre */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Demoo;
