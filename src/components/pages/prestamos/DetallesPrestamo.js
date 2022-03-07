import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchLoansUser, loanReturn } from "../../../services/redux/actions/loans"

const DetallesPrestamo = () => {
    const {id} = useParams()
    
    const dispatch = useDispatch()
    
    const loans = useSelector(state => state.loans)
    const loanById = loans.filter(loanFilter => loanFilter._id == id)
    const loan = loanById[0]
    
    const [returned, setReturned] = useState(loan.returned)

    const loanReturnFunc = () => {
        dispatch(loanReturn(id))
        dispatch(fetchLoansUser())
        setReturned(true)
    }

    return (
        <div>
            <h2 className="shadowText">Detalles Prestamo</h2>
            <div className="container mt-5 d-flex flex-column justify-content-evenly">
                <div className=" d-flex align-items-center justify-content-start mt-4">
                    <h4 className=" text-start me-4">Titulo:</h4>
                    <h4 className=" text-light text-start ">{loan.movieTitle}</h4>
                </div>
                <div className="d-flex align-items-start justify-content-start mt-5">
                    <h4 className="text-start me-4">Descripción: <span className="text-light text-start ms-3">{loan.description}</span></h4>
                    
                </div>
                <div className="d-flex align-items-center justify-content-start mt-5">
                    <h4 className="text-start me-4">Fecha de alquiler:</h4>
                    <h4 className="text-light text-start">{loan.rentedAt}</h4>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-5">
                    <h4 className="text-start me-4">Fecha de devolución:</h4>
                    <h4 className="text-light text-start">{loan.returnAt}</h4>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-5">
                    <h4 className="text-start me-4">Estado del préstamo:</h4>
                    <h4 className="text-light text-start">{loan.returned === false && 'No devuelto'}{loan.returned === true && 'Devuelto'}</h4>
                </div>
            </div>
            {returned && <div className="container d-flex align-items-center justify-content-end"><Link to='/prestamos'><button className="btn btn-danger rounded-pill my-5">Volver</button></Link></div>}
            {!returned && 
                <div className="container d-flex align-items-center justify-content-between">
                    <div>
                        <button className="btn btn-danger rounded-pill my-5 me-5" onClick={loanReturnFunc}>Devolver</button>
                        <Link to={`/prestamos/${loan.id}/editarPrestamo`}><button className="btn btn-danger rounded-pill my-5 me-5">Editar</button></Link>
                    </div>
                    <Link to='/prestamos'><button className="btn btn-danger rounded-pill my-5">Volver</button></Link>
                </div>
            }
            
        </div>
    )
}


export default DetallesPrestamo