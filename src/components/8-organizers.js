import React from 'react'
import styled from 'styled-components';
import '../styles/8-organizers.css'
import vinayak from '../assets/vinayak.jpeg'
import ashutosh from '../assets/ashutosh.jpeg'

import khushal from '../assets/khushal.jpeg'
const Section = styled.div`
  width: 90rem;
  height: 52rem; 
  display:flex;
  flex-direction:column;
  al
`;




export default function Organizers() {
  return (
    <Section id="organizers">
          <div className='prize-title'>Organizers</div>

          <div className='organizers-section'>

            <div className='organizer-container'>
              <div className='organizer-container-main'>
                <img className='organizer-image' alt='vinayak' src={vinayak} />
                <div className='organizer-info'>
                  <span className='organizer-name'>Vinayak Kesharwani</span>
                  <span className='organizer-designation'>Corganizer<br/>[Tech head]</span>
                </div>   
               </div>
            </div>

            <div className='organizer-container'>
              <div className='organizer-container-main'>
                <img className='organizer-image' alt='ashutosh' src={ashutosh} />
                <div className='organizer-info'>  
                  <span className='organizer-name'> Ashutosh Upadhyay</span>
                  <span className='organizer-designation'>Corganizer</span>
                </div>    </div>
            </div>

            <div className='organizer-container'>
              <div className='organizer-container-main'>
                <img className='organizer-image' alt='khushal' src={khushal} />
                <div className='organizer-info'>
                  <span className='organizer-name'>khushal Ghatalia</span>
                  <span className='organizer-designation'>Corganizer<br/>[Content head]</span>
                </div>   </div>
            </div>
          </div>
    </Section>

  );
}