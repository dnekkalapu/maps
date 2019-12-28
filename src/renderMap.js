import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import React from "react";
import PropTypes from "prop-types";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const cordinates = {
  stores: [
    { latitude: 38.627003, longitude: -90.199402 },
    { latitude: 41.878113, longitude: -87.629799 }
  ]
};

class RenderMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: cordinates.stores,
      isOpen: false
    }
   }

  handleToggleOpen = (props, Marker, e) => {
  console.log('test')
	this.setState({
		isOpen: true,
    activeMarker: Marker
	});
  }

handleToggleClose = () => {
	this.setState({
		isOpen: false
	});
}

  displayMarkers = () => {
    return this.state.markers.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
         label={`${index}`}
          onClick={this.handleToggleOpen} />
      );
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.long }}
        center={{ lat: this.props.lat, lng: this.props.long }}
      >
        {this.displayMarkers()}
        {this.state.isOpen &&
           <InfoWindow onCloseClick={this.handleToggleClose} visible={this.state.isOpen} marker={this.state.activeMarker}>
            <p style={{color : 'black'}}>Sample Marker Info. </p>
          </InfoWindow>
         }
      </Map>
    );
  }
}

RenderMap.propTypes = {
  lat: PropTypes.string,
  long: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyD-o4wVdKC_0BbbPmgrMshFTYJbTzChFA0"
})(RenderMap);
