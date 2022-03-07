import { FETCH_TOKENS } from "../actions/tokens";

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOKENS:
            return action.payload
    
        default:
            return state
    }
}

export default reducer