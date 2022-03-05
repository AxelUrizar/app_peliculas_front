import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import moviedbCalls from "../../services/axios/moviedb-calls"
import { seeAll } from "../../services/redux/actions/movies"

const Home = () => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(seeAll())
    },[])
    // movies.then(res => console.log(res.data.results))
    console.log(movies)
    
    return (
        <div className="mt-5">                
            <h2>Bienvenido!</h2>
            <div className="container mt-5">
                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id dui ac sem euismod dignissim in ut tortor. Mauris nec vulputate tortor. Quisque et nisi dictum sem ultrices sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dignissim nibh consequat arcu luctus scelerisque. Nulla euismod dolor eu mauris ullamcorper, non fringilla massa aliquet. Integer scelerisque rhoncus urna et efficitur. Suspendisse et nulla augue.</p>
                <p className="text-light">Nam convallis tincidunt purus in rhoncus. Quisque malesuada odio lorem, in sollicitudin nisi sollicitudin id. Proin non felis eget massa sodales viverra quis in ex. Phasellus imperdiet sodales ante non malesuada. Maecenas elementum purus in felis facilisis viverra. Etiam sodales felis diam, at aliquam neque congue sit amet. Fusce viverra suscipit augue. Sed eleifend imperdiet augue, et pulvinar quam fermentum nec. Fusce ante erat, elementum a dictum sed, tincidunt a eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor maximus nibh a dignissim.</p>
                <p className="text-light">Aenean turpis massa, pellentesque vitae auctor nec, porttitor eu elit. Aenean dictum in est vitae pretium. Aliquam erat volutpat. Morbi gravida convallis arcu sagittis consectetur. Donec nibh massa, volutpat sed est et, ultricies interdum erat. Aenean suscipit leo sed facilisis placerat. Praesent bibendum nisl quis turpis fringilla, non rutrum mauris commodo. Morbi id sem sit amet magna ornare congue.</p>
            </div>
        </div>        
    )
}

export default Home