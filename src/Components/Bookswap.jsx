import React from 'react';
import './Bookswap.css';
import Navbar2 from './Navbar2.jsx';

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    imageUrl: 'https://covers.openlibrary.org/b/id/8221666-L.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    imageUrl: 'https://covers.openlibrary.org/b/id/7222166-L.jpg'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    imageUrl: 'https://covers.openlibrary.org/b/id/7222060-L.jpg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    imageUrl: 'https://covers.openlibrary.org/b/id/7192118-L.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    imageUrl: 'https://covers.openlibrary.org/b/id/8091535-L.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    imageUrl: 'https://covers.openlibrary.org/b/id/7221748-L.jpg'
  }
];

const Bookswap = () => {
  return (
    <div>
      <Navbar2 />
      <div className="community-community">
        <div className="card-grid-community">
          {books.map((book, index) => (
            <div key={index} className="card-community">
              <div
                className="card-image-community"
                style={{ backgroundImage: `url(${book.imageUrl})` }}
              ></div>
              <div className="card-details-community">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookswap;
