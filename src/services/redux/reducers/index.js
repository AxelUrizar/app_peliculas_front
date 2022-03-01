import { combineReducers } from "redux";
import usersReducer from './users'
import loansReducer from './loans'

export default combineReducers({
    users: usersReducer,
    loans: loansReducer
})