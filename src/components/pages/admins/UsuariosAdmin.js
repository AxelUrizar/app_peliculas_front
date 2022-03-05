import { useSelector } from "react-redux"

const UsuariosAdmin = () => {
    const users = useSelector(state => state.users)

    return(
        <div>
            <h2 className="shadowText">Usuarios Admin</h2>
            <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-around">
                {users.length === 0 && <h4 className="mt-5">No existen usuarios!</h4>}
                {users.length > 0 && 
                    <ul className="mt-4 p-0">
                        {users.map(user => (
                            <div>
                                <li className="row mt-4 d-flex align-items-center justify-content-center" key={user.id}>
                                    <h4 className="col-4 p-0 text-light">{user.name}</h4>
                                    <div className="d-flex col-3 justify-content-start align-items-center p-0">
                                        <p className="descripcionTitulo">Email:<span className="text-light ps-3">{user.email}</span></p>
                                    </div>
                                    <div className="d-flex col-3 justify-content-start align-items-center p-0">
                                        <p className="descripcionTitulo">Rol:<span className="text-light ps-3">{user.role}</span></p>
                                    </div>
                                </li>
                                <hr />
                            </div>
                        ))}
                    </ul>
                }    
            </div>
        </div>
    )
}

export default UsuariosAdmin