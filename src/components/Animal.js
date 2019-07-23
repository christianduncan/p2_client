import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'


class Animal extends Component {


    state = {
        favorited: false
    }
    handleFavorited = (animalID) => {
        console.log(this.props.currentUser)
        if (this.props.currentUser && this.props.currentUser.animals.find(animal => animal.id === animalID)) {
            
            return true
        } else {
            return false
        }
    }



    render() {
        
        return (
            <div className="animal-card" id={this.props.id} >
                
                    <h3>{this.props.name}</h3>
                <img src={this.props.imageURL} alt="" height="150" onClick={(e) => { this.props.handleClick(e, this.props.id) }}/>
                <Button
                    onClick={() => {
                       this.props.handleFavoriteClick(this.props.id)
                        
                    }}>
                    <Icon basic color='red' centered name={!this.handleFavorited(this.props.id) ? 'heart outline' : 'heart'} />
                </Button>
                
            </div>
        )
    }
}

export default Animal