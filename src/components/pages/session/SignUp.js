import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { isLogged } from "../../../services/redux/actions/isLogged"
import { addUser } from "../../../services/redux/actions/users"
import store from '../../../services/redux/store'


const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validatePasswords, setValidatePasswords] = useState(true)
    const [submited, setSubmited] = useState(false)

    const users = store.getState().users
    const id = (users[users.length -1].id) + 1
    
    const dispatch = useDispatch()

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if(password !== confirmPassword){
            console.log('Las contraseñas no coinciden')
            return (
                setValidatePasswords(false)
            )
        }

        dispatch(addUser(id, name, email, password))
        dispatch(isLogged(id))

        setSubmited(true)
    }
    
    return (
        <div className="d-flex container signup flex-column align-items-between justify-content-center outletComponents p-0">
            <h2 className="mb-5 shadowText">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="container d-flex flex-column align-items-between justify-content-center p-0" >
                    <label className="row m-2">
                        <p className="col-6 text-end pe-5 pt-1">Nombre Completo:</p>
                        <input className="col-6 rounded-pill py-1" name="name" type='text' required onChange={handleChangeName} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-end pe-5 pt-1">E-mail:</p>
                        <input className="col-6 rounded-pill py-1" name="email" type='email' required onChange={handleChangeEmail} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-end pe-5 pt-1">Contraseña:</p>
                        <input className="col-6 rounded-pill py-1" name="password" type='password' required onChange={handleChangePassword} />
                    </label>
                    <label className="row m-2">
                        <p className="col-6 text-end pe-5 pt-1">Confirmar Contraseña:</p>
                        <input className="col-6 rounded-pill py-1" name="confirmPassword" type='password' required onChange={handleChangeConfirmPassword} />
                    </label>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <button className="btn btn-danger rounded-pill mt-5" type="submit">Acceder</button>
                    <Link to='/logIn'><p className="mt-4 text-light linkLoginSignup">¿Ya tienes una cuenta?</p></Link>
                </div>
            </form>
            {!validatePasswords && <p className="mt-5">Las contraseñas no coinciden.</p>}
            {submited && <Navigate to='/'/>}
        </div>
    )
}

export default SignUp