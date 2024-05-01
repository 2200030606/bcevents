import React, { useState } from 'react';
import config from '../config';
import'./client_css/booknowpage.css'
import axios from 'axios';


export default function BookNowPage() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    fullname: '',
    date: '',
    email: '',
    address: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'fullname' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/bookevents`, formData);
      if (response.status === 200) 
      {
        setFormData({
            fullname: '',
            date: '',
            email: '',
            address: '',
            contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Book Event</u></h3>
      {
        message ? <h4 align="center" style={{color:"white"}}>{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <div style={{paddingRight:"260px"}}>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:"white"}}>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} onKeyUp={handleChange} required />
        </div>
        <div>
          <label  style={{color:"white"}}>Event Date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label  style={{color:"white"}}>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label  style={{color:"white"}}>Address</label>
          <textarea type="text" id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label  style={{color:"white"}}>Contact</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit" style={{paddingLeft:"190px",paddingTop:"40px"}}>Submit</button>
      </form>
      </div>
    </div>

  );
}