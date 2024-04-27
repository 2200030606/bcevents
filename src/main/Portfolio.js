import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './main_images/pimg1.jpg';
import img2 from './main_images/pimg2.jpg';
import img3 from './main_images/birthday1.jpg';
import './main_css/portfolio.css'

export default function Portfolio() {
  return (
    <div>
        <div align="center" style={{color:"white",fontFamily:"cursive",paddingTop:"20px",fontSize:"25pt"}}><strong>PORTFOLIO</strong></div>
    <div className='Card3' style={{paddingTop:"120px"}}>
      <div className='portfolio-image-container'>
        <img src={img1} alt='Wedding' /><br/>
        <p align="center"   style={{paddingLeft:"65px"}}>Wedding</p> <br/>
        <Link to="/portfolio/marriagealbum">
        <button>View Album</button>
        </Link>
      </div>
      <div className='portfolio-image-container'>
        <img src={img2} alt='Party' /> <br/>
        <p style={{paddingLeft:"65px"}}>Racing Events</p> <br/>
        <Link to="/portfolio/racingevents">
        <button>View Album</button>
        </Link>
      </div>
      <div className='portfolio-image-container'>
        <img src={img3} alt='Summit' /><br/>
        <p style={{paddingLeft:"65px"}}>Birthday Events</p><br/>
        <Link to="/portfolio/birthdayalbum">
        <button>View Album</button>
        </Link>
      </div>
      
    </div>
  </div>  
  );
}