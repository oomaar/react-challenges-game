import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "dark",
  initialState: {
    darkState: "dark",
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkState = action.payload;
    },
  },
});

export const darkValue = (state) => state.dark.darkState;
export const { setDarkMode } = darkSlice.actions;

export default darkSlice.reducer;
