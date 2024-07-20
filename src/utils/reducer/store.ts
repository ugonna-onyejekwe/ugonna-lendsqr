import { configureStore } from "@reduxjs/toolkit";
import togglerSlice from "./toggle-slice";

export const store = configureStore({
  reducer: {
    sidebarToggler: togglerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
