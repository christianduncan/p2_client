
import React, { Component } from 'react';
import Animal from './Animal'
import SearchBar from '../components/SearchBar'
import { Card, Container } from 'semantic-ui-react';

class AnimalList extends Component {

    renderAnimal = () => {
        const animalList = this.props.animals.animals || []
        return (
            <div className="animal-list">
            {animalList.map(animal => <Animal handleFavoriteClick={this.props.handleFavoriteClick} 
        currentUser={this.props.currentUser} key={animal.id} {...animal} handleClick={this.props.handleClick} />)}
        </div>
        )
    }

    filterAnimal = () => {
        const animalList = this.props.animals.animals || []
        let matched = animalList.filter(animal => {
            return animal.name.toLowerCase().includes(this.props.searchTerm)
        }
        )
        return (
            <div className="animal-list">
            {matched.map(animal => <Animal
            key={animal.id}
            handleFavoriteClick={this.props.handleFavoriteClick}
            currentUser={this.props.currentUser}
            handleClick={this.props.handleClick}
            {...animal}
        />)}
        </div>
        )
    }
    render() {
            return (
                <div>
                    <SearchBar handleSearch={this.props.handleSearch} showNoResults={false} />
                    <br></br>
                    
                        <Card.Group itemsPerRow={1}>
                            {this.props.searchTerm ? this.filterAnimal() : this.renderAnimal()}
                        </Card.Group>
                    
                </div>


            )
        }

    }

export default AnimalList