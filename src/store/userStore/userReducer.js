import { ADD_USER_ERROR, ADD_USER_REQUEST, ADD_USER_SUCCESS } from './constants'

const defaultState = {
  isLogged: false,
  nome: '',
  cognome: '',
  email: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        loading: true,
      }

    case LOG_OUT_USER:
      return {}

    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case ADD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
