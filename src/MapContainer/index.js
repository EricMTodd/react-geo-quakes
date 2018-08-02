import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    render() {
        const style = {
            width: '35%',
            height: '50%'
          }
        return (
            <Map
            google={this.props.google}
            style={style}
            initialCenter={{
              lat: 39.742043,
              lng: -104.991531
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        );
      }
    }

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)