
import React, { Component } from 'react';
import Animal from './Animal'
import SearchBar from '../components/SearchBar'
import { Card, Container} from 'semantic-ui-react';

class AnimalList extends Component {

    renderAnimal = () => {
        const animalLi = this.props.animals.animals || []
        const animalList = animalLi.slice(0).reverse()
        return (
            
            animalList.map(animal => <Animal handleFavoriteClick={this.props.handleFavoriteClick} 
        currentUser={this.props.currentUser} key={animal.id} {...animal} handleClick={this.props.handleClick} />)
        
        )
    }

    filterAnimal = () => {
        const animalLi = this.props.animals.animals || []
        const animalList = animalLi.slice(0).reverse()
        let matched = animalList.filter(animal => {
            return animal.state.toLowerCase().includes(this.props.searchTerm)
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
                    </Card.Group >
                    </Container>
                    
                


            )
        }

    }

export default AnimalList