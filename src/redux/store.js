import { configureStore } from "@reduxjs/toolkit";
import { darkSlice } from "./darkModeSlice/darkModeSlice";

export const store = configureStore({
  reducer: darkSlice,
});
