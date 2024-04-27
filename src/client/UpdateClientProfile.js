import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function UpdateClientProfile() {
  const [clientData, setClientData] = useState({
    fullname: '',
    email: '',
    password: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [initialClientData, setInitialClientData] = useState({});

  useEffect(() => {
    const storedClientData = localStorage.getItem('client');
    if (storedClientData) {
      const parsedClientData = JSON.parse(storedClientData);
      setClientData(parsedClientData);
      setInitialClientData(parsedClientData)
    }
  }, []);

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const updatedData = {};
      for (const key in clientData) {
        if (clientData[key] !== initialClientData[key] && initialClientData[key] !== '') {
          updatedData[key] = clientData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        updatedData.email = clientData.email;
        const response = await axios.put(`${config.url}/updateclientprofile` , updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/clientprofile/${clientData.email}`, updatedData)
        localStorage.setItem("client",JSON.stringify(res.data))
      } else {
        setMessage("No Changes in Job Seeker Profile");
        setError("");
      }
    } 
    catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  
  return (
    <div>
      <h3 align="center"><u>Update Profile</u></h3>
      {message ? <h4 style={{color:"white"}} align="center">{message}</h4> : <h4 align="center" color='red'>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:"white"}} >Full Name</label>
          <input type="text" id="fullname" value={clientData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label style={{color:"white"}} >Email</label>
          <input type="email" id="email" value={clientData.email} readOnly />
        </div>
        <div>
          <label style={{color:"white"}} >Password</label>
          <input type="password" id="password" value={clientData.password} onChange={handleChange} required />
        </div>
        <div>
          <label style={{color:"white"}} >Contact</label>
          <input type="number" id="contact" value={clientData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}