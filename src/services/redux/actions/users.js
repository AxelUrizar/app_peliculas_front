import backendCalls from "../../axios/backend-calls"
import { fetchLoansUser } from "./loans"

export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
export const DELETE_USER = 'DELETE_USER'
export const GET_USER = 'GET_USER'

export const addUser = (name, email, password) => {
    return (dispatch) => {
        backendCalls.newUser(name, email, password)
            .then(res => {
                console.log(res.data.user)
                console.log(res.data.token)
                const user = res.data.user
                const token = res.data.token
                localStorage.setItem('user', token)
                dispatch(addUserSuccess(user._id, user.name, user.email, user.password, user.role))
            })
            .catch(err => console.log(err))
    }
}
    const addUserSuccess = (id, name, email, role) => {
        console.log(id, name, email, role)
        return {
            type: ADD_USER,
            payload: {
                id: id,
                name: name,
                email: email,
                role: role,
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
    return dispatch => {
        backendCalls.logoutUser()
            .then(dispatch(logoutUserSuccess()))
            .catch(err => console.log(err))
    }
    
}
    const logoutUserSuccess = () => {
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