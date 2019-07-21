import { combineReducers } from 'redux'
import animalsReducer from './animalsReducer'
import sheltersReducer from './sheltersReducer'

const rootReducer = combineReducers({
    animals: animalsReducer,
    shelters: sheltersReducer,
})

export default rootReducer