import React, { Component } from 'react';
import { Map,GoogleApiWrapper,Marker } from "google-maps-react";

export class MapContainer extends Component {
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
    const styles = {
      width: "40%", 
      height: "40%"
    }
    return (
      <Map google={this.props.google}>
      {/* style={styles} */}
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAzvWLF8G8XMIHdUuFnb-VHkHFboYqWxyA')
})(MapContainer);