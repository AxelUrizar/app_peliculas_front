import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1';

class MovieDB_Calls {

    showMovies() {
       return axios.get(API_URL)
        .then(res => res.data.results)
    }
}

export default new MovieDB_Calls()