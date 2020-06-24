import React from 'react';
import GigDatesCard from '../GigDatesCard/GigDatesCard';
import NomadsLogo from './NomadsLogoTransparent2.png';
import './GigDates.css';
// import { robots } from './robots'

const GigDates = ({ googleData, onRouteChange }) => {

	
	return (
			<div className='GigDatesBackground'>
				<div className="flex justify-around">
					<div className="nav flex flex-wrap justify-around ph3 mt3">
					<a onClick={() => onRouteChange('homePage')} className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 bg-near-black white b--near-black" href="#0">Home</a>
					  <a onClick={() => onRouteChange('aboutPage')} className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib bg-near-black white b--near-black" href="#0">About</a>
					  <a className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib bg-near-black white b--near-black" onClick={() => onRouteChange('listenPage')} href="#0">Listen</a>
					  <a className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib bg-near-black white b--near-black" href="#0">Contact</a>
					</div>
				</div>
				<div className='flex flex-wrap justify-around'>
					{
						googleData.map((user, i) => {
							const today = new Date();
							const eventDate = new Date(googleData[i].Date);
							const todayTime = today.getTime();
							const eventDateTime = eventDate.getTime() + 86400000;
						    console.log(today);


							if (todayTime <= eventDateTime) {
								return (

								<GigDatesCard 
									key={i} 
									id={googleData[i].id} 
									date={googleData[i].Date} 
									venue={googleData[i].Venue}
									description={googleData[i].Description}
									image={googleData[i].Image}
									buyTickets={googleData[i].buyTickets}
								/>
								);
							}
						})
					}
		    	</div>
	    	</div>

	);
};

export default GigDates;