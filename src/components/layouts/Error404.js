import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <h2>ERROR 404</h2>
            <Link to='/'><p className="returnHome text-light mt-3">Volver a Home</p></Link>
        </div>
    )
}

export default Error404