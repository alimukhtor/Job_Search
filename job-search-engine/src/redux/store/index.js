import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import favJobsReducer from '../reducer/favJobsReducer'
import jobsReducer from '../reducer/jobsReducer'
import compDetailReducer from '../reducer/compDetailReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt';

// import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session' // defaults to sessionStorage for web
const {REACT_APP_MY_KEY} = process.env

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
    storage:storageSession,
    // transforms: [
    //     encryptTransform({
    //       secretKey: REACT_APP_MY_KEY,
    //     }),
    //   ],
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
