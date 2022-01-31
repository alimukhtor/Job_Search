import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import favJobsReducer from '../reducer/favJobsReducer'
import jobsReducer from '../reducer/jobsReducer'
import compDetailReducer from '../reducer/compDetailReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

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

const persistConfig = {
    key: 'root',
    storage,
  }



// **************** CONNECTING REDUCERS ****************

const multiReducer = combineReducers({
    favoriteJobs: favJobsReducer,
    jobOffers: jobsReducer,
    companyDetails:compDetailReducer
})

const persistedReducer = persistReducer(persistConfig, multiReducer)
// *************** CONFIGURATION STOREE HERE *****************

export const configStore = createStore(
    persistedReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
  )

  export const persistor = persistStore(configStore)
