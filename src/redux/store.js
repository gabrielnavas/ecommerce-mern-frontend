import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

import produceSlice from './features/productSlice'
import userSlice from './features/userSlice'

import appApi from './services/appApi'

// reducers 
const reducer = combineReducers({
  user: userSlice,
  products: produceSlice,
  [appApi.reducerPath]: appApi.reducer
})

// persist our store
const persistConfig = {
  key: 'root',
  storage,
  blackList: [appApi.reducerPath, 'products']
}

const persistedReducer = persistReducer(persistConfig, reducer) 

// creating the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware]
})

export default store