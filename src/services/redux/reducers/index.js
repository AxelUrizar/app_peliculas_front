import { combineReducers } from "redux";
import usersReducer from './users'
import loansReducer from './loans'
import isLoggedReducer from './isLogged'
import fetchMoviesReducer from './fetchMovies'

export default combineReducers({
    users: usersReducer,
    loans: loansReducer,
    isLogged: isLoggedReducer,
    movies: fetchMoviesReducer
})