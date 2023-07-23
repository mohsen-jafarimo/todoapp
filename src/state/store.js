import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
