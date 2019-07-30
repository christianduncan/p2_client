import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjdftCyeiA4-PwibS1-9JB0h2iUBbNKAc')
})(MapContainer)
