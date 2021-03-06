import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Tabletop from "tabletop";
import "./App.css";

const App = () => {
  const [data, setData] = useState([{}]);
  const [route, setRoute] = useState("homePage");

  //to be used with bandsintown API
  const [upcomingDates, setUpcomingDates] = useState(0);
  const [bandsintownEvents, setBandsintownEvents] = useState([{"venue": {"name": ""}, "artist": {"image_url": ""}}]);

  useEffect(() => {
    Tabletop.init({
      key: "1MVrHvgpkiaL219Z9o-3ssvN5ZS4XhGjOnfg1KsjE9l4",
      callback: (googleData) => {
        setData(googleData);
      },
      simpleSheet: true,
    });

    fetch(
      "https://rest.bandsintown.com/artists/tom%20mish/?app_id=754a6e57f49254c4a5509b8d6937c214"
    )
      .then((response) => response.json())
      .then((data) => setUpcomingDates(data.upcoming_event_count))
      .catch((err) =>
        console.log("error fetching artist data from bandsintown")
      );

    fetch(
      "https://rest.bandsintown.com/artists/the%20shabs/events/?app_id=754a6e57f49254c4a5509b8d6937c214&date=past"
    )
      .then((response) => response.json())
      .then((data) => setBandsintownEvents(data))
      .catch((err) =>
        console.log("error fetching artist data from bandsintown")
      );
  }, []);

  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      <Home
        route={route}
        onRouteChange={onRouteChange}
        googleData={data}
        bandsintownData={bandsintownEvents}
        upcomingDates={upcomingDates}
      />
    </div>
  );
};

export default App;