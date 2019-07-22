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
                <p>Breed(size): {this.props.animal.breed} 
                 ({this.props.animal.size})</p>
                <p>Age: {this.props.animal.age}-{this.props.animal.gender}</p>
                <p>Description: {description}</p>
                <h4> To adopt {this.props.animal.name} please reference contact information below!</h4>
                <p>Email: {this.props.animal.email}</p>
                <p>Phone: {this.props.animal.phone}</p>
                <p>{this.props.animal.name} is waiting for you at {this.props.animal.address1} in {this.props.animal.city},{this.props.animal.state}</p>
                <h1>🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾</h1>
                
            </div>
        )
    }
}

export default AnimalDetail