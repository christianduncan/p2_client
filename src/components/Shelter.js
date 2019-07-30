
import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react'

class Shelter extends Component {
    render() {
        const shelter = this.props.shelter
        return (
            
            <Card  className="ui-centered-card" id={'show'} onClick={(e) => { this.props.handleClick(e, shelter.id) }}>
                    <h3 ><a href={shelter.url}>{shelter.name}</a></h3>
                    <p>{shelter.address}</p>
                    <p>{shelter.city}, {shelter.state}</p>
                </Card>
            
        )
    }
}

export default Shelter