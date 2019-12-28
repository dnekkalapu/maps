import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React from 'react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const cordinates = {
      stores: [{latitude: 38.627003, longitude: -90.199402},
                 {latitude: 47.49855629475769, longitude: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407},
            ]
    }

class GoogleMapContainer extends React.Component {
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
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     label={`${index}`}
     onClick={this.handleToggleOpen} />
    })
  }
render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 38.627003, lng: -90.199402}}
        >
         {this.displayMarkers()}
         {this.state.isOpen &&
           <InfoWindow onCloseClick={this.handleToggleClose} visible={this.state.isOpen} marker={this.state.activeMarker}>
            <p style={{color : 'black'}}>Sample Marker Info. </p>
          </InfoWindow>
         }
        </Map>
        </div>
    );

  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD-o4wVdKC_0BbbPmgrMshFTYJbTzChFA0',   
})(GoogleMapContainer)