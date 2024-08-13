import './Login.css';
import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { supabase } from './client'; // Import Supabase client
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        throw error;
      }

      alert('Login successful');
      navigate('/details');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='login-login'>
        <div className='loginContent-login'>
          <div className='box-login'>
            <h2 className='login-heading-login'>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className='formGroup-login'>
                <label htmlFor='email'>Email:</label>
                <input
                  className="input-login-login"
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange} // Add onChange event handler
                />
              </div>

              <div className='formGroup-login'>
                <label htmlFor='password'>Password:</label>
                <input
                  className="input-login-login"
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange} // Add onChange event handler
                />
                <a href='/signup' className='signup-link-login'>New member? Signup</a>
              </div>
              <button className='loginButton-login' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
