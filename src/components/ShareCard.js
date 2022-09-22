import { useEffect } from "react"
import { connect } from "react-redux"
import { loadNewLikes , loadAllPosts} from "../store/actions/TravelActions"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchLikes: async (bool,postId) => await dispatch(loadNewLikes(bool,postId)),
        fetchPosts: async () => await dispatch(loadAllPosts()),
    }
}

const ShareCard = (props) => {
    console.log(props.index)
    console.log(props.travelState.shareItems[props.index])

    useEffect(()=>{

    },[])

    const handleLike = async (bool, postId) =>{
        await props.fetchLikes(bool, postId)
        await props.fetchPosts()
    }

    return (
        <div className = 'share-card-main'>
            <div>{props.travelState.shareItems[props.index].name}</div>
            <div>{props.travelState.shareItems[props.index].location}</div>
            <div>{props.travelState.shareItems[props.index].content}</div>
            <div>{props.travelState.shareItems[props.index].likes}</div>
            <button onClick = {()=>{handleLike(true, props.post._id)}}>👍</button>
            <button onClick = {()=>{handleLike(false, props.post._id)}}>👎</button>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(ShareCard)