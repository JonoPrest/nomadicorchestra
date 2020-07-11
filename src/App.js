import React, { Component } from "react";
import Home from "./components/Home/Home";
import Tabletop from "tabletop";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [{}],
      route: "homePage",
      upcomingGigs: 0,
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1MVrHvgpkiaL219Z9o-3ssvN5ZS4XhGjOnfg1KsjE9l4",
      callback: (googleData) => {
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  

  render() {


    return (
      <div className="App">
        <Home
          route={this.state.route}
          onRouteChange={this.onRouteChange}
          googleData={this.state.data}
          gigData={this.state.data}
        />
        ;
      </div>
    );
  }
}

export default App;