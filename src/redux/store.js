import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import orderSlice from "./orderSlice";
import goodsSlice from "./goodsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderSlice,
    goods: goodsSlice,
  }
});

export default store;