import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ListadoPrestamos = () => {
    const loans = useSelector(state => state.loans)

    return (
        <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-around">
            <h2 className="shadowText">Tus Préstamos</h2>
            {loans.length === 0 && <h4 className="mt-5">No tienes préstamos activos!</h4>}
            {loans.length > 0 && 
                <ul className="mt-4 p-0">
                    {loans.map(loan => (
                        <li className="row mt-4 d-flex align-items-center justify-content-center" key={loan._id}>
                            <h4 className="col-4 p-0 text-light">{loan.movieTitle}</h4>
                            <div className="d-flex col-3 justify-content-start align-items-center p-0">
                                <p className="descripcionTitulo">Fecha Devolución:<span className="text-light ps-3">{loan.returnAt}</span></p>
                            </div>
                            <div className="d-flex col-3 justify-content-start align-items-center p-0">
                                <p className="descripcionTitulo">Estado:<span className="text-light ps-3">{loan.returned === false && 'No Devuelto'}{loan.returned === true && 'Devuelto'}</span></p>
                            </div>
                            <Link to={`/prestamos/${loan._id}`} className='p-0 col-2'><button className="btn btn-danger rounded-pill" type="submit">Detalles</button></Link>
                        </li>
                    ))}
                </ul>
            }    
        </div>
    )
}

export default ListadoPrestamos