import { DELETE_LOAN, NEW_LOAN, UPDATE_LOAN } from "../actions/loans";


const initialState = [
    {id: 1, movieTitle: 'La guerra de las galaxias', rentedAt: new Date.now(), rentTime: 7, returned: false, userId: 2},
    {id: 2, movieTitle: 'Hola que tal', rentedAt: new Date.now(), rentTime: 7, returned: false, userId: 4}
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_LOAN:
            return [
                ...state,
                {
                    id: action.payload.id,
                    movieTitle: action.payload.movieTitle,
                    rentedAt: new Date.now(),
                    rentTime: action.payload.rentTime,
                    userId: action.payload.userId
                }
            ]
        
        case UPDATE_LOAN:
            return state.map(loan => {
                if(loan.id === action.payload.id){
                    loan.movieTitle = action.payload.movieTitle,
                    loan.rentTime = action.payload.rentTime
                }
            })

        case DELETE_LOAN:
            return state.filter(loan => loan.id !== action.payload)
    
        default:
            return state
    }
}

export default reducer