import React from 'react';
import 'tachyons';
import './GigDatesCard.css';

const GigDatesCard = (props) => {

	const { date, buyTickets, description, image, venue } = props;
	
	// const date = (i) => googleData[i].Date;
	// const buyTickets = (i) => googleData[i].buyTickets;
	// const description = (i) => googleData[i].Description;
	


return (
	<div className='ma3'>
	
		<div className="card  datesBackground shadow-5 hidden ba mv4">
		  <h1 className="f4 bg-near-black white mv0 pv2 ph3">{date} - {venue}</h1>
		  <div className=" pa3 bt">
		  	<div className=' flex justify-center flex-wrap center'>
		  		<div className=' cardText ma3'>
			    	<p className="f6 f5-ns lh-copy measure mv0">{description}</p>
			    </div>
			    <div className=' cardImage ma3'>
			    	{ image.length > 0 &&
			   		 <img   alt='' src={image}/>
			   		}
		   		</div>
			</div>
		    <a className=" f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-mid-gray" 
		    	href={buyTickets} target="_blank">Buy Tickets</a>
		  </div>
		</div>

	</div>



);
}

export default GigDatesCard;

