import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/singleTodo";
const Popular = () => {
  const todos = useSelector((state) => state.todo.Todos);
  const bookmarks = todos.filter((todo) => todo.bookmark === true);

  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl justify-self-center mb-3 flex items-center space-x-2">
        <span>Bookmark Todos</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </h3>
      <div className="flex justify-center flex-col space-y-3 ">
        {bookmarks?.map((bookmark) => {
          return <SingleTodo todo={bookmark} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
