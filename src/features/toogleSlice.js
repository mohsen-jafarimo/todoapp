import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const toggleSlice = createSlice({
  name: "darkModeToggle",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
