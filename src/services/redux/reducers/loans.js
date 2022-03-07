import moment from "moment";
import { DELETE_LOAN, FETCH_LOANS, FETCH_LOANS_USER, LOAN_RETURN, NEW_LOAN, UPDATE_LOAN } from "../actions/loans";


const initialState = [
    // {id: 1, movieTitle: 'La guerra de las galaxias', rentedAt: moment(new Date()).format("DD/MM/YYYY"), returnAt: '07/03/2022', returned: false, userId: 1,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    // {id: 2, movieTitle: 'Spiderman', rentedAt: '18/02/2022', returnAt: '24/02/2022', returned: true, userId: 1,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    // {id: 3, movieTitle: 'The Batman', rentedAt: moment(new Date()).format("DD/MM/YYYY"), returnAt: '07/03/2022', returned: false, userId: 3,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    // {id: 4, movieTitle: 'Uncharted', rentedAt: '18/02/2022', returnAt: '24/02/2022', returned: true, userId: 3,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    // {id: 5, movieTitle: 'Encanto', rentedAt: moment(new Date()).format("DD/MM/YYYY"), returnAt: '07/03/2022', returned: false, userId: 4,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
    // {id: 6, movieTitle: 'El buen patrón', rentedAt: '18/02/2022', returnAt: '24/02/2022', returned: true, userId: 4,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.'},
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOANS:
            return action.payload

        case FETCH_LOANS_USER:
            return action.payload

        case NEW_LOAN:
            return [
                ...state,
                {
                    movieTitle: action.payload.movieTitle,
                    description: action.payload.description,
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
            return [
                ...state,
                action.payload
            ]

        case DELETE_LOAN:
            return state.filter(loan => loan.id !== action.payload)
    
        default:
            return state
    }
}

export default reducer