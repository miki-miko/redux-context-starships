import axios from 'axios'
import {
    DISCARD_ERROR,
    FETCH_ALL_STARSHIPS_ERROR,
    FETCH_ALL_STARSHIPS_REQUEST,
    FETCH_ALL_STARSHIPS_SUCCESS
} from "./constants";

export const fetchAllShips = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_ALL_STARSHIPS_REQUEST})
        try {
            const {data: starships} = await axios.get('http://localhost:3000/starships')
            dispatch({type: FETCH_ALL_STARSHIPS_SUCCESS, payload: starships})
        }
        catch(e) {
            dispatch({type:FETCH_ALL_STARSHIPS_ERROR, payload: e })
        }
    }
}

export const discardError = () => ({
    type: DISCARD_ERROR,
})
