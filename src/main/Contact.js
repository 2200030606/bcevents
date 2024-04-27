import React from 'react'
import img1 from './main_images/cimg1.JPG'
import img2 from './main_images/cimg2.jpg'
import img3 from './main_images/cimg3.jpg'
import img4 from './main_images/cimg4.png'
import img5 from './main_images/cimg5.png'
import img6 from './main_images/cimg6.png'
import './main_css/contact.css'
import { Link } from 'react-router-dom';



export default function Contact() {

  return (
    <div>
      
      <div>
    <div>
    <h3 align="center" style={{ color: "white" , fontFamily:"cursive"}}><strong>OUR STORY</strong></h3>
    <p style={{color:"white",paddingLeft:"250px"}}>It all started with a spark of inspiration at a party in 1996. Rakhi, coming back from the event, couldn’t help but feel that something was missing – the essence of true celebration.</p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>In a moment of pure creativity, she envisioned a concept that could turn ordinary gatherings extraordinary and memorable moments. Eager to share her idea, Rakhi approached</p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>husband, Sanjay, who, though initially hesitant, became an enthusiastic partner in this venture. Thus, the tale of Rachnoutsav, the celebration experts,began with two visionaries.</p><br/><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>As word spread about their genuine care and passion for celebrations, Rachnoutsav’s popularity soared. The turning point came when they were entrusted with conceptualizing</p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>the homecoming celebration of Hyderabad’s very own beauty queen, Diana Hayden, the Miss World of 1997. Despite fierce competition from established players in the events </p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>industry Rakhi and Sanjay’s creative brilliance shone through, resulting in an event that not only won hearts but also caused the first major traffic hold-up on the Necklace road in </p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>Hyderabad – a testament to their impact.</p><br/><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>It all started with a spark of inspiration at a party in 1996. Rakhi, coming back from the event, couldn’t help but feel that something was missing – the essence of true celebration.</p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>In a moment of pure creativity, she envisioned a concept that could turn ordinary gatherings extraordinary and memorable moments. Eager to share her idea, Rakhi approached</p><br/>
    <p style={{color:"white",paddingLeft:"250px"}}>husband, Sanjay, who, though initially hesitant, became an enthusiastic partner in this venture. Thus, the tale of Rachnoutsav, the celebration experts,began with two visionaries.</p><br/><br/>
    </div>
      <h3 style={{color:"white", paddingLeft:"256px",fontFamily:"initial"}}>THE TEAM</h3>
</div>
<div className="photos-container" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
  <img src={img1} alt='kanaka' className="contact-photo" />
  <img src={img2} alt='varshitha' className="contact-photo" />
  <img src={img3} alt='sathya' className="contact-photo" />
</div>
<div>
<h3 align="center" style={{color:"white",fontFamily:"cursive",paddingTop:"190px",fontSize:"25pt"}}>CONTACT</h3>
</div>
    <div>
    
    <div className='card1-container'>
    <div className='card1'>
    <h2 style={{color:"white",textSizeAdjust:"4px",fontFamily:"Times new Roman"}}>Head Office</h2>
    <br/>
    <h3 style={{color:"white",fontSize:"24px"}}>Pavani Villa, 6-3-533 to 535</h3>
    <h4 style={{color:"white"}}> Plot 10, Dwarakpuri Colony, 
         Punjagutta, Hyderabad, Telangana
          – 500082</h4>
        </div>
        <div className='card1' style={{ color: "white" }}>
      <h2 style={{ color: "white", textSizeAdjust: "12px", fontFamily: "Times New Roman",paddingLeft:"20px" }}>Links</h2>
      <ul style={{ color: "white" }}>
        <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
        <li><Link to="/services" style={{ color: "white" }}>Services</Link></li>
        <li><Link to="/portfolio" style={{ color: "white" }}>Portfolio</Link></li>
        <li><Link to="/contact" style={{ color: "white" }}>Contact</Link></li>
        <li><Link to="/bookevent" style={{ color: "white" }}>Book Event</Link></li>
        <li><Link to="/login" style={{ color: "white" }}>Login</Link></li>
      </ul>
    </div>

        <div className='card1'>
    <h2 style={{color:"white",textSizeAdjust:"4px",fontFamily:"Times new Roman"}}>Contact Us</h2>
    <br/>
    <h3 style={{color:"white"}}>BC@gmail.com</h3>
    <h4 style={{color:"white"}}> +1234567890</h4>
    <br/>
    <h4 style={{color:"white"}}>Social Media</h4>
   <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={img4} alt='instalogo' className="social-icon" /></a>
   <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={img5} alt='twitter' className="social-icon" /></a> 
   <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={img6} alt='facebook' className="social-icon" /></a> 
        </div>
       


        <div className='card1'>
    <h2 style={{color:"white",textSizeAdjust:"12px",fontFamily:"Times new Roman"}}>Locations</h2>
    <br/>
    <h3 style={{color:"white"}}>Vijayawada<br/>
    Guntur<br/>Hyderabad<br/>Vizag</h3>
    
        </div>
    </div>
    </div>
  </div> 
    
  )
}
