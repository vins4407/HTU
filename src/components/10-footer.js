import React from 'react';
import styled from 'styled-components';
import HTUlogo from '../assets/HTU-logo.svg';
import '../styles/10-footer.css'
import { Link } from 'react-router-dom';
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Section = styled.div`
  width: 100%;
  display: flex;
  padding-top:4.75rem;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  `;

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section); // Check the value of the section element
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };




export default function Footer() {
  return (
    <Section id="footer">
      <div className='footer-main'>
         <img className="footer-logo" alt="" src={HTUlogo}/>
         <div className='footer-sections'>
           <div className='footer-about'>
            <span className='footer-section-title'>About</span>
            <span className='footer-link'>season 1.0</span>
           </div>
           <div className='footer-about'>
            <span className='footer-section-title'>Quick Links</span>
            <Link className='footer-link' to='/#prize' onClick={() => handleScrollToSection('prize')}>Prize</Link>
            <Link className='footer-link' to='/#tracks' onClick={() => handleScrollToSection('tracks')}><span >Tracks</span></Link>
            <Link className='footer-link' to='/#about-us' onClick={() => handleScrollToSection('about-us')}>  <span >About Us</span> </Link>

           </div>
           <div className='footer-about'>
            <span className='footer-section-title'>Legal</span>
           <a className='footer-link' target='_blanck' href="https://drive.google.com/file/d/14rNyS0bFqo2o2H2Qh7RcreYkYflMJCrR/view?usp=sharing" >code of conduct</a>
           </div>
         </div>
      </div>
      <div className='separator'></div>
      <div className='footer-socials'>
        <div className='social-container'>
          <AiFillInstagram className='social-icon'/>
         <AiFillLinkedin className='social-icon'/>
         <a target='_blanck' href='https://twitter.com/HTU_Mumbai'>
           <AiFillTwitterCircle className='social-icon'/>
         </a>
        </div>
        <span className='htu'>©2023 Hack The Universe, Inc.</span>
      </div>
    </Section>

  );
}
