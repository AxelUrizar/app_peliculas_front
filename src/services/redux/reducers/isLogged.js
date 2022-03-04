import { LOGGED, NOT_LOGGED } from "../actions/isLogged";

const reducer = (state = false, action) => {
    switch (action.type) {
        case LOGGED:
            return state = true;

        case NOT_LOGGED:
            return state = false;
    
        default:
            return state
    }
}

export default reducer
