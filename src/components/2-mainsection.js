import React from "react";
import styled from "styled-components";
import '../styles/3-mainsection.css'
import puzzle1 from '../assets/puzzle-dynamic-color1.png'
import puzzle2 from '../assets/puzzle-dynamic-color2.png'
import planet from '../assets/planet.png'

const Section = styled.div`
  width: 90rem;
  height: 62.1875rem;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
    justify-content: center;
  }
`;

export function MainSection(){  

    return(
        <Section id="main-section">
            <Container>
              <div className="main-container">
                <div className="puzzle-div-first"><img className="puzzle-icon1" alt="" src={puzzle1}/></div>
                <div className="main-section-content">
               <div className="Date-section">
                  <span>25 TO 27 </span>
                  <span className="aug-2023">AUG 2023</span>
                </div>

                <div className="Title-Text">Think. Make. Solve.</div>

                <div className="social-section">
                    <div className="join-discord">
                          <span className="Text">JOIN DISCORD</span>
                    </div>
                  <div className="follow-twitter">
                    <span className="Text">FOLLOW ON TWITTER</span>
                  </div>
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
