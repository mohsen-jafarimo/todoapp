import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/singleTodo";
const Popular = () => {
  const todos = useSelector((state) => state.todo.Todos);
  const popularTodos = todos.filter((todo) => todo.popular === true);
  console.log(popularTodos);
  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl justify-self-center mb-3 flex items-center space-x-2">
        <span>Popular Todos</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="tomato"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="tomato"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </h3>
      <div className="flex flex-col space-y-4 items-center">
        {popularTodos.map((todo, index) => {
          return <SingleTodo key={index} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
