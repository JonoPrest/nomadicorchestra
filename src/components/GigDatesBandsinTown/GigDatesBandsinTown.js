import React from "react";
import GigDatesBandsinTownCard from "./GigDatesBandsinTownCard";

const GigDatesBandsinTown = ({ bandsintownData }) => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="flex flex-wrap justify-around">
          {bandsintownData.map((user, i) => { 

            let date = "";

            if (bandsintownData[i].datetime) {
              const d = new Date(`${bandsintownData[i].datetime}`);
              const ye = new Intl.DateTimeFormat("en", {
                year: "numeric",
              }).format(d);
              const mo = new Intl.DateTimeFormat("en", {
                month: "short",
              }).format(d);
              const da = new Intl.DateTimeFormat("en", {
                day: "2-digit",
              }).format(d);

              date = (`${da} ${mo} ${ye}`);
            }

            // console.log(bandsintownData[i].datetime);

           let image = ""

           console.log(bandsintownData[i].url);

            return (
              <GigDatesBandsinTownCard
                key={i}
                id={bandsintownData[i].id}
                date={date}
                venue={bandsintownData[i].venue.name}
                description={bandsintownData[i].description}
                image={image}
                buyTickets=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GigDatesBandsinTown;