import React from 'react'
import styled from 'styled-components';

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



export default function Organizers() {
  return (
    <Section id="Sponser-us">
        <Container>
            Sponsers
        </Container>
    </Section>

  );
}