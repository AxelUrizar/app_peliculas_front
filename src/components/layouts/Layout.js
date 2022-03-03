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
    console.log(user)

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('user') !== null) dispatch(isLogged())
    })

    const logout = () => {
        dispatch(notLogged())
    }

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