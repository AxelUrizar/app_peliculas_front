import moviedbCalls from "../../axios/moviedb-calls"

export const SEE_ALL = 'SEE_ALL'

export const seeAll = () => {
    return {
        type: SEE_ALL,
        payload: moviedbCalls.showMovies()
    }
}