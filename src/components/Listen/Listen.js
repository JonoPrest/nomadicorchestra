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
	<div>
		<div className='listenWrapper flex flex-wrap justify-around items-center center'>
			<div className='ma3 mw6'>
		      	<ReactPlayer className='center' controls='true'  width="20rem"
		        url="https://soundcloud.com/nomadicorchestra"
		      	/>
	      	</div>
	      	<div className="gridLayout mw6">
		      	<div className="albumCard ma2 shadow-5 hidden ba mv4">	
		      		<p className="center bg-near-black f4 mw5 white mv0 pv2 ph3">Buy "Love At Last" on itunes</p>
			      	<Tilt className="Tilt center shadow-3 link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 200, width: 200 }}>
						 <div className="Tilt-inner"><img alt='' src={LoveAtLast}/></div>
					</Tilt>
				</div>
				<div className="albumCard ma2 shadow-5 hidden ba mv4">	
		      		<p className="center bg-near-black f4 mw5 white mv0 pv2 ph3">Buy "Move Your Things" on itunes</p>
			      	<Tilt className="Tilt center shadow-3 link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 200, width: 200 }}>
						 <div className="Tilt-inner"><img alt='' src={MoveYourThings}/></div>
					</Tilt>
				</div>
				<Tilt className="ma2 Tilt center link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 80, width: 200 }}>
					 <div className="Tilt-inner"><img alt='' src={ListenOnSpotify}/></div>
				</Tilt>	
				<Tilt className="ma2 Tilt center link pointer" options={{ max : 20,  axis: "x"}} style={{ height: 80, width: 200 }}>
					 <div className="Tilt-inner"><img alt='' src={ListenOnAppleMusic}/></div>
				</Tilt>
			</div>
		</div>

	</div>
);
}

export default Listen;

