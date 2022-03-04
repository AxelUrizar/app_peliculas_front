import { combineReducers } from "redux";
import usersReducer from './users'
import loansReducer from './loans'
import isLoggedReducer from './isLogged'

export default combineReducers({
    users: usersReducer,
    loans: loansReducer,
    isLogged: isLoggedReducer
})