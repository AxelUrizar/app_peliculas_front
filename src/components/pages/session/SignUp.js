import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
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
    
    const cart = useSelector(state => state)
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

        const users = store.getState().users
        const id = (users[users.length -1].id) + 1

        if(password !== confirmPassword){
            console.log('Las contraseñas no coinciden')
            return (
                setValidatePasswords(false)
            )
        }

        console.log(id, name, email, password)

        console.log(cart.isLogged)

        dispatch(addUser(id, name, email, password))
        dispatch(isLogged(id))

        setSubmited(true)
    }
    
    return (
        <div className="d-flex flex-column align-items-between justify-content-center outletComponents">
            <div>
                <h2 className="mb-5">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">Nombre Completo:</p>
                            <input className="col-6" name="name" type='text' required onChange={handleChangeName} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">E-mail:</p>
                            <input className="col-6" name="email" type='email' required onChange={handleChangeEmail} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Contraseña:</p>
                            <input className="col-6" name="password" type='password' required onChange={handleChangePassword} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Confirmar Contraseña:</p>
                            <input className="col-6" name="confirmPassword" type='password' required onChange={handleChangeConfirmPassword} />
                        </label>
                    </div>
                    <button className="btn btn-danger rounded-pill mt-5" type="submit"><p className="m-0 fw-bold">Acceder</p></button>
                </form>
                {!validatePasswords && <p className="mt-5">Las contraseñas no coinciden.</p>}
                {submited && <Navigate to='/perfil'/>}

            </div>
        </div>
    )
}

export default SignUp