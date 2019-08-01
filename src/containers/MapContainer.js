import React, { Component } from 'react';
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, MarkerClusterer, GoogleApiWrapper } from 'google-maps-react';

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
    makeAnimalMarkers = () => {

        
        const animalLi = this.props.animals.animals || []
        
     
        
        
       const markery = animalLi.map(animalMark => 
           
         <Marker 
            onClick={this.onMarkerClick}
            position={{lat: animalMark.latitude, lng: animalMark.longitude}}
            name={animalMark.name + "'s location"}
            address={animalMark.address1 + " , " + animalMark.city + " , " + animalMark.state}
            image={animalMark.imageURL}
            phone={animalMark.phone}
               icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
               email={animalMark.email} 
            key={animalMark.id}
            />
       
            
       )
       console.log(markery)
       return markery
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
                    onClick={this.makeAnimalMarkers()}
                    
                    
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        position={pos}
                        
                        image={this.props.currentUser.avatar_url}   
                        name={this.props.currentUser.name + "'s Location"}
                    />
                    
                    {this.makeAnimalMarkers()}
                  
                    
                    <InfoWindow
                        marker={this.state.activeMarker}
                        
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <img id='marker' src={this.state.selectedPlace.image} alt=''/>
                            <h1>{this.state.selectedPlace.name}</h1>
                            <p>{this.state.selectedPlace.address}</p>
                            <p>{this.state.selectedPlace.phone}</p>
                            <p>{this.state.selectedPlace.email}</p>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjdftCyeiA4-PwibS1-9JB0h2iUBbNKAc') //google trial api explicitly exposed
})(MapContainer)
