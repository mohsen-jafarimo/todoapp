import { createSlice } from "@reduxjs/toolkit";

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
      state.Todos.push(action.payload);
    },
    logout: (state, action) => {
      state.userInfo = null;
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state[index] = updatedTodo;
      }
    },
    deleteTodo: (state, action) => {
      state.Todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setUser, setTodos, deleteTodo, updateTodo, logout } =
  todoSlice.actions;

export default todoSlice.reducer;
