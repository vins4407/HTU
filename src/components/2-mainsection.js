import React from "react";
import styled from "styled-components";
import '../styles/2-mainsection.css'
import puzzle1 from '../assets/puzzle-dynamic-color1.png'
import puzzle2 from '../assets/puzzle-dynamic-color2.png'
import planet from '../assets/planet.png'
import planetOutline from '../assets/mask-group1.svg'

const Section = styled.div`
  width: 90rem;
  height: 62.1875rem;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 768px) {
    height:fit-content;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    -moz-box-pack: center;
    padding-top: 3rem;
  }
`;

export function MainSection(){  

    return(
        <Section id="main-section">
            <Container>
              <div className="main-container">
              <img className="planet-outline" src={planetOutline} alt="planet-outline"></img>

                <img className="puzzle-icon1" alt="" src={puzzle1}/>
                <div className="main-section-content">
               <div className="Date-section">
                  <span>25 TO 27 </span>
                  <span className="aug-2023">AUG 2023</span>
                </div>

                <div className="Title-Text">Think. Make. Solve.</div>

                <div className="social-section">
                <a target='_blanck' href='https://twitter.com/HTU_Mumbai' style={{textDecoration:'none'}}>
                    <div className="join-discord">
                      <div className="join-discord-wrap">
                      <span className="Text">join discord</span>
                      </div>
                    </div>
                  </a>
                    
                  <a target='_blanck' href='https://twitter.com/HTU_Mumbai' style={{textDecoration:'none'}}>
                    <div className="follow-twitter">
                      <div className="follow-twitter-wrap">
                      <span className="Text">FOLLOW ON TWITTER</span>
                      </div>
                    </div>
                  </a>
                </div>
                </div>
                <img className="puzzle-icon2" alt="" src={puzzle2}/>
              </div>              
                <div className="planet-mask" >
                <img className="planet-img" alt="" src={planet}/>
                </div>
            </Container>
        </Section>
    );
}
