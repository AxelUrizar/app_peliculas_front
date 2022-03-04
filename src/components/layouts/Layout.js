import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { isLogged, notLogged } from "../../services/redux/actions/isLogged"

import perfil from '../../img/foto-perfil.jpg'

const Layout = () => {
    const storageId = localStorage.getItem('user')

    const loggedCheck = useSelector(state => state.isLogged)
    // console.log(loggedCheck)

    const users = useSelector(state => state.users)
    const userFiltered = users.filter(userFilter => userFilter.id == storageId)
    const user = userFiltered[0]
    // console.log(user)

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('user') !== null) dispatch(isLogged())
    })

    return (
        <div className="vw-100 vh-100 d-flex flex-column justify-content-start">
            <div className="container-fluid barraNavegacion d-flex align-items-center justify-content-between p-1 px-5 m-0 mt-4">
                <Link to='/' className=""><h1 className="netflix m-0 ps-5">Netflix</h1></Link>
                {/* <div className="col"></div> */}
                <div>
                        {!loggedCheck && 
                            <ul className="d-flex align-items-center justify-content-evenly p-0 m-0 pe-5">                                  
                                <li>
                                    <Link to='signUp' className="navBar-link me-5">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to='logIn' className="navBar-link">Log In</Link>
                                </li>
                            </ul>
                        }
                        {loggedCheck && 
                            <ul className="d-flex align-items-center justify-content-evenly p-0 m-0 pe-5">
                                <li>
                                    <Link to='prestamos' className="navBar-link me-5">Préstamos</Link>
                                </li>
                                <li>
                                    <Link to={`perfil/${user.id}`} className="navBar-link me-5">Perfil</Link>
                                </li>
                                <li>
                                    <Link to={`perfil/${user.id}`} className="navBar-link"><img src={perfil} className='rounded-circle fotoPerfilNavBar mb-1'/></Link>
                                </li>
                                {user.role === 'admin' && 
                                    <div className="dropdown ms-5 pb-1">
                                        <button className="btn btn-danger rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Vista Admin
                                        </button>
                                        <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                                            <li className="text-center"><Link to='admin/usuariosAdmin'><p className="dropdownAdmin text-light">Usuarios</p></Link></li>
                                            <li className="text-center"><Link to='admin/prestamosAdmin'><p className="dropdownAdmin text-light">Pedidos</p></Link></li>
                                        </ul>
                                  </div>
                                }   
                            </ul>
                        }
                </div>
            </div>
            <div className="outlet vw-100">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout