import React from 'react'
import { Loader, Grid, Segment, Image} from 'semantic-ui-react'
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import ProfileDetail from '../components/ProfileDetail'



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
                <Container>
                    
                        
                        <h1 id={'favorites'}>{this.props.currentUser.name.charAt(0).toUpperCase() + this.props.currentUser.name.slice(1)}'s Favorite Animals</h1>
                    
                        <Card.Group id={'favs'}  itemsPerRow={3} >
                        {this.props.currentUser.animals.slice(0).reverse().map(animal => <ProfileDetail
                            
                            animal={animal}
                            key={animal.id} {...animal}
                            handleClick={this.handleClick}
                            handleFavoriteClick={this.props.handleFavoriteClick}
                            handleFavorited={this.props.handleFavorited}
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