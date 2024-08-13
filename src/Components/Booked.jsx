import React, { useEffect, useState } from 'react';
import './Booked.css';
import Navbar2 from './Navbar2.jsx';
import { supabase } from './client'; // Import the Supabase client

const Booked = () => {
  const [booked, setBooked] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchBookedBooks = async () => {
      try {
        const { data, error } = await supabase.from('booked').select('*');
        if (error) {
          console.error('Error fetching booked books:', error.message);
          setFetchError('Could not fetch booked books');
          return;
        }
        setBooked(data);
        setFetchError(null);
      } catch (error) {
        console.error('Error fetching booked books:', error.message);
        setFetchError('Could not fetch booked books');
      }
    };
    fetchBookedBooks();
  }, []);

  return (
    <div className='booked-booked'>
      <Navbar2 />
      <div className="library-grid-booked">
        {fetchError && <p>{fetchError}</p>}
        {booked && (
          booked.map(book => (
            <div className="card-library-booked" key={book.id}>
              <div className="card-image-library-booked">
                <img src={book.imageurl} alt={book.name} />
              </div>
              <div className="card-details-library-booked">
                <h3>{book.name}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Booked;
