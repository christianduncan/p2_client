import React from 'react'
import { Loader, Grid, Segment, Image} from 'semantic-ui-react'
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import Animal from '../components/Animal'


class Profile extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.id
        fetch(`http://localhost:3001/api/v1/users/${userId}`)
            .then(res => res.json())
            .then(response => {
                this.setState({ user: response })
            })
    }

    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  

    

    render() {
        const { user } = this.props.currentUser
        

        if (user) {
            return (
                <Container>
                    <h1>Favorites</h1>
                    <Card.Group itemsPerRow={3}>
                        {this.props.currentUser.animal.map(animal => <Animal
                            key={animal.id} {...animal}
                            handleFavoriteClick={this.props.handleFavoriteClick}
                            currentUser={this.props.currentUser}
                        />)}
                    </Card.Group>
                </Container>
            )
        } else {
            return <Loader />
        }
    }
}

export default Profile