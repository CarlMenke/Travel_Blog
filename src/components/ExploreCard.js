import { useEffect } from "react"
import { connect } from "react-redux"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { useActionData } from "react-router-dom"
import { loadDetailsById } from "../store/actions/TravelActions"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchDetails: async (id ) => await dispatch(loadDetailsById(id))
    }
}

const ExploreCard = ({hotel}) => {

    return (
        <div >
            <h4>{hotel.data.body.propertyDescription.name}</h4>
            <h5>{hotel.data.body.propertyDescription.starRating}</h5>
        </div>
    )

}

export default connect(mapStatetoProps,mapDispatchToProps)(ExploreCard)