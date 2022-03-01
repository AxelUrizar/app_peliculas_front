export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const addUser = dispatch => (id, name, email, password) => {
    return dispatch({
        type: ADD_USER,
        payload: {
            id: id,
            name: name,
            email: email,
            password: password
        }
    })
}

export const updateUser = dispatch => (name, email, password) => {
    return dispatch({
        type: UPDATE_USER,
        payload: {
            name: name,
            email: email,
            password: password
        }
    })
}

export const deleteUser = dispatch => id => {
    return dispatch({
        type: DELETE_USER,
        payload: id
    })
}