import React from 'react';
import styled from 'styled-components';
import HTUlogo from '../assets/HTU-logo.svg';
import '../styles/10-footer.css'
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Section = styled.div`
  height: 24.8125rem; 
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
            <span className='footer-link'>prize</span>
            <span className='footer-link'>prize</span>
            <span className='footer-link'>prize</span>

           </div>
           <div className='footer-about'>
            <span className='footer-section-title'>Legal</span>
            <span className='footer-link'>code of conduct</span>
           </div>
         </div>
      </div>
      <div className='separator'></div>
      <div className='footer-socials'>
        <div className='social-container'>
          <AiFillInstagram className='social-icon'/>
         <AiFillLinkedin className='social-icon'/>
         <AiFillTwitterCircle className='social-icon'/>
        </div>
        <span className='htu'>©2023 Hack The Universe, Inc.</span>
      </div>
    </Section>

  );
}
