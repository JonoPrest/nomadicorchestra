import React, { Component } from 'react';
import Home from './components/Home/Home';
import GigDates from './components/GigDates/GigDates';
import About from './components/About/About';
import Tabletop from 'tabletop';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [{}],
      route: "homePage"
    } 
  }

  componentDidMount() {
    Tabletop.init({
      key: '1MVrHvgpkiaL219Z9o-3ssvN5ZS4XhGjOnfg1KsjE9l4',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    console.log(route);
  }


  render() {

    let page;
    if (this.state.route === "homePage" || this.state.route === "listenPage" || this.state.route === "aboutPage") {
         page = <Home  route={this.state.route} onRouteChange={this.onRouteChange} gigData={this.state.data}/>;
        } else if (this.state.route === "gigDatesPage") {
            page = <GigDates googleData={this.state.data} onRouteChange={this.onRouteChange}/>;
        } else {
            page = <About gigData={this.state.data} onRouteChange={this.onRouteChange}/>;
        }

    return (
    <div className="App">
      {page}
    </div>
  );
  }
  
}

export default App;
