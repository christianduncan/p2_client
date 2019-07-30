import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            center: {
                lat:0,
                lng:0
            }
        }
    }
    
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState({
                        center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                        }
                    })
                   
                }
            )
        } else {
            console.log('error')
        }
    }

        componentDidMount(){
            this.getGeoLocation()
        }
    render() {
        this.getGeoLocation()
        if (!this.props.google) {
            return <div>Loading...</div>;
        }
        
        
        const pos = { lat: this.state.center.lat, lng: this.state.center.lng }
        
        return (
            <div>
                <Map
                    style={{
                        minWwidth: "200px",
                        minHeight: "200px"
                    }}
                    google={this.props.google}
                    center={this.state.center}
                    zoom={14}
                    
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        position={pos}
                            
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjdftCyeiA4-PwibS1-9JB0h2iUBbNKAc')
})(MapContainer)
