import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import deliveryReducer from "./slice/deliverySlice";


const rootReducer = combineReducers({
    auth : authReducer,
    delivery: deliveryReducer,
})


const store = configureStore({
    reducer : rootReducer,

    // to handle non-serializable data error
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})




export default store;