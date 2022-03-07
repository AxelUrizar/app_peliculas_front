import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom"
import { fetchLoansUser, fetchNewLoan, newLoan } from "../../../services/redux/actions/loans"

export default function DetallesPelicula(){
    const [loaned, setLoaned] = useState(false)
    const [path, setPath] = useState ('')

    const {id} = useParams()

    
    const peliculas = useSelector(state => state.movies)
    const peliculaFiltrada = peliculas.filter(peliculaFilt => peliculaFilt.id == id)
    const pelicula = peliculaFiltrada[0]
    
    const user = useSelector(state => state.users)
    
    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`
    
    const dispatch = useDispatch()
    
    const alquilar = () => {
        if (user.id) {
            dispatch(fetchNewLoan(pelicula.original_title, pelicula.overview))
            // dispatch(fetchLoansUser())
            
            setLoaned(true)
            return setPath(<Navigate to={`/prestamos/`} />)   
        } else {
            setLoaned(true)
            return setPath(<Navigate to='/logIn' />)            
        }
        
    }

    return (
        <div className="mb-5">
            <h2 className="shadowText mb-5">Detalles de la Pelicula</h2>
            <div className="container d-flex justify-content-start align-items-center pt-3">
                <img src={getImage(pelicula.poster_path)} className='imgPeliculasDetalles' />
                <div className='ms-5 descripcionAlquiler d-flex flex-column justify-content-between align-items-center'>
                    <div className="text-start">
                        <h4>Titulo:<span className="text-light ps-3">{pelicula.original_title}</span></h4>
                        <h4 className="my-5">Fecha de estreno: <span className="text-light ps-3">{pelicula.release_date}</span></h4>
                        <h4>Sinopsis:<span className="text-light ps-3">{pelicula.overview}</span></h4>
                    </div>
                    <div className="botonesAlquiler mt-5 d-flex justify-content-between align-items-center">
                        <button className="btn btn-danger rounded-pill" onClick={alquilar}>Alquilar</button>
                        <Link to='/'><button className="btn btn-danger rounded-pill">Volver</button></Link>
                    </div>
                </div>
            </div>
            {loaned && path}
        </div>
    )
} 