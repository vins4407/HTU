import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 120vh;
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


function Tracks () {
	return (
		<Section  id="track">  
        	<Container>  
				Tracks
      		</Container>
             
        </Section>  
	);
}
export default Tracks;
