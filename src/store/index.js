import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";

export const store = configureStore({
  reducer: {
    home
  }
})