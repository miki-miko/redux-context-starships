import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import starshipReducer from './starshipStore/starShipReducer'
import userReducer from './userStore/userReducer'

const defaultStore = {
  starships: { starships: [], error: null, loading: false },

  user: {
    isLogged: false,
    nome: '',
    cognome: '',
    email: '',
  },
}

const rootReducer = combineReducers({
  starships: starshipReducer,
  user: userReducer,
})

export const store = createStore(
  rootReducer,
  defaultStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
