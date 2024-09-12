import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slices/userInfoSlice";
import redirectIdSlice from "./slices/redirectIdSlice";
import refreshSlice from "./slices/refreshSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    redirectId: redirectIdSlice,
    refresh: refreshSlice,
  },
});
