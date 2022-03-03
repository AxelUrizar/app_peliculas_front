import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { loanReturn } from "../../../services/redux/actions/loans"

const BotonDevolver = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    
    const loanReturnFunc = () => {
        dispatch(loanReturn(id))
    }

    return (
        <button className="btn btn-danger rounded-pill my-5 me-5" onClick={loanReturnFunc}>Devolver</button>
    )
}

export default BotonDevolver