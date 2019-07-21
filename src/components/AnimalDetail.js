import React, { Component } from 'react';

class AnimalDetail extends Component {

    render() {
        let description = "no description available."
        if (this.props.animal.description !== "") {
            description = this.props.animal.description
        }

       

        return (
            <div>
                <h2>{this.props.animal.name}</h2>
                <img src={this.props.animal.imageURL} alt="" />
                <p>Description: {description}</p>
                
            </div>
        )
    }
}

export default AnimalDetail