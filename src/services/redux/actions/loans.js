export const NEW_LOAN = 'NEW_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const DELETE_LOAN = 'DELETE_LOAN'
export const LOAN_RETURN = 'LOAN_RETURN'

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

export const updateLoan = (id, returnAt) => {
    return {
        type: UPDATE_LOAN,
        payload: {
            id: id,
            returnAt: returnAt
        }
    }
}

export const loanReturn = (id) => {
    return {
        type: LOAN_RETURN,
        payload: id
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
