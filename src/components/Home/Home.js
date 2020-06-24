import React from 'react';
import fullLogo from './fullLogo1.png';
import About from '../About/About';
import Listen from '../Listen/Listen';
import { SocialIcon } from 'tachyons-react-social-icons';


import './home.css';

const Home = ({ onRouteChange, gigData, route }) => {
return (
	<div>
		<div className='background'>
			<div className="allNav flex flex-wrap items-center">
				<img className='animate__animated animate__bounce logo' src={fullLogo} alt=''/>
				<div className="nav flex flex-wrap justify-around ph3 mt1">
				  <a className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black" onClick={() => onRouteChange('aboutPage')} href="#0">About</a>
				  <a className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black" onClick={() => onRouteChange('listenPage')} href="#0">Listen</a>
				  <a className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Contact</a>
				  {gigData.length > 1 && <a onClick={() => onRouteChange('gigDatesPage')} className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Gig Dates</a>}
				</div>
			</div>
			
			{route === 'listenPage' && <Listen/>}
			{route === 'aboutPage' && <About/>}

			<footer className='footer'>
				<div className='social flex justify-between'>
					<SocialIcon url="https://www.facebook.com/NomadicOrchestra/" color='rgba(60,60,60,1)'/>
					<SocialIcon url="https://www.instagram.com/nomadicorchestra/" color='rgba(60,60,60,1)'/>
					<SocialIcon url="https://www.youtube.com/channel/UCgMOgMDBY1tzjjyPRdwMlqA" color='rgba(60,60,60,1)'/>
					<SocialIcon url="https://open.spotify.com/artist/27EGFQK4v27KEpLcdJhORE" color='rgba(60,60,60,1)' />
					<SocialIcon url="https://soundcloud.com/nomadicorchestra" color='rgba(60,60,60,1)'/>
					<SocialIcon network='email' url="mailto:info@nomadicorchestra.com" color='rgba(60,60,60,1)'/>


				</div>
			</footer>
		</div>
		

	</div>

);
}

export default Home;

