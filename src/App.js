import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Tabletop from "tabletop";
import "./App.css";

const App = () => {
  const [data, setData] = useState([{}]);
  const [route, setRoute] = useState("homePage");

  useEffect(() => {
    Tabletop.init({
      key: "1MVrHvgpkiaL219Z9o-3ssvN5ZS4XhGjOnfg1KsjE9l4",
      callback: (googleData) => {
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      <Home route={route} onRouteChange={onRouteChange} googleData={data} />;
    </div>
  );
};

export default App;