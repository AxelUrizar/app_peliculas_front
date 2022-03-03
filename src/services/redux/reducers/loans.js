import moment from "moment";
import { DELETE_LOAN, LOAN_RETURN, NEW_LOAN, UPDATE_LOAN } from "../actions/loans";


const initialState = [
    {id: 1, movieTitle: 'La guerra de las galaxias', rentedAt: moment(new Date()).format("DD/MM/YYYY"), returnAt: '07/03/2022', returned: false, userId: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    {id: 2, movieTitle: 'Hola que tal', rentedAt: '18/02/2022', returnAt: '24/02/2022', returned: true, userId: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'}
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_LOAN:
            return [
                ...state,
                {
                    id: action.payload.id,
                    movieTitle: action.payload.movieTitle,
                    rentedAt: moment(new Date()).format("DD/MM/YYYY"),
                    rentTime: action.payload.rentTime,
                    userId: action.payload.userId
                }
            ]
        
        case UPDATE_LOAN:
            return state.map(loan => {
                if(loan.id === action.payload.id){
                    loan.returnAt = action.payload.returnAt;
                }
                return loan
            })

        case LOAN_RETURN:
            return state.map(loan => {
                if (loan.id == action.payload) {
                    loan.returned = true
                    loan.returnAt = moment(new Date()).format("DD/MM/YYYY")
                }
                return loan
            })

        case DELETE_LOAN:
            return state.filter(loan => loan.id !== action.payload)
    
        default:
            return state
    }
}

export default reducer