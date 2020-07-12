import React from 'react';
import GigDatesCard from '../GigDatesCard/GigDatesCard';
import './GigDates.css';
// import { robots } from './robots'

const GigDates = ({ googleData }) => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="flex flex-wrap justify-around">
          {googleData.map((user, i) => {
            const today = new Date();
            const eventDate = new Date(googleData[i].Date);
            const todayTime = today.getTime();
            const eventDateTime = eventDate.getTime() + 86400000;

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
                  ticketPrice={googleData[i].ticketPrice}
                  
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GigDates;
