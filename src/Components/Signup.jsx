import { supabase } from './client'; // Import Supabase client
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, password } = formData;
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        console.error('Signup error:', error);
        alert(`Signup failed: ${error.message}`);
      } else {
        console.log('User signed up:', data);
        navigate('/login');
      }
    } catch (error) {
      console.error('Unexpected error during signup:', error);
      alert(`Unexpected error: ${error.message}`);
    }
  };
  
  

  return (
    <div>
      <Navbar />
      <div className='signup-login'>
        <div className='signup-login-content'>
          <div className='signup-box'>
            <h2 className='signup-heading'>Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className='signup-formGroup'>
                <label htmlFor='name'>Name:</label>
                <input
                  className="signup-input"
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='signup-formGroup'>
                <label htmlFor='email'>Email:</label>
                <input
                  className="signup-input"
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='signup-formGroup'>
                <label htmlFor='password'>Password:</label>
                <input
                  className="signup-input"
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button className='signupButton' type='submit'>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
