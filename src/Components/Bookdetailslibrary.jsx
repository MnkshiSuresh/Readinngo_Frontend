import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './client'; // Import Supabase client
import './Bookdetailslibrary.css';
import Navbar2 from './Navbar2.jsx';

const Bookdetailslibrary = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !author || !imageUrl || !genre) {
            setFormError('Please fill in all the fields.');
            return;
        }

        const { data, error } = await supabase
            .from('library')
            .insert([{ name, author, imageurl: imageUrl, genre }]);

        if (error) {
            console.error(error);
            setFormError("An error occurred. Please try again.");
            return;
        }

        if (data) {
            console.log(data);
            setFormError(null);
            navigate('/Demoo'); // Navigate to home page or any other desired page after submission
        }
    };

    return (
        <div className='bookdetailslibrary'>
            <Navbar2 />
            <form onSubmit={handleSubmit} className="book-details-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select Genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="mystery">Mystery</option>
                        <option value="emotional">Emotional</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
                {formError && <p className="error-message">{formError}</p>}
            </form>
        </div>
    );
}

export default Bookdetailslibrary;
