import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../main/main_css/login.css'
import profile from '../main/main_images/bg.jpg';
import img3 from '../main/main_images/sideimg1.jpg'
import config from '../config'
import axios from 'axios';



export default function Login({onManagerLogin}) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkmanagerlogin` , formData);
      if (response.data!=null) 
      {
        //console.log(response.data)
        onManagerLogin();

        localStorage.setItem('manager', JSON.stringify(response.data));
        navigate("/emhome");
       // navigate(`/emnav/${formData.email}`)
        
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };
  return (
    <div  style={{
        backgroundImage: `url(${profile})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>BACK</button>
        </Link>
       
        <form onSubmit={handleSubmit}>
          <h3 style={{color:"white"}}>Event Manager login</h3>
          {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
          <input type="email" id="email"    className="email-input"      placeholder="Email" value={formData.email} onChange={handleChange} required/> <br/>
          <input type="password" id="password"   className="email-input"  placeholder="Password" value={formData.password} onChange={handleChange} required/> <br/>
          <button type="submit" className="button">Login</button>
           <div className="signup-container">
          <p>Don't have an account? </p>
          <Link to={"/emsignup"} className="link-style">Event Manager Signup</Link>
        </div>
    
        </form>
        <div>
      <h3 style={{paddingTop:"95px",paddingLeft:"409px", position:"fixed"}}>
        <img src={img3} alt='Summit' style={{ width: '320px', height: '542px'}} />
      </h3>
    </div>
    </div>
  );
}