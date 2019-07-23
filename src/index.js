import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)






ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" render={(routerProps) => <App {...routerProps}/>}/>
        </Router>)
        
    </Provider>,
    document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
