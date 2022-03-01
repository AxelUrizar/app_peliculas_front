import { useSelector } from "react-redux";
import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/users";

const initialState = [
    {id: 1, name: 'Axel U', email: 'demo@demo.com', password: '123456', role: 'admin'},
    {id: 2, name: 'Rafa G', email: 'demo2@demo.com', password: '123456', role: 'user'},
    {id: 3, name: 'Manel B', email: 'demo3@demo.com', password: '123456', role: 'user'},
    {id: 4, name: 'Saya C', email: 'demo4@demo.com', password: '123456', role: 'user'}
]

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            localStorage.setItem('user', action.payload.id)
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                    role: 'user'
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
            localStorage.removeItem('user')
            return state.filter(user => user.id !== action.payload)

        default:
            return state
    }
}

export default reducer