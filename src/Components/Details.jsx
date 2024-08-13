import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './client'; // Import Supabase client
import './Details.css';

const Details = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [picture, setPicture] = useState(null); // State for the picture
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = supabase.auth.user();
        if (!user) {
            setFormError('User not authenticated');
            return;
        }

        if (!name || !phoneNumber || !address || !age) {
            setFormError('Please fill in all the fields.');
            return;
        }

        let pictureURL = null;
        if (picture) {
            const { data: pictureData, error: pictureError } = await supabase.storage.from('profile_pictures').upload(`user/${user.id}_${Date.now()}`, picture);
            if (pictureError) {
                console.error('Error uploading picture:', pictureError.message);
                setFormError('Error occurred while uploading picture. Please try again.');
                return;
            }
            pictureURL = pictureData.Key;
        }
        
        const { data, error } = await supabase
            .from('user')
            .update({ name, age, phoneNumber, address, bio, picture: pictureURL })
            .eq('id', user.id);

        if (error) {
            console.error('Error updating user details:', error);
            setFormError("Error updating details. Please try again.");
        } else if (data) {
            console.log('Update successful:', data);
            setFormError(null);
            navigate('/main'); // Navigate to the main page after successful update
        }
    };

    return (
        <div className='details-container'>
            <div className='details-content'>
                <div className='details-box'>
                    <h2 className='details-heading'>Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='detail-details-demo'>
                            <label htmlFor="name-demo" className="label-details-demo">Name:</label>
                            <input
                                type="text"
                                id="name-demo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='detail-details-demo'>
                            <label htmlFor="age-demo" className="label-details-demo">Age:</label>
                            <input
                                type="number"
                                id="age-demo"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='detail-details-demo'>
                            <label htmlFor="phoneNumber-demo" className="label-details-demo">Phone:</label>
                            <input
                                type="text"
                                id="phoneNumber-demo"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='detail-details-demo'>
                            <label htmlFor="address-demo" className="label-details-demo">Address:</label>
                            <input
                                type="text"
                                id="address-demo"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='detail-details-demo'>
                            <label htmlFor="bio-demo" className="label-details-demo">Bio:</label>
                            <input
                                type="text"
                                id="bio-demo"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='detail-details-demo'>
                            <label htmlFor="picture-demo" className="label-details-demo">Picture:</label>
                            <input
                                type="file"
                                id="picture-demo"
                                onChange={(e) => setPicture(e.target.files[0])}
                                className="input-details-demo"
                            />
                        </div>
                        <div className='submit-button-container-demo'>
                            <button className='details-button' type='submit'>Submit</button>
                        </div>
                        {formError && <p className='details-error'>{formError}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Details;
