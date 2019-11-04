import { combineReducers } from 'redux'
import animalsReducer from './animalsReducer'


const rootReducer = combineReducers({
    animals: animalsReducer
})

export default rootReducer