import React from "react";
import { useNavigate } from "react-router-dom";
import { Moon } from "../helper/dropdown";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <aside className="h-screen  md:mt-16 fixed left-0 hidden md:flex flex-col default-bg w-1/5">
      <div className="p-3 flex flex-col space-y-3 font-bold">
        <h3>John Doe </h3>
        <div className="flex space-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-orange-500"
          >
            <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
          </svg>
          <span>15</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-2 p-4">
        {/* Profile */}
        <div
          onClick={() => {
            navigate("/profile");
          }}
          className="flex items-center space-x-3 hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span>Profile</span>
        </div>
        {/* Home */}
        <div
          onClick={() => {
            navigate("/home");
          }}
          className="flex items-center space-x-3 hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Home</span>
        </div>
        {/* Popular */}
        <div
          onClick={() => {
            navigate("/popular");
          }}
          className="flex items-center space-x-3  hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span>Popular</span>
        </div>
        {/* statistic */}
        <div
          onClick={() => {
            navigate("/statistics");
          }}
          className="flex items-center space-x-3 hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
          <span>Statistic</span>
        </div>
        {/* bookmarks */}
        <div
          onClick={() => {
            navigate("/bookmarks");
          }}
          className="flex items-center space-x-3 hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <span>Bookmarks</span>
        </div>
        {/* OFF */}
        <div className="flex items-center space-x-3 hover:bg-white p-2 rounded hover:pl-4 hover:text-violet-500">
          <Moon />
          <span>Day</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
