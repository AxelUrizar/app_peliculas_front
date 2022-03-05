import { FETCH_MOVIES_SUCCESS } from "../actions/fetchMovies";    

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return action.payload
    
        default:
            return state
    }
}

export default reducer