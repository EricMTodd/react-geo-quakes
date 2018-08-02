import React, { Component } from 'react';
import QuakesList from "./QuakesList";
import MapContainer from "./MapContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quakes: []
    }
  }

  getQuakes = async () => {
    try {
      const quakes = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson");
      const quakesJson = await quakes.json();
      console.log("quakesJson:", quakesJson);
      return quakesJson;
    } catch (err) {
      console.log(err, "error in catch block.");
      return err;
    }
  }

  componentDidMount() {
    this.getQuakes().then((data) => {
      console.log("data:", data);
      this.setState({quakes: data.features})
    });
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
         <QuakesList quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
