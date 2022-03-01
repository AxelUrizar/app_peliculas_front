import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/users";

const initialState = [
    {id: 1, name: 'Axel U', email: 'demo1@demo.com', password: '123456', role: 'admin', activeLoan: false, tokens:[]},
    {id: 1, name: 'Rafa G', email: 'demo2@demo.com', password: '123456', role: 'user', activeLoan: true, tokens:[]},
    {id: 1, name: 'Manel B', email: 'demo3@demo.com', password: '123456', role: 'user', activeLoan: false, tokens:[]},
    {id: 1, name: 'Saya C', email: 'demo4@demo.com', password: '123456', role: 'user', activeLoan: true, tokens:[]}
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password
                }
            ]            
            
        case UPDATE_USER:
            return state.map(user => {
                if (user.id === action.payload.id){
                    user.name = action.payload.name
                    user.email = action.payload.email
                    user.password = action.payload.password
                }
                return user
            })

        case DELETE_USER:
            return state.filter(user => user.id !== action.payload)

        default:
            return state
    }
}

export default reducer