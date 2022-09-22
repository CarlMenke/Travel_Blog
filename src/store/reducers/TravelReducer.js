import { GET_HOTELS_BY_NAME, SET_EXPLORE_PLACE, GET_DETIALS_FROM_ID , GET_POSTS,NEW_POST,CHANGE_LIKES } from '../types'

const initialState = {
    exploreItems : [],
    explorePlace: null,
    detailedHotels: [],
    selectedExplore: null,
    shareItems: [], 
    selectedShare: null,
    newPost: null, 
    newComment: null 
}

const TravelReducer = ( state  = initialState , action) => {
    switch (action.type){
        case SET_EXPLORE_PLACE:
            return {...state , explorePlace: action.payload, detailedHotels:[]}
        case GET_HOTELS_BY_NAME:
            return {...state , exploreItems: action.payload}
        case GET_DETIALS_FROM_ID:
            return {...state , detailedHotels: [...state.detailedHotels, action.payload] }
        case GET_POSTS:
            return {...state, shareItems: action.payload}
        case NEW_POST:
            return {...state, shareItems: [...state.shareItems, action.payload] }
        case CHANGE_LIKES:
            return {...state, shareItems: [...state.shareItems]}
        default: 
            return { ...state }
    }
}

export default TravelReducer