export const fetchAllShips = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALL_STARSHIPS_REQUEST })
    try {
      const { data: starships } = await axios.get(
        'http://localhost:3000/starships'
      )
      dispatch({ type: FETCH_ALL_STARSHIPS_SUCCESS, payload: starships })
    } catch (e) {
      dispatch({ type: FETCH_ALL_STARSHIPS_ERROR, payload: e })
    }
  }
}

export const addShip = (starship) => {
  return async (dispatch) => {
    dispatch({ type: ADD_STARSHIP_REQUEST })
    try {
      const { data } = await axios.post(
        'http://localhost:3000/starships',
        starship
      )
      dispatch({ type: ADD_STARSHIP_SUCCESS, payload: data })
    } catch (e) {
      dispatch({ type: ADD_STARSHIP_ERROR, payload: e })
    }
  }
}
