import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";
import products from "./slices/products";

export const store = configureStore({
  reducer: {
    home,
    products,
  }
})