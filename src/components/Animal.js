import React, { Component } from 'react';
import { Card, Button, Icon, Image} from 'semantic-ui-react'


class Animal extends Component {


    state = {
        favorited: false
    }
    handleFavorited = (animalID) => {
        
        if (this.props.currentUser && this.props.currentUser.animals.find(animal => animal.id === animalID)) {
            
            return true
        } else {
            return false
        }
    }



    render() {
        
        return (
            <Card onClick={(e) => { this.props.handleClick(e, this.props.id) }} className="ui-centered-card" id={this.props.id} centered>
                <Image className='resize' src={this.props.imageURL} alt=""   />
                <Card.Content>     
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Description>{this.props.city}, {this.props.state}</Card.Description>
                </Card.Content>
                
                <Button color={'teal'}
                    onClick={() => {
                       this.props.handleFavoriteClick(this.props.id)
                        
                    }}>
                    <Icon color='red' name={!this.handleFavorited(this.props.id) ? 'heart outline' : 'heart'} />
                    
                </Button>
                
            </Card>
        )
    }
}

export default Animal