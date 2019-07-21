
import React, { Component } from 'react';
import Animal from './Animal'

class AnimalList extends Component {
    render() {
        const animalList = this.props.animals.animals || []
        return (
            <div className="animal-list">
                {animalList.map(animal => <Animal key={animal.id} animal={animal} handleClick={this.props.handleClick} />)}
            </div>
        )
    }
}

export default AnimalList