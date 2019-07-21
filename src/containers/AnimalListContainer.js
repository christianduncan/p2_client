import React, { Component } from 'react';
import AnimalList from '../components/AnimalList'
import AnimalDetail from '../components/AnimalDetail'

class AnimalListContainer extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
       
    }

    componentDidMount() {
        this.props.fetchAnimals()
    }

    handleClick(e, id) {
        e.preventDefault()
        this.props.fetchAnimal(this.props.animals, id)
    }

 

    render() {
        return (
            <div>
                <div className="split-screen">
                    <AnimalList animals={this.props.animals} handleClick={this.handleClick} />
                </div>
                <div className="split-screen">
                    <div className="animal-details">
                        <AnimalDetail animal={this.props.animals.currentAnimal}  />
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalListContainer