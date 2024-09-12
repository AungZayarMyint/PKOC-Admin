import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "users",
  initialState: {
    users: {},
  },
  reducers: {
    userInfoHandler: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { userInfoHandler } = userInfoSlice.actions;
export default userInfoSlice.reducer;
