import React from "react";
import styled from "styled-components";
// import devfolio from "../Assets/Devfolio/Devfolio_Logo-White.png"
// import polygon from "../Assets/Polygon/Polygon_Logo-White.png"
// import solana from "../Assets/Solana/Solana Dark.png"
// import filecoin from "../Assets/Filecoin/Filecoin Coloured White Text-1.png"
// import replit from "../Assets/Replit/Replit-Dark-Background.png"
import '../styles/7-sponsor.css'
import water from '../assets/water.png'
import air from '../assets/air.png'
import fire from '../assets/fire.png'
import poki from '../assets/poki.png'

const Section = styled.div`
  width: 100rem;
  height: 119.5rem;
  display: flex;
	flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;




export default function Sponsers() {
  return (
    <Section id="sponsers">
      <div className="sponsor-title">Our Sponsors</div>
      <div className="sponsor-water">
        <img className="water-image"src={water} alt=""></img>
        <div className="water-container">
          <span className="water-title">Water</span>
          <div className="spossor-main-wrapper">
            <div className="sponsor-main">
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"><img alt="" src={poki}/></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
            </div>
          </div>

        </div>
      </div>
      <div className="sponsor-water" style={{flexDirection:"row-reverse"}}>
        <img className="water-image"src={air} alt=""></img>
        <div className="water-container">
          <span className="water-title">Air</span>
          <div className="spossor-main-wrapper">
            <div className="sponsor-main">
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
            </div>
          </div>

        </div>
      </div>
      <div className="sponsor-water">
        <img className="water-image"src={fire} alt=""></img>
        <div className="water-container">
          <span className="water-title">Fire</span>
          <div className="spossor-main-wrapper">
            <div className="sponsor-main">
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
              <div className="sponsor-container"></div>
            </div>
          </div>
        </div>
      </div>
      
  
    </Section>

  );
}
