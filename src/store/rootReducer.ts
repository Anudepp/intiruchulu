import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
});