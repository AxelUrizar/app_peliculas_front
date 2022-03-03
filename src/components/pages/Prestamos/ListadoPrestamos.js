import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ListadoPrestamos = () => {
    const storageId = localStorage.getItem('user')

    const loans = useSelector(state => state.loans)
    const loansUser = loans.filter(loanFilter => loanFilter.userId == storageId)
    // console.log(loansUser.length)

    // console.log('user: ' + user.name, 'loans: ' + loans)

    return (
        <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-around">
            <h2>Tus Préstamos</h2>
            {/* <hr /> */}
            {loansUser.length === 0 && <h4 className="mt-5">No tienes préstamos activos!</h4>}
            {loansUser.length > 0 && 
                <ul className="mt-4 p-0">
                    {loansUser.map(loan => (
                        <div>
                            <li className="row mt-4 d-flex align-items-center" key={loan.id}>
                                <h4 className="col-3 p-0 text-light">{loan.movieTitle}</h4>
                                <div className="d-flex col-6 justify-content-evenly align-items-center p-0">
                                    <p className="descripcionTitulo">Fecha Devolución:<span className="text-light ps-3">{loan.returnAt}</span></p>
                                </div>
                                <Link to={`/prestamo/${loan.id}`} className='p-0 col-3'><button className="btn btn-danger rounded-pill" type="submit">Detalles</button></Link>
                            </li>
                        </div>
                    ))}
                </ul>
            }    
        </div>
    )
}

export default ListadoPrestamos