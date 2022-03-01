export const NEW_LOAN = 'NEW_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const DELETE_LOAN = 'DELETE_LOAN'

export const newLoan = dispatch => (id, movieTitle, rentTime, userId) => {
    return dispatch({
        type: NEW_LOAN,
        payload: {
            id: id,
            movieTitle: movieTitle,
            rentTime: rentTime,
            userId: userId
        }    
    })
}

export const updateLoan = dispatch => (movieTitle, rentTime) => {
    return dispatch({
        type: UPDATE_LOAN,
        payload: {
            movieTitle: movieTitle,
            rentTime: rentTime
        }
    })
}

export const deleteLoan = dispatch => id => {
    return dispatch({
        type: DELETE_LOAN,
        payload: {
            id: id
        }
    })
}
