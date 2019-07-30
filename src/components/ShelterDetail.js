import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class ShelterDetail extends Component {

    render() {
        console.log('ShelterDetail props: ', this.props)
        return (
            <div className='shelter-detail'>
            <Card.Group >
                <h2>{this.props.shelter.name}</h2>
                <p>{this.props.shelter.address}</p>
                <p>{this.props.shelter.city}, {this.props.shelter.state}</p>
                <p>{this.props.shelter.url}</p>
            </Card.Group>
            </div>
        )
    }
}

export default ShelterDetail