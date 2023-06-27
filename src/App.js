import React from "react";
import {
	BrowserRouter as Router,
  Routes,
	Route,
} from 'react-router-dom';
import Home from "./pages/home";
import styled from "styled-components";


function App(){
  const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: black; 
`;
  return(
      <Container>
      <Router>
          <Routes>
          <Route exact path='/' element={< Home />}></Route>    
          </Routes>         
      </Router>
      </Container>
  );
}
export default App;