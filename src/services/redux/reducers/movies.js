import { SEE_ALL } from "../actions/movies";

import moviedbCalls from "../../axios/moviedb-calls";

const initialState = async () => await moviedbCalls.showMovies()

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case SEE_ALL:
            return action.payload
    
        default:
            return state
    }
}

export default reducer