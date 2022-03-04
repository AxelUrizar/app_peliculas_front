import { ADD_USER, DELETE_USER, LOGIN_USER, UPDATE_USER_NAME, UPDATE_USER_EMAIL } from "../actions/users";

const initialState = [
    {id: 1, name: 'Axel Urizar', email: 'demo@demo.com', password: '123456', role: 'admin'},
    {id: 2, name: 'Rafa Garcia', email: 'demo2@demo.com', password: '123456', role: 'user'},
    {id: 3, name: 'Manel Barreda', email: 'demo3@demo.com', password: '123456', role: 'user'},
    {id: 4, name: 'Saya Casino', email: 'demo4@demo.com', password: '123456', role: 'user'}
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
            
        case LOGIN_USER:
            localStorage.setItem('user', action.payload)
            return [...state]

        case UPDATE_USER_NAME:
            return state.map(user => {
                if (user.id == action.payload.id){
                    user.name = action.payload.name
                }
                return user
            })

        case UPDATE_USER_EMAIL:
            return state.map(user => {
                if (user.id == action.payload.id){
                    user.email = action.payload.email
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