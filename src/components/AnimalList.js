
import React, { Component } from 'react';
import Animal from './Animal'
import SearchBar from '../components/SearchBar'
import { Card, Container} from 'semantic-ui-react';

class AnimalList extends Component {

    renderAnimal = () => {
        const animalList = this.props.animals.animals || []
        return (
            
            animalList.map(animal => <Animal handleFavoriteClick={this.props.handleFavoriteClick} 
        currentUser={this.props.currentUser} key={animal.id} {...animal} handleClick={this.props.handleClick} />)
        
        )
    }

    filterAnimal = () => {
        const animalList = this.props.animals.animals || []
        let matched = animalList.filter(animal => {
            return animal.name.toLowerCase().includes(this.props.searchTerm)
        }
        )
        return (
            
            matched.map(animal => <Animal
            key={animal.id}
            handleFavoriteClick={this.props.handleFavoriteClick}
            currentUser={this.props.currentUser}
            handleClick={this.props.handleClick}
            {...animal}
        />)
        
        )
    }
    render() {
            return (
                
                    
                    
                    
                
                    <Container className='scroll'>
                        <Card.Group itemsPerRow={4}>
                            {this.props.searchTerm ? this.filterAnimal() : this.renderAnimal()}
                        </Card.Group>
                    </Container>
                    
                


            )
        }

    }

export default AnimalList