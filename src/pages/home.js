import React from 'react';
import { MainSection } from '../components/2-mainsection';
import Navbar from '../components/1-navbar'
import Prize from '../components/4-prizes'
import About from '../components/3-about';
import Tracks from '../components/5-tracks';
import Sponsers from '../components/7-sponsers';
import Communities from '../components/9-Communities';
import Footer from '../components/10-footer';
import Organizers from '../components/8-organizers';
import Speakers from '../components/6-Speakers';

import '../styles/0-home.css'
function Home() {
 

  return (
    
    <div className='homepage' >
      <div className='Star-bg'>
        <Navbar/>
        <MainSection/>
        <About/>
        <Prize/>
        <Tracks/>
        {/* <Speakers/> */}
        <Sponsers/>
      </div>
      <Organizers/>
      {/* <Communities/> */}
      <Footer/>
    </div>
    
  
  );
}
export default Home;
