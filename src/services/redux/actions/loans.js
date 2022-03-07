import backendCalls from "../../axios/backend-calls"

export const NEW_LOAN = 'NEW_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const DELETE_LOAN = 'DELETE_LOAN'
export const LOAN_RETURN = 'LOAN_RETURN'
export const FETCH_LOANS_USER = 'FETCH_LOANS_USER'
export const FETCH_LOANS = 'FETCH_LOANS'

export const newLoan = (id, movieTitle, overview, userId) => {
    return {
        type: NEW_LOAN,
        payload: {
            id: id,
            movieTitle: movieTitle,
            description: overview,
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

export const loanReturn = id => {
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

export const fetchLoansUser = () =>{
    return (dispatch) => {
        backendCalls.getLoansUser()
            .then(res => {
                const loans = res.data
                // console.log(loans)
                dispatch(fetchLoansUserSuccess(loans))
            })
    }
}
    const fetchLoansUserSuccess = (loans) => {
        return {
            type: FETCH_LOANS_USER,
            payload: loans
        }
    }

export const fetchLoans = () => {
    return (dispatch) => {
        backendCalls.getLoans()
            .then(res => {
                const loans = res.data
                dispatch(fetchLoansSuccess(loans))
            })
    }
}
    const fetchLoansSuccess = (loans) => {
        return {
            type: FETCH_LOANS,
            payload: loans
        }
    }