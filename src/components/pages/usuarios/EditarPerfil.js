import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { updateUserEmail, updateUserName } from "../../../services/redux/actions/users"

const EditarPerfil = () => {
    const {id} = useParams()
    // console.log(id)

    const user = useSelector(state => state.users)

    const [editNombre, setEditNombre] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [nombre, setNombre] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    // console.log(nombre, email)

    const emailDispatch = user.email
    const nombreDispatch = user.name

    const dispatch = useDispatch()

    const toggleEditNombre = () => {
        if (!editNombre) {
            setEditNombre(true)
        } else {
            setEditNombre(false)
        }
    }

    const toggleEditEmail = () => {
        if (!editEmail) {
            setEditEmail(true)
        } else {
            setEditEmail(false)
        }
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmitName = (e) => {
        e.preventDefault()

        if (nombre === '') {
            dispatch(updateUserName(id, nombreDispatch))
    
            toggleEditNombre()  
        } else {
            dispatch(updateUserName(id, nombre))
    
            toggleEditNombre()            
        }

    }

    const handleSubmitEmail = (e) => {
        e.preventDefault()

        if(email === '') {
            dispatch(updateUserEmail(id, emailDispatch))

            toggleEditEmail()
        } else {            
            dispatch(updateUserEmail(id, email))
    
            toggleEditEmail()
        }

    }


    return (
        <div>
            <h2 className="shadowText">Edita tu Perfil</h2>
            <div className="w-100 container d-flex row align-items-center justify-content-center m-auto">
                {!editNombre && 
                    <div className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <p className="col-3 text-light m-0 p-0">{user.name}</p>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" onClick={toggleEditNombre}>Editar Nombre</button>
                        </div>
                    </div>
                }
                {editNombre && 
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmitName}>
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <div className='col-3 pe-0'><input type='text' placeholder={user.name} onChange={handleChangeNombre} className='text-center rounded-pill py-1' /></div>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" type="submit">Confirmar</button>
                        </div>                    
                    </form>
                }

                {!editEmail &&
                    <div className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-2 m-0 p-0 text-end">Email:</h4>
                        <p className="col-3 text-light m-0 p-0">{user.email}</p>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" onClick={toggleEditEmail}>Editar Email</button>
                        </div>
                    </div>
                }
                {editEmail &&
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmitEmail}>
                        <h4 className="col-2 m-0 p-0 text-end">Email:</h4>
                        <div className='col-3 pe-0'><input type='email' placeholder={user.email} onChange={handleChangeEmail} className='text-center rounded-pill py-1' /></div>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" type="submit">Confirmar</button>
                        </div>
                    </form>
                }
            </div>
            <Link to={`/perfil/${id}`}><button className="btn btn-danger rounded-pill my-5">Volver</button></Link>
        </div>

    )
}

export default EditarPerfil