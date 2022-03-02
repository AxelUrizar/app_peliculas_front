import { useSelector } from "react-redux"

const Perfil = () => {
    
    
    const users = useSelector(state => state.users)
    console.log(users)

    return (
        <div>
            <h2>Perfil</h2>
        </div>
    )
}

export default Perfil