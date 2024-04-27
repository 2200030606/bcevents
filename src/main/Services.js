import React from 'react';
import img1 from './main_images/simg1.jpg';
import img2 from './main_images/simg2.jpg';
import img3 from './main_images/simg3.jpeg';
import img4 from './main_images/simg4.jpg';
import img5 from './main_images/simg5.jpeg';
import img6 from './main_images/simg6.jpeg';
import './main_css/services.css';


export default function Services() {
  return (
    <div>
      <div align="center" style={{color:"white", fontFamily:"cursive", paddingTop:"20px", fontSize:"25pt"}}>
        <strong>OUR SERVICES</strong>
      </div>
      <div className='Card1'>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img1} alt='Wedding' />
            <div className="image-name" align="center">Wedding Event</div>
          </div>
          <div className="overlay">With our expertise in wedding planning, we create seamless celebrations where love shines brightest. Let us handle the details, so you can cherish every moment of your special day.</div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img2} alt='Party' />
            <div className="image-name" align="center">Birthday Party</div>
          </div>
          <div className="overlay">With our birthday event expertise, we tailor celebrations to your style, ensuring seamless logistics and unforgettable memories. Let us handle the details while you cherish every moment of your special day.</div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img3} alt='Summit' />
            <div className="image-name" align="center">Racing Events</div>
          </div>
          <div className="overlay">Our summit expertise delivers impactful, seamless events for leaders to inspire and collaborate. Let us enhance your experience.</div>
        </div>
      </div>
      <div className='Card2'> 
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img5} alt='Racing' />
            <div className="image-name" align="center">Award Events</div>
          </div>
          <div className="overlay">We excel in racing event management, delivering thrilling, safe, and seamless competitions for adrenaline lovers. Enjoy the race; we've got the track.</div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img4} alt='Tech' />
            <div className="image-name" align="center">Technical Events</div>
          </div>
          <div className="overlay">We master tech events, creating impactful, seamless experiences that highlight innovation and connect attendees.</div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img6} alt='Social' />
            <div className="image-name" align="center">Governament Events</div>
          </div>
          <div className="overlay">We specialize in government events, ensuring impactful, secure, and seamless gatherings tailored to official needs.</div>
        </div>
      </div>
    </div>
  );
}
