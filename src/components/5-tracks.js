import React from 'react';
import styled from 'styled-components';
import '../styles/5-tracks.css'
import ai from '../assets/memory_alt.png'
import blockchain from '../assets/toll.png'
import cybersecurity from '../assets/lock.png'
import iot from '../assets/mfg_nest_yale_lock.png'
import open from '../assets/tips_and_updates.png'
import cloud from '../assets/cloud_download.png'
import divider from '../assets/divider.png'
const Section = styled.div`
	width: 90rem;
	height: 44.625rem;
	flex-shrink: 0;
	display:flex;
	justify-content:center;
	align-items: center;
	position:relative;

  `;


function Tracks () {
	return (
		<Section  id="track">  
			<div className='gradient-bg1'></div>
			<div className='gradient-bg2'></div>
        	<div className='tracks-container'>
				<div className='gradient-bg3'></div>
				<div className='tracks-title'>Tracks</div>
				<div className='tracks-section'>
					<img src={divider} alt='divider-' className='divider'/>
					<div className='track'>
						<img alt='' className='track-image' src={ai}></img>
						<span className='track-name'>Artificial Intelligency & <br/>Machcine Learning
						</span>
					</div>

					<div className='track'>
						<img alt='' className='track-image' src={blockchain}></img>
						<span className='track-name'>Blockchain <br/> Cryptocurrency</span>
					</div>
					<div className='track'>
						<img alt='' className='track-image' src={cybersecurity}></img>
						<span className='track-name'>Cybersecurity</span>
					</div>
					<div className='track'>
						<img alt='' className='track-image' src={iot}></img>
						<span className='track-name'> Internet of Things[IoT]</span>
					</div>
					<div className='track'>
						<img alt='' className='track-image' src={open}></img>
						<span className='track-name'>Open Innovation</span>
					</div>
					<div className='track'>
						<img alt='' className='track-image' src={cloud}></img>
						<span className='track-name'>Cloud and DevOps</span>
					</div>


				</div>


			</div>

             
        </Section>  
	);
}
export default Tracks;
