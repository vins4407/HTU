import React from 'react';
import styled from 'styled-components';
import '../styles/4-prizes.css'
import first from '../assets/firstPrize.png'
import second from '../assets/secondPrize.png';
import third from '../assets/thirdPrize.png';

const Section = styled.div`
  width: 90rem;
  height: 43.75rem; 
  box-sizing: border-box;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
`;



function Prize () {
	return (
        <Section id="prize" >  
                  <div className='prize-title'>Prizes</div>
                  <div className='prize-container'>
                    <div className='prize-second'>
                      <img  alt='second prize' src={second}></img>
                      <span className='prize-amount'>15k</span>
                      <span className='prize-rank'>1st runner up</span>
                    </div>
                    <div className='prize-first'>
                      <img  alt='first prize' src={first}></img>
                      <span className='prize-amount'>25k</span>
                      <span className='prize-rank'>Winner</span>
                    </div>
                    <div className='prize-third'>
                      <img  alt='third prize' src={third}></img>
                      <span className='prize-amount'>10K</span>
                      <span className='prize-rank'>2nd runner up</span>
                    </div>
                  </div>   
             
        </Section>    
	);
}
export default Prize;
