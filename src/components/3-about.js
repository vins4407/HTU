import React from 'react';
import styled from 'styled-components';
const Section = styled.div`
  height: 100vh;
  
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function About () {
	return (
		<Section  id="about-us" >
				<Container>
					ABoutus
				</Container>
		</Section>
	);
}
export default About;
