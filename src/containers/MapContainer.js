import React, { Component } from 'react';
import Geocode from "react-geocode";
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
    getAnimalAddress = () => {

        const animalLi = this.props.animals.animals || []
        const animalAddress = animalLi.map(animal => animal.address1 + " " + animal.city)
        const aniCoord = animalAddress.map(animalAd => this.getAnimalCoord(animalAd))
        
        console.log(aniCoord)
        
    //     aniCoord.map(animalMark => <Marker 
    //         onClick={this.onMarkerClick}
    //         position={{lat: animalMark[0], lng: animalMark[1]}}
    //         name={"Current location"}/>) 
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

    // Get latidude & longitude from address.
    getAnimalCoord = (address) => {
        Geocode.setApiKey('AIzaSyAjdftCyeiA4-PwibS1-9JB0h2iUBbNKAc');
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location
                console.log({lat,lng})
                return {lat,lng}
                
            },
            error => {
                console.error(error)
            }
        )
    }


    componentDidMount(){
        this.getGeoLocation()
        this.props.fetchAnimals()
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
                    onClick={this.getAnimalAddress}
                    
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        position={pos}
                            
                        name={this.props.currentUser.name + "'s Location"}
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
