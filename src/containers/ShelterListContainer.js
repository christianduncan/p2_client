
import React, { Component } from 'react';
import ShelterList from '../components/ShelterList'
import ShelterDetail from '../components/ShelterDetail'


class ShelterListContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchShelters()
    }

    handleClick(e, id) {
        e.preventDefault()
        this.props.fetchShelter(this.props.shelters, id)
    }

    render() {
        console.log('container props: ', this.props)
        console.log('ShelterListContainer: ', this.props)
        return (
            <div>
                
                    <ShelterList shelters={this.props.shelters} handleClick={this.handleClick} />
               
            </div>
        )
    }
}

export default ShelterListContainer