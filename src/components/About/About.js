import React from 'react';
import ReactPlayer from 'react-player';
import './About.css';

const About = ({ onRouteChange, gigData }) => {
return (
	<div className= 'backgroundOverlay'>
		<div className='contentContainer pt5'>
			<div className='aboutContainer'>

				<div className='flex flex-wrap items-center justify-center center'>
					
					<div className='youtubePlayer bg-near-black'>
						<ReactPlayer className='react-player' controls='true' playing="true" wrapper='div' 
				        url="https://www.youtube.com/watch?v=VH6iNrVFzFQ"
				      	/>
				    </div>
				    <div className=' youtubeText pa2 bg-near-black '>
				      	<p className='white center'>
				      		Nomadic Orchestra is a five-piece instrumental dance band based in Cape Town. 
				      		The primary goal of Nomadic Orchestra is to get people moving. 
				      		The band makes an infectious kind of high-energy dance music - even the most prudish find themselves unconsciously tapping their feet. 
				      		Nomadic Orchestra is strongly influenced by traditional music from the countries of South-Eastern Europe: Macedonia, Romania and Serbia. 
				      		They are also influenced by Klezmer, gypsy and circus music as well as contemporary western party music. 
				      		Their musical training brings a strong jazz aesthetic to the band, and thus an emphasis on improvisation. 
				      		The music that the Nomads play is original and composed by members of the band.

				      	</p>
				    </div>  	
		      	</div>
	      	</div>

		</div>
	</div>

);
}

export default About;

