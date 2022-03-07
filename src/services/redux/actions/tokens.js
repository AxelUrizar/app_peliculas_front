import backendCalls from "../../axios/backend-calls"

export const FETCH_TOKENS = 'FETCH_TOKENS'

export const fetchTokens = () => {
    return (dispatch) => {
        backendCalls.getTokens()
            .then(res => dispatch(fetchTokensSuccess(res.data)))
            .catch(err => console.log(err))
    }
}
    const fetchTokensSuccess = (tokens) => {
        return {
            type: FETCH_TOKENS,
            payload: tokens
        }
    }