import axios from "axios";
import authHeader from "./auth-header";

export const API_URL = 'http://localhost:2030/'

class Backend_Calls {

    getUsers() {
       return axios.get(API_URL)
    }

    loginUser(email, password){
        return axios.post(API_URL + 'users/login', {email, password})
    }

    userProfile() {
        return axios.get(API_URL + 'users/profile', {
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

    getTokens() {
        return axios.get(API_URL + 'users/tokens')
    }
}

export default new Backend_Calls()