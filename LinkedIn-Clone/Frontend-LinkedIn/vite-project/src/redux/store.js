// Redux Global Store

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    user : userReducer
})

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

// code for creating and exporting store using configureStore

export const store = configureStore({

    // reducers

  reducer: persistedReducer,

  // middleware 

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    // devtools - redux store (present)

  devTools: process.env.NODE_ENV !== "production",
});
 
// explore persistor

export const persistor = persistStore(store);
