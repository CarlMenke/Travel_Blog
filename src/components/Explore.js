import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadInformationByName, setExplorePlace,loadDetailsById } from "../store/actions/TravelActions"
import ExploreCard from "./ExploreCard"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchInformation: async (place) => await dispatch(loadInformationByName(place)),
        setExplorePlace: (place) =>  dispatch(setExplorePlace(place)),
        fetchDetails: async (id ) => await dispatch(loadDetailsById(id))

    }
}

const Explore = (props) => {

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await props.setExplorePlace(e.target[0].value)
        e.target[0].value = ''
    }

    useEffect(()=>{
        const get =  async  (place) =>{
            if(place){
                await props.fetchInformation(place)
            }
        }
        get(props.travelState.explorePlace)

    },[props.travelState.explorePlace])



    useEffect(()=>{
        const get = async (items) => {
            if(items.length > 0 ){
                await items.map( async (item)=>{
                    await props.fetchDetails(item.destinationId)
                })
            }
        }
        get(props.travelState.exploreItems)
    },[props.travelState.exploreItems])


    return (
        <div className = 'explore-main-searched'>
            <h3>Explore</h3>
            <form onSubmit = {handleSubmit}>
                <div>Enter Your Desired Location</div>
                <input placeholder = 'Place'/>
                <button type = 'submit' >Find!</button>
            </form>
            {props.travelState.detailedHotels.map((hotel,index)=>{
                return (
                    <ExploreCard key = {index} hotel = {hotel} />
                )
            })}
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Explore)