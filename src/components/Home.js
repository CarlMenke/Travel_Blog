import { useEffect } from "react"
import { connect } from "react-redux"
import Explore from "./Explore"
import Share from "./Share"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const Home = (props) => {
    console.log('props in home',props)

    return (
        <div className = 'home-main'>
            <h1>Where To Go ? </h1>
            <Explore />
            <Share/>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Home)