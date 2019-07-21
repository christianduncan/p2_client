import React, { Component } from 'react';

class Animal extends Component {
    render() {
        const animal = this.props.animal
        return (
            <div className="animal-card" id={animal.id} onClick={(e) => { this.props.handleClick(e, animal.id) }}>
                <a href="#" value={animal.url}>
                    <h3>{animal.name}</h3>
                    <img src={animal.imageURL} alt="" height="150" />
                </a>
            </div>
        )
    }
}

export default Animal