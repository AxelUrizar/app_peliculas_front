import moment from "moment"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { updateLoan } from "../../../services/redux/actions/loans"

const EditarPrestamo = () => {
    const {id} = useParams()

    const loans = useSelector(state => state.loans)
    const loansFiltered = loans.filter(loanFilter => loanFilter.id == id)
    const loan = loansFiltered[0]
    // console.log(loan)

    const [editLoan, setEditLoan] = useState(false)
    const [returnDate, setReturnDate] = useState(loan.returnAt)
    // console.log(nombre, email)

    const dispatch = useDispatch()

    const toggleEditLoan = () => {
        if (!editLoan) {
            setEditLoan(true)
        } else {
            setEditLoan(false)
        }
    }

    const handleChange = (e) => {
        setReturnDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // console.log(returnDate)
        dispatch(updateLoan(loan.id, returnDate))

        toggleEditLoan()            
    }

    const returnAtOptions = (days) => {
        const nuevaFecha = moment(loan.returnAt, "DD/MM/YYYY").add(days, 'days').format("DD/MM/YYYY")
        return(
            <option value={nuevaFecha}>{nuevaFecha}</option>
        )
    }

    return(
        <div>
            <h2 className="shadowText">Editar Prestamo</h2>
            <div className="w-100 container d-flex row align-items-center justify-content-center m-auto">
                {!editLoan && 
                    <div className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-3 m-0 p-0 text-end">Fecha Devolución:</h4>
                        <p className="col-3 text-light m-0 p-0">{loan.returnAt}</p>
                        <div className="col-3 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" onClick={toggleEditLoan}>Retrasar Devolución</button>
                        </div>
                    </div>
                }
                {editLoan && 
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmit}>
                        <h4 className="col-3 m-0 p-0 text-end">Nueva Fecha Devolución:</h4>
                        <div className='col-3 pe-0'>
                            <select onChange={handleChange} className='text-center rounded-pill p-2 me-3'>
                                {returnAtOptions(0)}
                                {returnAtOptions(1)}
                                {returnAtOptions(2)}
                                {returnAtOptions(3)}
                                {returnAtOptions(4)}
                            </select>
                        </div>
                        <div className="col-3 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" type="submit">Confirmar</button>
                        </div>                    
                    </form>
                }
            </div>
            <Link to={`/prestamos/${id}`}><button className="btn btn-danger rounded-pill my-5">Volver</button></Link>
        </div>
    )
}

export default EditarPrestamo