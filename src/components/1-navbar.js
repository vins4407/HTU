import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/1-navbar.css'
import styled from 'styled-components';

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
      <div className="logo">
      </div>
      <ul className="nav-links">
        <li>
          <Link to='/#prize' onClick={() => handleScrollToSection('prize')}>
            <h3 >Prizes</h3>
          </Link>
        </li>
        <li>
          <Link to="/#tracks" onClick={() => handleScrollToSection('track')}>
            <h3>Tracks</h3>
          </Link>
        </li>
        <li>
          <Link to="/#about-us" onClick={() => handleScrollToSection('about-us')}>
            <h3>About us</h3>
          </Link>
        </li>
        <li>
          <Link to="/#Sponser-us" onClick={() => handleScrollToSection('Sponser-us')}>
            <h3>Sponsor Us</h3>
          </Link>
        </li>
        <li>
          <Link to="/#Communities" onClick={() => handleScrollToSection('Communities')}>
            <h3>Communities</h3>
          </Link>
        </li>
      </ul>
    </div>
  
  );
};

export default Navbar;
