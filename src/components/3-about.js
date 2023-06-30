import React from 'react';
import styled from 'styled-components';
import '../styles/3-about.css'
import HTUlogo from '../assets/HTU-logo.svg';
import vector1 from '../assets/vector-1.svg'
import vector2 from '../assets/vector-2.svg'
import vector3 from '../assets/vector-3.svg'
import vector5 from '../assets/vector-5.svg'

const Section = styled.div`
  width: 90rem;
  height: 48.125rem; 
  justify-content: center;
  display: flex;
  position: relative;

`;

const AboutUsChild = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-500);
  box-sizing: border-box;
  width: ${props => props.width};
  height: ${props => props.height};
`;


function About () {
	return (
		<Section  id="about-us" >
		<div className='about-us-container'>
     
      <AboutUsChild top="5.19rem" left="22.75rem" width="7.38rem" height="7.38rem" >
        {/* Content */}
      </AboutUsChild>
      <AboutUsChild top="13rem" left="38.69rem" width="4.125rem" height="4.125rem" >
        {/* Content */}
      </AboutUsChild>
      <AboutUsChild top="29.21rem" left="46rem" width="7.38rem" height="7.38rem" >
        {/* Content */}
      </AboutUsChild>
      <AboutUsChild top="4.31rem" left="56.19rem" width="2.9375rem" height="2.9375rem" >
        {/* Content */}
      </AboutUsChild>
      <AboutUsChild top="2.75rem" left="68.5rem" width="7.375rem" height="7.375rem" >
        {/* Content */}
      </AboutUsChild>
      <AboutUsChild top="23.81rem" left="71.75rem" width="4.125rem" height="4.125rem" >
        {/* Content */}
      </AboutUsChild>
      <div className='about-us-MainChild-Bg'></div>
      <div className='about-us-MainChild'>
        <img className="logo" alt="" src={HTUlogo}/>
      </div>      

      <div className="line-div" />
      <div className="aboutus-child6" />
      <div className="aboutus-child7" />
      <div className="aboutus-child8" />
      <div className="aboutus-child9" />
      <div className="aboutus-child10" />
      <div className="aboutus-child11" />
      <div className="aboutus-child12" />
      <div className="aboutus-child13" />
      <div className="aboutus-child14" />
      <img className="vector-icon" alt="" src={vector1} />
      <img className="aboutus-child15" alt="" src={vector2}/>
      <img className="aboutus-child16" alt="" src={vector3} />
      <img className="aboutus-child17" alt="" src={vector1} />
      <img className="aboutus-child18" alt="" src={vector5} />


      <div className='Title'>About us</div>
      <div className='about-us-content'>
        <span>
        Hack The Universe is Mumbai's Upcoming hackathon, bringing 400+ students together around the nation to learn about upcoming and existing technologies and building some great projects.
        </span>
      </div>




    </div>
		</Section>
	);
}
export default About;
