import React from "react";
import styled from "styled-components";
// import devfolio from "../Assets/Devfolio/Devfolio_Logo-White.png"
// import polygon from "../Assets/Polygon/Polygon_Logo-White.png"
// import solana from "../Assets/Solana/Solana Dark.png"
// import filecoin from "../Assets/Filecoin/Filecoin Coloured White Text-1.png"
// import replit from "../Assets/Replit/Replit-Dark-Background.png"


const Section = styled.div`
  height: 140vh;
  `;
const Container = styled.div`
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	width: 1400px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;



export default function Sponsers() {
  return (
    <Section id="sponser">
        <Container>
            Sponsers
        </Container>
    </Section>

  );
}
