import { initialState } from "../store";
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVS, GET_JOB_OFFERS_ERROR} from '../actions'

const favJobsReducer =(state = initialState.favoriteJobs, action)=> {
    switch(action.type){
        case ADD_TO_FAVORITES:
            return{
                ...state,
                    favorites:[...state.favorites, action.payload]
                }
        case REMOVE_FROM_FAVS:
            return{
                ...state,
                    favorites: state.favorites.filter((fav, i)=> i !== action.payload)
                }
        case GET_JOB_OFFERS_ERROR:
            return{
                ...state,
                    isError: [state.isError, action.payload]
                }
        default:
            return state
    }
}

export default favJobsReducer   