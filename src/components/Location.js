import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import '../css/Template.css'

const AnyReactComponent = ({ text }) =>(
  <span className="location"><i className="fas fa-map-marker-alt"></i> Our Headquaters</span>
) 
const greatPlaceStyle = {
  height: '50vh', 
  width: '90%'
}

 
class Location extends Component {
  static defaultProps = {
    center: {
        lat: 43.64884505746758, 
        lng: -79.52618288676912,
    },
    zoom: 17
  };
 
  
  render() {
    return (
      <div style={greatPlaceStyle}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCWAf2ixoqvH9Yh025RKocpDnMrT2Z3CPM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        <AnyReactComponent
            lat={43.64884505746758}
            lng={-79.52618288676912}
            text={'Our Headquaters'}
        />
        </GoogleMapReact>

        <hr></hr>
      </div>
    );
  }
}
 
export default Location;

