import React, { Component } from 'react';
import { Card, Image, Container } from 'semantic-ui-react'
import {
    FacebookShareButton,
    
    TwitterShareButton,
    
    RedditShareButton,
    
    EmailShareButton,
} from 'react-share';

class AnimalDetail extends Component {

    render() {
        
        let description = "no description available."
        if (this.props.animal.description !== "") {
            description = this.props.animal.description
        }

       

        return (
            
            <Container textAlign={'left'}>
                <Card id={'show'} raised>
                
                    <Image  centered fluid src={this.props.animal.imageURL} alt="" />
                <Card.Content >
                <Card.Header>{this.props.animal.name}</Card.Header>
                
                        <Card.Description>Breed: {this.props.animal.breed}</Card.Description>
                        <Card.Description>Gender: {this.props.animal.gender}</Card.Description>
                        <Card.Description>Age: {this.props.animal.age}</Card.Description>
                        <Card.Description>Size: {this.props.animal.size}</Card.Description>
                <Card.Description>Description: {description}</Card.Description>
                <h4> To adopt {this.props.animal.name} please reference contact information below!</h4>
                <p>Email: {this.props.animal.email}</p>
                <p>Phone: {this.props.animal.phone}</p>
                <p>{this.props.animal.name} is waiting for you at {this.props.animal.address1} in {this.props.animal.city},{this.props.animal.state}</p>
                </Card.Content>
                
             
                
                </Card>
            </Container>  
            
        )
    }
}

export default AnimalDetail