import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { isLogged } from "../../../services/redux/actions/isLogged"
import { loginUser } from "../../../services/redux/actions/users"


const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submited, setSubmited] = useState(false)
    const [validCredentials, setValidCredentials] = useState(true)
    
    const cart = useSelector(state => state)
    const dispatch = useDispatch()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(cart.users)

        const user = cart.users.filter(user => user.email === email && user.password === password)

        if (user.length === 1) {
            console.log(user[0].id)
            dispatch(loginUser(user[0].id))
            dispatch(isLogged())
    
            setSubmited(true)
        } else {
            return setValidCredentials(false)            
        }
    }
    
    return (
        <div className="outletComponents h-75 d-flex flex-column align-items-between justify-content-center">
            <div>
                <h2 className="mb-5 text-danger">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">E-mail:</p>
                            <input className="col-6" name="email" type='email' required onChange={handleChangeEmail} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6 text-light">Contraseña:</p>
                            <input className="col-6" name="password" type='password' required onChange={handleChangePassword} />
                        </label>
                    </div>
                    <button className="btn btn-danger rounded-pill mt-5" type="submit">Acceder</button>
                </form>
                {submited && <Navigate to='/perfil'/>}
                {!validCredentials && <p className="text-danger mt-5">Credenciales no válidas.</p>}

            </div>
        </div>
    )
}

export default LogIn