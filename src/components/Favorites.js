import React from 'react'
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import Animal from './Animal'



class Favorites extends React.Component {




    render() {
        console.log(this.props)
        return (
            <Container>
                <h1>Favorites</h1>
                <Card.Group itemsPerRow={3}>
                    {this.props.currentUser.animals.map(animal => <Animal
                        key={animal.id} {...animal}
                        handleFavoriteClick={this.props.handleFavoriteClick}
                        currentUser={this.props.currentUser}
                    />)}
                </Card.Group>
            </Container>
        )
    }


}

export default Favorites