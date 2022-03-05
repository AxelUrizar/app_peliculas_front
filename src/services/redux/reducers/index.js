import { combineReducers } from "redux";
import usersReducer from './users'
import loansReducer from './loans'
import isLoggedReducer from './isLogged'
import moviesReducer from './movies'

export default combineReducers({
    users: usersReducer,
    loans: loansReducer,
    isLogged: isLoggedReducer,
    movies: moviesReducer
})