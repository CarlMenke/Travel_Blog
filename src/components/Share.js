import { useEffect } from "react"
import { connect } from "react-redux"
import { loadAllPosts, loadNewPost } from "../store/actions/TravelActions"
import ShareCard from "./ShareCard"

const mapStatetoProps = ({ travelState }) =>{
    return { travelState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPosts: async () => await dispatch(loadAllPosts()),
        fetchNewPost: async (options) => await dispatch(loadNewPost(options))
    }
}

const Share = (props) => {

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const name = e.target[0].value
        const location = e.target[1].value
        const content = e.target[2].value

        const options = {
            name: name,
            content: content,
            location: location,
            likes:1
        }

        props.fetchNewPost(options)
    }

    useEffect(()=>{
        props.fetchPosts()
    },[])

    return (
        <div className = 'share-main'>
            <form onSubmit = {handleSubmit}>
                <h3>What Do You Think?</h3>
                <input placeholder="Your Name"/>
                <input placeholder="The Location"/>
                <input placeholder="What do you think about this place?"/>
                <button type = 'submit'>Post Review</button>
            </form>
                <h3>What Others Think:</h3>
            <div className = 'all-posts-container'>
                {props.travelState.shareItems.map((post,index)=>{
                    return (
                        <ShareCard post = {post} key = {index} index = {index} />
                    )
                })}
            </div>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Share)