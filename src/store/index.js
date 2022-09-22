import { createStore , combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TravelReducer from './reducers/TravelReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({
        travelState: TravelReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store