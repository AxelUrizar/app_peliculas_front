export const NEW_LOAN = 'NEW_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const DELETE_LOAN = 'DELETE_LOAN'

export const newLoan = (id, movieTitle, rentTime, userId) => {
    return {
        type: NEW_LOAN,
        payload: {
            id: id,
            movieTitle: movieTitle,
            rentTime: rentTime,
            userId: userId
        }    
    }
}

export const updateLoan = (movieTitle, rentTime) => {
    return {
        type: UPDATE_LOAN,
        payload: {
            movieTitle: movieTitle,
            rentTime: rentTime
        }
    }
}

export const deleteLoan = id => {
    return {
        type: DELETE_LOAN,
        payload: {
            id: id
        }
    }
}
