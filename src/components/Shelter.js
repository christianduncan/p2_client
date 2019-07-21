
import React, { Component } from 'react';

class Shelter extends Component {
    render() {
        const shelter = this.props.shelter
        return (
            <div className="shelter-card" id={shelter.id} onClick={(e) => { this.props.handleClick(e, shelter.id) }}>
                
                    <h3><a href={shelter.url}>{shelter.name}</a></h3>
                    <p>{shelter.address}</p>
                    <p>{shelter.city}, {shelter.state}</p>
                
            </div>
        )
    }
}

export default Shelter