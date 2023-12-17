import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

// default olarak locla storage kullanıyo sessşon storage kullanmasını sağlayabliriz
const persistConfig={
  key:"root",
  // storage de veriler key value olark saklanır
  storage,

}


const persistedReducer=persistReducer(persistConfig,authReducer)

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer,
  },

  devTools: process.env.NODE_ENV !== "production", // production canlıyaçıkınca devtools eklentisini görüntüleme
});

export let persistor=persistStore(store)
export default store;
