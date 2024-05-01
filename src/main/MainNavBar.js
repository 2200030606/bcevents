import React from 'react';
import {  Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './main_css/mainnavbar.css'
import { useRef } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';



export default function MainNavBar() {
  const home = useRef(null);
  const services = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  
  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };  

  return (
    <div>
      <div className='hero'>
        <ul className='navbar'>
          <li>
            <Link  onClick={() => scrollToSection(home)}>
              Home
            </Link>
          </li>
          <li>
            <Link  onClick={() => scrollToSection(services)}>
              Services
            </Link>
          </li>
          <li>
            <Link  onClick={() => scrollToSection(portfolio)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link  onClick={() => scrollToSection(contact)}>
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={()=>window.alert("Please Login")}>Bookevent</Link>
          </li>
          <Button
        style={{ 
          position: 'fixed',
          color: 'black',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          borderRadius: '50%', 
          width: '40px', 
          height: '40px',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpwardRoundedIcon />
      </Button>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/adminlogin">adminlogin</Link>
          </li>
        </ul>
      </div>
      <div ref={home} className='home'>
        <Home />
      </div>
      <div ref={services} className='services'>
        <Services />
      </div>
      <div ref={portfolio} className='portfolio'>
        <Portfolio />
      </div>
      <div ref={contact} className='Contact'>
        <Contact />
      </div>
      
    </div>
  );
}