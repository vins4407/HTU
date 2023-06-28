import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 26.8125rem; 
  width:90rem;
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




export default function Footer() {
  return (
    <Section id="Communities">
        <Container>
            Footer
        </Container>
    </Section>

  );
}
