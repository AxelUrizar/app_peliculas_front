import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import backendCalls from "../../../services/axios/backend-calls"
import { isLogged } from "../../../services/redux/actions/isLogged"
import { fetchLoansUser } from "../../../services/redux/actions/loans"
import { loginUser } from "../../../services/redux/actions/users"


const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submited, setSubmited] = useState(false)
    const [validCredentials, setValidCredentials] = useState(true)
    
    const dispatch = useDispatch()

    const user = useSelector(state => state.users)

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        backendCalls.loginUser(email, password)
            .then(response => {
                if(!response.data) return console.log('algo salió mal en backend-calls.js')
                const userFetch = response.data.user
                if(userFetch.email == email && userFetch.password == password){
                    dispatch(loginUser(userFetch._id, userFetch.name, userFetch.email, userFetch.role, response.data.token))
                    dispatch(isLogged())
                    dispatch(fetchLoansUser())
    
                    setSubmited(true)
                }
            })
            .catch(err => setValidCredentials(false))
    }
    
    return (
        <div className="outletComponents container w-25 d-flex flex-column align-items-between justify-content-center">
            <div>
                <h2 className="mb-5 shadowText">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6 text-end pe-5 pt-1">E-mail:</p>
                            <input className="col-6 rounded-pill py-1" name="email" type='email' required onChange={handleChangeEmail} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6 text-end pe-5 pt-1">Contraseña:</p>
                            <input className="col-6 rounded-pill py-1" name="password" type='password' required onChange={handleChangePassword} />
                        </label>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-evenly">
                        <button className="btn btn-danger rounded-pill mt-5" type="submit">Acceder</button>
                        <Link to='/signUp'><p className="mt-4 text-light linkLoginSignup">¿No tienes una cuenta?</p></Link>
                    </div>
                </form>
                {submited && <Navigate to='/' />}
                {!validCredentials && <p className="text-danger mt-5">Credenciales no válidas.</p>}

            </div>
        </div>
    )
}

export default LogIn