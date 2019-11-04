import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom'
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'


import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AnimalListContainer from './containers/AnimalListContainer'

import MapContainer from './containers/MapContainer'

import { fetchAnimals, fetchAnimal } from './actions/animalActions'



class App extends Component {
  state = {
    currentUser: null,
    animals: [],
    searchTerm: '',
    favorited: false
  }

  handleFavoriteClick = (animalID) => {
    
    if (this.state.currentUser !== null) {
      fetch(`http://localhost:3001/api/v1/favorite/${this.state.currentUser.id}/animal/${animalID}`)
        .then(response => response.json())
        .then((data) => {
          console.log('success')
          this.setState({
            currentUser: data,
          })
        })
    } else {
      alert('You are not logged in')
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }
  

  handleFavorited = (animalID) => {

    if (this.state.currentUser && this.state.currentUser.animals.find(animal => animal.id === animalID)) {

      return true
    } else {
      return false
    }
  }

  

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      // let's go get some user data
      fetch("http://localhost:3001/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            localStorage.removeItem("user_id")
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
    }
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logOut = () => {
    this.props.history.push("/login")
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("token")

  }

  render() {
    
    return (
    <Router>
      <div>
      <Grid>
        <Navbar handleSearch={this.handleSearch} currentUser={this.state.currentUser} logOut={this.logOut} />
        <Grid.Row centered>
          <Switch>
            
            <Route exact path="/login" render={(routerProps) => {
              return <LoginForm setCurrentUser={this.setCurrentUser} {...routerProps} />
            }} />
            <Route path="/signup" render={(routerProps) => {
              return <SignupForm setCurrentUser={this.setCurrentUser} {...routerProps} />
            }} />
          </Switch>
        </Grid.Row>
              <Route path="/users/:id" render={routerProps => <Profile
                currentUser={this.state.currentUser}
                handleFavoriteClick={this.handleFavoriteClick}
                handleFavorited={this.handleFavorited}
                handleSearch={this.handleSearch}
                favorites={this.state.favorites}
                fetchAnimals={this.props.fetchAnimals} fetchAnimal={this.props.fetchAnimal}
                animals={this.props.animals}
                {...routerProps} />} />
        

          <Route path="/animals" render={(props) => <AnimalListContainer{...props} 
          currentUser={this.state.currentUser} handleFavoriteClick={this.handleFavoriteClick}
          handleFavorited={this.handleFavorited}
          handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}
          fetchAnimals={this.props.fetchAnimals} fetchAnimal={this.props.fetchAnimal}  animals={this.props.animals} />} />
          <Route path="/maps" render={(props) => <MapContainer {...props}
              currentUser={this.state.currentUser} animals={this.props.animals} fetchAnimals={this.props.fetchAnimals}
          />} />
      </Grid>
      
        </div>
    </Router>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => {
      dispatch(fetchAnimals())
    },
    fetchAnimal: (animals, id) => {
      dispatch(fetchAnimal(animals, id))
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//add commit