import React from "react";
import GigDatesCard from "../GigDatesCard/GigDatesCard";
import "./GigDates.css";
// import { robots } from './robots'

const GigDates = ({ googleData }) => {


  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="flex flex-wrap justify-around">
          {googleData.filter((user, i) => {
            const today = new Date();
            const eventDate = new Date(googleData[i].Date);
            const todayTime = today.getTime();
            const eventDateTime = eventDate.getTime() + 86400000;

            return todayTime <= eventDateTime;
              
            
          }).map((user, i) => {
            return (<GigDatesCard
                              key={i}
                              id={googleData[i].id}
                              date={googleData[i].Date}
                              venue={googleData[i].Venue}
                              description={googleData[i].Description}
                              image={googleData[i].Image}
                              buyTickets={googleData[i].buyTickets}
                            />)
          })}
        </div>
      </div>
    </div>
  );
};

export default GigDates;