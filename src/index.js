import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./screens/Home";
import Popular from "./screens/Popular";
import Main from "./components/Main";
import Statistics from "./screens/Statistics";
import Bookmarks from "./screens/Bookmarks";
import Profile from "./screens/Profile";
import { store } from "./state/store";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}>
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/home" element={<Main />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
