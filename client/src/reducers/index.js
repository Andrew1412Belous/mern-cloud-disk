// import { combineReducers,  } from 'redux'
import { configureStore, combineReducers, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import fileReducer from './fileReducer'

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(composeWithDevTools)
})
