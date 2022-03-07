import backendCalls from "../../axios/backend-calls"
import { fetchLoansUser } from "./loans"

export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
export const DELETE_USER = 'DELETE_USER'
export const GET_USER = 'GET_USER'

export const addUser = (id, name, email, password) => {
    return {
        type: ADD_USER,
        payload: {
            id: id,
            name: name,
            email: email,
            password: password
        }
    }
}

export const getUser = () => {
    return (dispatch) => {
        backendCalls.userProfile()
            .then(res => {
                const user = res.data
                dispatch(getUserSucceed(user._id, user.name, user.email, user.role))
                dispatch(fetchLoansUser())
            })
    }
}
    const getUserSucceed = (id, name, email, role) => {
        return {
            type: GET_USER,
            payload: {
                id: id,
                name: name, 
                email: email,
                role: role
            }
        }
    }

export const loginUser = (id, name, email, role, token) => {
    return {
        type: LOGIN_USER,
        payload: {
            id: id,
            name: name,
            email: email,
            role: role,
            token: token
        }
    }
}

export const logoutUser = () => {
    localStorage.removeItem('user')
    return {
        type: LOGOUT_USER
    }
}

export const updateUserName = (id, name) => {
    return {
        type: UPDATE_USER_NAME,
        payload: {
            id: id,
            name: name
        }
    }
}

export const updateUserEmail = (id, email) => {
    return {
        type: UPDATE_USER_EMAIL,
        payload: {
            id: id,
            email: email
        }
    }
}

export const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    }
}