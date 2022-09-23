import { useEffect } from "react"
import { connect } from "react-redux"
import { loadNewLikes , loadAllPosts, loadNewComment} from "../store/actions/TravelActions"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchLikes: async (bool,postId) => await dispatch(loadNewLikes(bool,postId)),
        fetchPosts: async () => await dispatch(loadAllPosts()),
        fetchNewComment: async (name, content, post_id) => await dispatch(loadNewComment(name, content, post_id))
    }
}

const ShareCard = (props) => {

    useEffect(()=>{

    },[])

    const handleLike = async (bool, postId) =>{
        await props.fetchLikes(bool, postId)
        await props.fetchPosts()
    }

    const handleSubmit = async (e,name, content,post_id) =>{
        e.preventDefault()
        if(e.target[0].value != '' && e.target[1].value != '')
        await props.fetchNewComment(name,content,post_id)
        await props.fetchPosts()
        e.target[0].value = '';
        e.target[1].value = '';
    }

    return (
        <div className = 'share-card-main'>
            <div >
                <div>{props.travelState.shareItems[props.index].name}</div>
                <div>{props.travelState.shareItems[props.index].location}</div>
            </div>
            <div>{props.travelState.shareItems[props.index].content}</div>
            <div>
                <div>{props.travelState.shareItems[props.index].likes}</div>
                <button onClick = {()=>{handleLike(true, props.post._id)}}>👍</button>
                <button onClick = {()=>{handleLike(false, props.post._id)}}>👎</button>
            </div>
            <div>
                {props.travelState.shareItems[props.index].comments.map((comment,index)=>{
                    return(
                        <div key = {index} >
                            <div>{comment.name}</div>
                            <div>{comment.content}</div>
                        </div>
                    )
                })}
            </div>
            <div className = 'comments'>
                <form onSubmit = {(e)=>{handleSubmit(e,e.target[0].value,e.target[1].value,props.travelState.shareItems[props.index])}}>
                    <input placeholder="Name"/>
                    <input placeholder="Comment"/>
                    <button type = 'submit' >Add Comment</button>
                </form>
            </div>

        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(ShareCard)

