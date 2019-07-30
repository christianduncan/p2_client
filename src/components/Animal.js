import React, { Component } from 'react';
import { Card, Button, Icon, Image} from 'semantic-ui-react'


class Animal extends Component {




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
                    <Icon color='red' name={!this.props.handleFavorited(this.props.id) ? 'heart outline' : 'heart'} />
                    
                </Button>
                
            </Card>
        )
    }
}

export default Animal