import React,{useState} from 'react';
import '../main/main_css/login.css'
import profile from '../main/main_images/bg.jpg';
import {Link,useNavigate} from 'react-router-dom';
import img3 from '../main/main_images/sideimg1.jpg'
import axios from 'axios';
import config from '../config'


export default function AdminLogin({onAdminLogin}) 

    {
        const [formData, setFormData] = useState({
          username: '',
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
            const response = await axios.post(`${config.url}/checkadminlogin`, formData);
            if (response.data!=null) 
            {
              onAdminLogin(); 

        localStorage.setItem('admin', JSON.stringify(response.data));
              navigate("/adminhome")
             // window.location.href="https://lms.kluniversity.in/login/"
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
       
        <form  onSubmit={handleSubmit} >
        {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
          <h3 style={{color:"white"}}>ADMIN LOGIN</h3>
          <input type="text" id='username' className="email-input" placeholder="Username"   value={formData.username} onChange={handleChange} required/> <br/>
          <input type="password" id='password'  className="email-input" placeholder="Password" value={formData.password} onChange={handleChange} required/> <br/>
          <button type="submit" className="button">Login</button>
        </form>
        <div>
      <h3 style={{paddingTop:"95px",paddingLeft:"539px", position:"fixed"}}>
        <img src={img3} alt='Summit' style={{ width: '320px', height: '542px'}} />
      </h3>
    </div>
    </div>
  );
}