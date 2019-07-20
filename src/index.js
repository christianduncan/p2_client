import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { combineReducers } from 'redux'
import animalsReducer from './animals_reducer.rb'
import sheltersReducer from './shelters_reducer.rb'

const rootReducer = combineReducers({
    animals: animalsReducer,
    shelters: sheltersReducer,
})




ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default rootReducer