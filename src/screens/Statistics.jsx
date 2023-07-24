import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/singleTodo";
const Statistics = () => {
  const todos = useSelector((state) => state.todo.Todos);
  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl justify-self-center mb-3 flex items-center space-x-2">
        <span>All Todos</span>
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
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </h3>
      <div className="flex flex-col space-y-4 items-center">
        {todos.map((todo, index) => {
          return <SingleTodo key={index} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default Statistics;
