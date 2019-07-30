
import React, { Component } from 'react';
import Shelter from './Shelter'
import { Card, Container } from 'semantic-ui-react';

class ShelterList extends Component {
    render() {
        const shelterList = this.props.shelters.shelters || []
        return (
        
            <Card.Group itemsPerRow={3}>
                {shelterList.map(shelter => <Shelter key={shelter.id} shelter={shelter} handleClick={this.props.handleClick} />)}
            </Card.Group>
       
        )
    }
}

export default ShelterList