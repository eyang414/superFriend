import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  contacts: require('./contacts-reducer').default
})

export default rootReducer
