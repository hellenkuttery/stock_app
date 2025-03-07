import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import stockReducer from "../features/stockSlice"


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});


export let persistor = persistStore(store)

export default store;



