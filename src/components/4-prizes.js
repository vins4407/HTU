import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  height: 100%;
  margin-bottom: 5rem;
  position: relative;
  box-sizing: border-box;
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


function Prize () {
	return (
        <Section id="prize" >  
                <Container>       
               Prizes
                </Container>
             
        </Section>    
	);
}
export default Prize;
