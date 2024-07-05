import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    // modal: modalReducer,
    cart: cartReducer,
  }
});

export default store;