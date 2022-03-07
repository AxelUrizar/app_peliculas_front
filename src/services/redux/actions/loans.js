import backendCalls from "../../axios/backend-calls"

export const NEW_LOAN = 'NEW_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const DELETE_LOAN = 'DELETE_LOAN'
export const LOAN_RETURN = 'LOAN_RETURN'
export const FETCH_LOANS_USER = 'FETCH_LOANS_USER'
export const FETCH_LOANS = 'FETCH_LOANS'
export const FETCH_NEW_LOAN = 'FETCH_NEW_LOAN'

export const fetchNewLoan = (movieTitle, description) => {
    return (dispatch) => {
        backendCalls.newLoan(movieTitle, description)
            .then(res => {
                dispatch(fetchNewLoanSuccess(movieTitle, description))
                dispatch(fetchLoansUser())
            })
            .catch(err => console.log(err))
    }
}
    const fetchNewLoanSuccess = (movieTitle, overview) => {
        return {
            type: NEW_LOAN,
            payload: {
                movieTitle: movieTitle,
                description: overview,
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
    return dispatch => {
        backendCalls.returnLoan(id)
            .then(res => {
                // console.log(res)
                dispatch(loanReturnSuccess(res.data))
                dispatch(fetchLoansUser)
            })
    }
}
    const loanReturnSuccess = (loan) => {
        return {
            type: LOAN_RETURN,
            payload: loan
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