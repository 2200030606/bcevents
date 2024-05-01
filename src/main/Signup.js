import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main/main_css/signup.css';
import profile from './main_images/bg.jpg';
import axios from 'axios';
import config from '../config'
import img3 from './main_images/sideimg1.jpg';


export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/insertclient`, formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          email: '',
          password: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${profile})`,
      width: '100%',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      {message ? <h4 align="center" style={{ color: 'white' }}>{message}</h4> : <h4 align="center" style={{ color: 'white' }}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "white" }}>CLIENT SIGNUP</h3>
        <input style={{ color: "white" }} type="text" id="fullname" className="email-input" placeholder="FullName" value={formData.fullname} onChange={handleChange} required /> <br />
        <input style={{ color: "white" }} type="email" id="email" className="email-input" placeholder="Email" value={formData.email} onChange={handleChange} required /> <br />
        <input style={{ color: "white" }} type="text" id="contact" className="email-input" placeholder="Contact No" value={formData.contact} onChange={handleChange} pattern="[6789][0-9]{9}" required /> <br />
        <input style={{ color: "white" }} type="password" id="password" className="email-input" placeholder="Password" value={formData.password} onChange={handleChange} required /> <br />
        <button type="submit">Submit</button><br/>
        <p style={{ color: 'white', paddingRight:"10px" }}>Already have an account? </p>
        <button><Link to='/login' style={{ color: 'black' }}>Client Login</Link></button>
  
      </form>
      <div>
        <h3 style={{ paddingTop: "120px", paddingLeft: "325.9px" }}>
          <img src={img3} alt='Summit' style={{ width: '320px', height: '542px' }} />
        </h3>
      </div>
    </div>
  );
}
