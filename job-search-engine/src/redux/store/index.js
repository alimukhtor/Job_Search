import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import favJobsReducer from '../reducer/favJobsReducer'
import jobsReducer from '../reducer/jobsReducer'
import compDetailReducer from '../reducer/compDetailReducer'
import thunk from 'redux-thunk'



// ************** REDUX-THUNK MIDDLEWARE **************
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// ************** DEFINING ALL STATES HERE..... **************

export const initialState = {
    favoriteJobs:{
        favorites: [],
        isError: false
    },
    jobOffers:{
        jobs: [],
        inputValue: '',
        limit: '',
        isError: null,
        isLoading: true
    },
    companyDetails:{
        detail:[null]
    }
}

// **************** CONNECTING REDUCERS ****************

const multiReducer = combineReducers({
    favoriteJobs: favJobsReducer,
    jobOffers: jobsReducer,
    companyDetails:compDetailReducer
})

// *************** CONFIGURATION STOREE HERE *****************

let configStore = createStore(
    multiReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
  )

  export default configStore