import React, { useState, useRef, useEffect } from 'react';
import '../main/main_css/login.css';
import axios from 'axios';
import './eventmanager_css/addevents.css'; 
import config from '../config'

export default function AddEvents() {
  const [managerData, setManagerData] = useState([]);
  const [formData, setFormData] = useState({
    fullname:'',
    brandname:'',
    category: '',
    description: '',
    cost: '',
    contact:'',
    file: null
  });
 
  const fileInputRef = useRef(null); 

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  useEffect(() => {
    const storedManagerData = localStorage.getItem('manager');
    if (storedManagerData) {
      const parsedManagerData = JSON.parse(storedManagerData);
      setManagerData(parsedManagerData);
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullname', managerData.fullname);
      formDataToSend.append('brandname', managerData.brandname);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('cost', formData.cost);
      formDataToSend.append('contact', managerData.contact);
      formDataToSend.append('file', formData.file); // Append the file object
  
      const response = await axios.post(`${config.url}/insertdetails`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
  
      if (response.status === 200) {
        setFormData({
          fullname:'',
          brandname:'',
          category: '',
          description: '',
          cost: '',
          contact: '',
          file: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
        setMessage('');
      } else {
        setError('An unexpected error occurred');
        setMessage('');
      }
    }
  };
  
  

  return (
    <div>
    <div>
    <h3 align="center"><u>Add Event</u></h3>
    </div>
    <div className='ff'> 
      {message ? <h4 align="center" style={{color:"white"}}>{message}</h4> : null}
      {error ? <h4 align="center" className="error-message" >{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="event-form"> {/* Added a form class */}
        <div className="form-group">
          <label style={{color:"white"}}>FullName</label>
          <input type="text" id="fullname" value={managerData.fullname} className="form-control" required />
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Company</label>
          <input type="text" id="brandname" value={managerData.brandname} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Category</label>
          <select id="category" value={formData.category} onChange={handleChange} className="form-control" required>
            <option value=""> Select</option>
            <option value="Wedding"> Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Summit">Summit</option>
            <option value="Racing">Racing</option>
            <option value="Technical">Technical</option>
            <option value="Social">Social</option>
          </select>
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Cost</label>
          <input type="text" id="cost" value={formData.cost} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Contact</label>
          <input type="text" id="contact" value={managerData.contact} className="form-control" required />
        </div>
        <div className="form-group">
          <label  style={{color:"white"}}>Image</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button> {/* Added button classes */}
      </form>
    </div>
    </div>
  )
}
