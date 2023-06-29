import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/1-navbar.css'
import HTUlogo from '../assets/HTU-logo.svg';

const Navbar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section); // Check the value of the section element
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  console.log('Navbar rendered'); // Check if Navbar is rendered

  return (
    <div className="navbar">
      <img className="navbar-logo" alt="" src={HTUlogo}/>
      <div className="navbar-links-main">
          <Link className='navbar-link'  to='/#prize' onClick={() => handleScrollToSection('prize')}>
            Prizes
          </Link>
          <Link className='navbar-link'  to='/#tracks' onClick={() => handleScrollToSection('tracks')}>
            Tracks
          </Link> 
           <Link className='navbar-link'  to='/#about-us' onClick={() => handleScrollToSection('about-us')}>
            About us
          </Link>  
          <Link className='navbar-link'  to='/#sponsers' onClick={() => handleScrollToSection('sponsers')}>
            Sponsers
          </Link>  
          {/* <Link className='navbar-link'  to='/#communities' onClick={() => handleScrollToSection('prize')}>
            Communities
          </Link>  */}
           <Link className='navbar-link'  to='/'   >venue
          </Link>  
      </div>
      <div className="join-discord-container">
           <div className="join-discord1">JOIN DISCORD</div>
    </div>
  </div>
  );
};

export default Navbar ; 

