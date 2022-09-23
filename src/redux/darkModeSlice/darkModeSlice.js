import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: "",
};

export const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkState = action.payload;
    },
  },
});

export const { setDarkMode } = darkSlice.actions;

export const selectDark = (state) => state.dark.dark;

export default darkSlice.reducer;
