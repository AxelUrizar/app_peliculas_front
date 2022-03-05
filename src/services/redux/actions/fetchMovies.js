import axios from "axios"
import { API_URL } from "../../axios/moviedb-calls"

export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'


export const fetchMovies = () => {
    return (dispatch) => {
        axios.get(API_URL)
            .then(res => {
                const movies = res.data.results
                console.log(movies)
                dispatch(fetchMoviesSuccess(res.data.results))
            })
            .catch(err => console.log(err))
    }
}

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}