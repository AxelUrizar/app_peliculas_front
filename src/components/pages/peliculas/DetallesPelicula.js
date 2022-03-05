import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function DetallesPelicula(){
    const {id} = useParams()

    const peliculas = useSelector(state => state.movies)
    const peliculaFiltrada = peliculas.filter(peliculaFilt => peliculaFilt.id == id)
    const pelicula = peliculaFiltrada[0]

    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`

    return (
        <div>
            <h2 className="shadowText">Detalles</h2>
            <div>
                
                <h2>{pelicula.original_title}</h2>
            </div>
        </div>
    )
} 