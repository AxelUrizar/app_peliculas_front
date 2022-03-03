import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { updateUserEmail, updateUserName } from "../../../services/redux/actions/users"

const EditarPerfil = () => {
    const {id} = useParams()
    // console.log(id)

    const users = useSelector(state => state.users)
    const userFiltered = users.filter(userFilter => userFilter.id == id)
    const user = userFiltered[0]
    // console.log(user)

    const [editNombre, setEditNombre] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [nombre, setNombre] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    // console.log(nombre, email)

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

        dispatch(updateUserName(id, nombre))

        toggleEditNombre()
    }

    const handleSubmitEmail = (e) => {
        e.preventDefault()

        dispatch(updateUserEmail(id, email))

        toggleEditEmail()
    }


    return (
        <div>
            <h2>Edita tu Perfil</h2>
            <div className="w-100 container d-flex row align-items-center justify-content-center m-auto">
                {!editNombre && 
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <p className="col-3 text-light m-0 p-0">{user.name}</p>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" onClick={toggleEditNombre} type="submit">Editar Nombre</button>
                        </div>
                    </form>
                }
                {editNombre && 
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmitName}>
                        <h4 className="col-2 m-0 p-0 text-end">Nombre:</h4>
                        <div className='col-3 pe-0'><input type='text' placeholder={user.name} onChange={handleChangeNombre} className='text-center' /></div>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" type="submit">Confirmar</button>
                        </div>                    
                    </form>
                }

                {!editEmail &&
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5">
                        <h4 className="col-2 m-0 p-0 text-end">Email:</h4>
                        <p className="col-3 text-light m-0 p-0">{user.email}</p>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" onClick={toggleEditEmail} type="submit">Editar Email</button>
                        </div>
                    </form>
                }
                {editEmail &&
                    <form className="col-12 row d-flex align-items-center justify-content-center mt-5"  onSubmit={handleSubmitEmail}>
                        <h4 className="col-2 m-0 p-0 text-end">Email:</h4>
                        <div className='col-3 pe-0'><input type='email' placeholder={user.email} onChange={handleChangeEmail} className='text-center' /></div>
                        <div className="col-2 m-0 p-0">
                            <button className="btn btn-danger rounded-pill" type="submit">Confirmar</button>
                        </div>
                    </form>
                }
            </div>
        </div>

    )
}

export default EditarPerfil