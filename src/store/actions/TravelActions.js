import { getInformationByName, getDetailsById, getAllPosts, createPost, changeLikes } from "../../services/TravelServices";
import { GET_HOTELS_BY_NAME, SET_EXPLORE_PLACE,GET_DETIALS_FROM_ID, GET_POSTS,NEW_POST,CHANGE_LIKES } from '../types'

export const loadInformationByName = (place) =>{
    return async (dispatch) => {
        try{
            const information = await getInformationByName(place)
            await dispatch({
                type:GET_HOTELS_BY_NAME,
                payload:information
            })
        }catch (error){
            throw error
        }
    }
}

export const loadDetailsById = (id) =>{
    return async (dispatch) => {
        try{
            const details = await getDetailsById(id)
            await dispatch({
                type:GET_DETIALS_FROM_ID,
                payload: details
            })
        }catch (error){
            throw error
        }
    }
}

export const setExplorePlace = (place) =>{
    return (dispatch) => {
        dispatch({
            type: SET_EXPLORE_PLACE,
            payload: place
        })
    }
}

export const loadAllPosts = () => {
    return async (dispatch) => {
        try{
            const posts = await getAllPosts()
            await dispatch({
                type:GET_POSTS,
                payload: posts
            })
        }catch (error){
            throw error
        }
    }
}

export const loadNewPost = (options) =>{
    return async (dispatch) => {
        try{
            const post = await createPost(options)
            await dispatch({
                type:NEW_POST,
                payload: post
            })
        }catch (error){
            throw error
        }
    }
}

export const loadNewLikes = (bool,postId) =>{
    return async (dispatch) => {
        try{
            const post = await changeLikes(bool,postId)
            console.log(post)
            await dispatch({
                type:CHANGE_LIKES,
                payload: post
            })
        }catch (error){
            throw error
        }
    }
}