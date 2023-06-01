import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import fileReducer from './fileReducer'
import uploadReducer from './uploadReducer'

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  upload: uploadReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})
