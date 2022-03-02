export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const UPDATE_USER = 'UPDATE_USER'
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

export const updateUser = (name, email, password) => {
    return {
        type: UPDATE_USER,
        payload: {
            name: name,
            email: email,
            password: password
        }
    }
}

export const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    }
}