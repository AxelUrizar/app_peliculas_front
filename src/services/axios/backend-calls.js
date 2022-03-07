import axios from "axios";
import authHeader from "./auth-header";

export const API_URL = 'http://localhost:2030/'

class Backend_Calls {
    newUser (name, email, password) {
        return axios.post(API_URL + 'users/register', {name, email, password})
    }

    getUsers() {
       return axios.get(API_URL)
    }

    loginUser(email, password){
        return axios.post(API_URL + 'users/login', {email, password})
    }

    logoutUser(){
        return axios.delete(API_URL + 'users/logout', {headers: authHeader()})
    }

    userProfile() {
        return axios.get(API_URL + 'users/profile', {
            headers: authHeader()
        })
    }

    newLoan(movieTitle, description) {
        return axios.post(API_URL + 'loans/newLoan', {movieTitle, description}, {
            headers: authHeader()
        })
    }

    getLoans() {
        return axios.get(API_URL + 'loans')
    }

    getLoansUser() {
        return axios.get(API_URL + 'loans/userLoans', {
            headers: authHeader()
        })
    }

    returnLoan(idLoan) {
        return axios.put(API_URL + 'loans/returnLoan', {id: idLoan})
    }

    getTokens() {
        return axios.get(API_URL + 'users/tokens')
    }
}

export default new Backend_Calls()