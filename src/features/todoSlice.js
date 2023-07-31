import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  Todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setTodos: (state, action) => {
      state.Todos.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("user");
    },
    updateTodo: (state, action) => {
      const updated = action.payload;
      const index = state.Todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.Todos[index] = updated;
    },
    deleteTodo: (state, action) => {
      const todos = state.Todos.filter((todo) => todo.id !== action.payload);
      state.Todos = todos;
    },
  },
});

export const { setUser, setTodos, deleteTodo, updateTodo, logout } =
  todoSlice.actions;

export default todoSlice.reducer;
