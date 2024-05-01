import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './main_css/login.css';
import profile from './main_images/bg.jpg';
import img3 from '../main/main_images/sideimg1.jpg';
import axios from 'axios';
import config from '../config'


export default function Login({ onClientLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkclientlogin`, formData);
      if (response.data !== null) {
        console.log(response.data);
        onClientLogin();
        localStorage.setItem('client', JSON.stringify(response.data));
        navigate(`/clienthome`);
      } else {
        window.alert('Please recheck the password');
        setError('');
      }
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${profile})`, width: '100%', minHeight: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>BACK</button>
      </Link>

      <form onSubmit={handleSubmit}>
        <h3 style={{ color: 'white' }}>CLIENT LOGIN</h3>
        {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
        <input type="email" id="email" className="email-input" placeholder="Email" value={formData.email} onChange={handleChange} required /> <br />
        <input type="password" id="password" className="email-input" placeholder="Password" value={formData.password} onChange={handleChange} required /> <br />
        <button type="submit" className="buttonname">Login</button> {/* Removed align="center" */}
        <div className="signup-container">
          <p>Don't have an account? </p>
          <div className="dropdown" >
            <button className="dropbtn">Login as</button>
            <div className="dropdown-content">
              <a href="/adminlogin" style={{ color: 'white' }}>Admin Login</a>
              <a href="/emlogin" style={{ color: 'white' }}>Event Manager Login</a>
              <a href="/login" style={{ color: 'white' }}>Client Login</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Sign as</button>
            <div className="dropdown-content">
              <a href="/signup" style={{ color: 'white' }}>Client Signup</a>
              <a href="/emsignup" style={{ color: 'white' }}>Event Manager signup</a>
            </div>
          </div>
        </div>
      </form>
      <div>
        <h3 style={{ paddingTop: '95px', paddingLeft: '309px', position: 'fixed' }}>
          <img src={img3} alt='Summit' style={{ width: '320px', height: '542px' }} />
        </h3>
      </div>
    </div>
  );
}
