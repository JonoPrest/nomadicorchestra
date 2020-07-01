import React from 'react';
import GigDatesCard from '../GigDatesCard/GigDatesCard';
import NomadsLogo from './NomadsLogoTransparent2.png';
import './GigDates.css';
// import { robots } from './robots'

const GigDates = ({ googleData, onRouteChange, upcomingGigs }) => {

	
	return (
			<div className= 'backgroundOverlay'>
			<div className='contentContainer'>
				
				<div className='flex flex-wrap justify-around'>
					{
						googleData.map((user, i) => {
							const today = new Date();
							const eventDate = new Date(googleData[i].Date);
							const todayTime = today.getTime();
							const eventDateTime = eventDate.getTime() + 86400000;
						    console.log(today);


							if (todayTime <= eventDateTime) {
								upcomingGigs += 1;
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
	    	</div>


	);
};

export default GigDates;