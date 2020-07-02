import React from 'react';
import ReactPlayer from 'react-player';
import Tilt from 'react-tilt'
import LoveAtLast from './LoveAtLast.jpg';
import MoveYourThings from './MoveYourThings.jpg';
import ListenOnSpotify from './ListenOnSpotifyT.png';
import ListenOnAppleMusic from './ListenOnAppleMusicT.png';
import './Listen.css';


const Listen = ({ onRouteChange, gigData }) => {
return (
	<div className= 'backgroundOverlay'>
		<div className='contentContainer pt4'>
			<div className='listenContainer'>
				
		      	<div className="flex flex-wrap justify-around ">
			      	<div className="albumCard ma2 shadow-5 hidden br4 ">	
			      		<p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">Love At Last</p>
				      	<Tilt className="Tilt center shadow-3 link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 350, width: 350 }}>
							 <div className="Tilt-inner"><img alt='' src={LoveAtLast}/></div>
						</Tilt>
					</div>
					<div className="albumCard ma2 shadow-5 hidden br4 ">	
			      		<p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">Move Your Things</p>
				      	<Tilt className="Tilt center shadow-3 link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 350, width: 350 }}>
							 <div className="Tilt-inner"><img alt='' src={MoveYourThings}/></div>
						</Tilt>
					</div>
				
				</div>

				<div className="albumCard shadow-5 hidden br4 ma5">	
			      		<p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">Listen on Soundcloud</p>
				      	<div className=' '>
					      	<ReactPlayer className='' controls='true'  width="100%"
					        url="https://soundcloud.com/nomadicorchestra"
					      	/>
				      	</div>
					</div>

				
			</div>

		</div>
	</div>
);
}

export default Listen;

