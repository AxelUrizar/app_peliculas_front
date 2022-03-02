import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { isLogged, notLogged } from "../../services/redux/actions/isLogged"

const Layout = () => {

    const cart = useSelector(state => state)
    console.log(cart)
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('user') !== null) dispatch(isLogged())
    })

    const logout = () => {
        dispatch(notLogged())
    }

    return (
        <div className="vw-100 vh-100 d-flex flex-column">
            <div className="container-fluid row d-flex align-items-center justify-content-center p-1 m-0">
                <Link to='/' className="col-3"><h1 className="text-danger netflix m-0">Netflix</h1></Link>
                <div className="col"></div>
                    <div className="col">
                            {!cart.isLogged && 
                                <ul className="d-flex align-items-center justify-content-evenly p-0 m-0">
                                    <li>
                                        <Link to='signUp' className="navBar-link col-2">Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link to='logIn' className="navBar-link col-2">Log In</Link>
                                    </li>
                                </ul>
                            }
                            {cart.isLogged && 
                                <ul className="d-flex align-items-center justify-content-evenly p-0 m-0">
                                    <li>
                                        <Link to='perfil' className="navBar-link col-2">Perfil</Link>
                                    </li>
                                    <li>
                                        <Link to='logIn' className="navBar-link col-2" onClick={logout}>Log Out</Link>
                                    </li>
                                </ul>
                            }
                    </div>
                </div>
            <div className="outlet d-flex align-items-center justify-content-center">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout