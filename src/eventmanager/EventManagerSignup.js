import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../main/main_css/login.css';
import profile from '../main/main_images/bg.jpg';
import img3 from '../main/main_images/sideimg1.jpg'
import config from '../config'
import axios from 'axios'


export default function EventManagerSignup() {

    const [formData, setFormData] = useState({
        fullname: '',
        brandname:'',
        email: '',
        password: '',
        contact: ''
      });

     
  const [message, setMessage] = useState('');
  
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertmanager, formData`);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          brandname:'',
          email: '',
          password: '',
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
    <div style={{
        backgroundImage:` url(${profile})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>

{
        message ? <h4 align="center" style={{ color: 'white' }}>{message}</h4> : <h4 align="center" style={{ color: 'white' }}>{error}</h4>
      }    
    <form  onSubmit={handleSubmit}>
    <h3 style={{color:"white"}}>Manager signup</h3>
    <input style={{color:"white"}} type="text" id="fullname" className="email-input" placeholder="FullName"  value={formData.fullname} onChange={handleChange} required/> <br/>
    <input style={{color:"white"}} type="text" id="brandname" className="email-input" placeholder="Brandname"  value={formData.brandname} onChange={handleChange} required/> <br/>
    <input style={{color:"white"}} type="email" id="email" className="email-input" placeholder="Email"   value={formData.email} onChange={handleChange}required/> <br/>
    <input style={{color:"white"}} type="password" id="password" className="email-input" placeholder="Password"  value={formData.password} onChange={handleChange} required/> <br/>
    <input style={{color:"white"}} type="text" id="contact" className="email-input" placeholder="Contact No"  value={formData.contact} onChange={handleChange}pattern="[6789][0-9]{9}"required/> <br/>
    <button type="submit">Submit</button>
     <div className="signup-container">
    <p>Already have an account </p>
    <Link to={"/emlogin"} className="link-style">Event Manager Login</Link>
   
  </div>
  </form>
  <div>
        <h3 style={{paddingTop:"120px",paddingLeft:"525.9px"}}>
        <img src={img3} alt='Summit' style={{ width: '320px', height: '542px'}} />
        </h3>
        </div>
  </div>
  )
}