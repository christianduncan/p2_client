import React from 'react'
import { Loader, Grid, Segment, Image} from 'semantic-ui-react'
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import AnimalDetail from '../components/AnimalDetail'



class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }


    handleClick(e, id) {
        e.preventDefault()
        this.props.fetchAnimal(this.props.animals, id)
    }
    
    componentDidMount() {
        const userId = this.props.match.params.id
        fetch(`http://localhost:3001/api/v1/users/${userId}`)
            .then(res => res.json())
            .then(response => {
                this.setState({ user: response })
            })
        this.props.fetchAnimals()
    }

    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  

    

    render() {
        
        console.log(this.props.currentUser)

        if (this.props.currentUser) {
            return (
                <div>
                    
                    
                    <Container textAlign={'left'} >
                        
                        <Icon.Group size='huge'>
                            
                            <Icon color={'teal'} name='mail'/>
                        </Icon.Group>
                            <Button.Group>
                            <Button color={'facebook'} class="ui facebook button">
                                <i class="facebook icon"></i>
                                Facebook
                            </Button>
                        
                        
                        <Button color={'twitter'} class="ui twitter button">
                            <i class="twitter icon"></i>
                            Twitter
                        </Button>
                        </Button.Group>
                        
                    </Container>
                <Container centered text>
                    
                        
                        <h1>{this.props.currentUser.name.charAt(0).toUpperCase() + this.props.currentUser.name.slice(1)}'s Watchlist</h1>
                    
                    <br></br>
                    <Card.Group className="profile-details" >
                        {this.props.currentUser.animals.map(animal => <AnimalDetail
                            
                            animal={animal}
                            handleClick={this.handleClick}
                            handleFavoriteClick={this.props.handleFavoriteClick}
                            currentUser={this.props.currentUser}
                        />)}
                    </Card.Group>
                    
                </Container>
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

export default Profile