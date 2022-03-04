export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
export const DELETE_USER = 'DELETE_USER'

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

export const loginUser = (id) => {
    return {
        type: LOGIN_USER,
        payload: id
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