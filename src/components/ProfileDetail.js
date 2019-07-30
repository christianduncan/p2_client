import React, { Component } from 'react';
import { Card, Image, Container, Button, Icon } from 'semantic-ui-react'


class ProfileDetail extends Component {

    render() {

        let description = "no description available."
        if (this.props.animal.description !== "") {
            description = this.props.animal.description
        }



        return (

            
                <Card raised>

                    <Image centered fluid src={this.props.animal.imageURL} alt="" />
                    <Card.Content>
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
                <Button color={'teal'}
                    onClick={() => {
                        this.props.handleFavoriteClick(this.props.id)

                    }}>
                    <Icon color='red' name={!this.props.handleFavorited(this.props.id) ? 'heart outline' : 'heart'} />

                </Button>

                    

                </Card>
            

        )
    }
}

export default ProfileDetail