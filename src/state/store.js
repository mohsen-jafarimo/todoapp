import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import toggleReducer from "../features/toogleSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    darkMode: toggleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
