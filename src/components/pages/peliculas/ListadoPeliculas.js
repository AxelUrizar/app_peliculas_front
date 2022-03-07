import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ListadoPeliculas = () => {
    const peliculas = useSelector(state => state.movies)

    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`

    return (
        <div>
            {/* <h2 className="pb-5 shadowText">Listado de Peliculas</h2> */}
            <ul className="d-flex flex-wrap p-0">
                {peliculas.map(pelicula => {
                    return (
                        <li className="col-3 p-0  mb-5" key={pelicula.id}>
                            <Link to={`pelicula/${pelicula.id}`}>
                                <img className="imgPeliculas mb-2" src={getImage(pelicula.poster_path)} />
                                {/* <h4 className="shadowText w-75 m-auto">{pelicula.original_title}</h4> */}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>                     
    )
}

export default ListadoPeliculas