import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
  name: "refresh",
  initialState: {
    refresh: 0,
  },
  reducers: {
    refreshHandler: (state, action) => {
      state.refresh = action.payload;
    },
  },
});

export const { refreshHandler } = refreshSlice.actions;
export default refreshSlice.reducer;
