import React, { useRef, useState } from "react";
import { deleteTodo, updateTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const SingleTodo = ({ todo }) => {
  const [newTodo, setTodo] = useState({
    title: "",
    author: "",
    task: "",
    popular: false,
    bookmark: false,
    completed: false,
  });
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const task_Ref = useRef(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUpdate = () => {
    titleRef.current.disabled = false;
    authorRef.current.disabled = false;
    task_Ref.current.disabled = false;
    toast.info("click on values to update");
  };
  return (
    <div className="w-full  self-stretch justify-self-stretch items-center flex space-x-4 bg-blue-500 rounded p-8 font-bold hover:bg-blue-300 transition-all duration-700 ">
      <div className="flex flex-col space-y-2">
        <h2 className=" flex  items-center space-x-2">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <input
            type="text"
            placeholder={todo.title}
            value={newTodo.title}
            disabled
            name="title"
            onChange={(e) => handleChange(e)}
            className="bg-inherit placeholder-white"
            ref={titleRef}
          />
        </h2>
        <h2 className="flex items-center space-x-2">
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
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <input
            type="text"
            value={newTodo.author}
            placeholder={todo.author}
            ref={authorRef}
            disabled
            name="author"
            onChange={(e) => handleChange(e)}
            className="bg-inherit placeholder-white"
          />
        </h2>
      </div>
      <div className="bg-white p-3 rounded flex flex-col space-y-3 text-violet-500">
        <span>
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={newTodo.task}
          placeholder={todo.task}
          disabled
          onChange={(e) => handleChange(e)}
          name="task"
          className="bg-inherit placeholder-blue-500"
          ref={task_Ref}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="lightgreen"
          className="w-6 h-6 completed hover:stroke-slate-950"
          onClick={() => {
            dispatch(
              updateTodo({
                ...newTodo,
                id: todo.id,
                popular: todo.popular,
                bookmark: todo.bookmark,
                completed: todo.completed,
              })
            );
            titleRef.current.disabled = true;
            authorRef.current.disabled = true;
            task_Ref.current.disabled = true;
            toast.success("Task updated successfully");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 update hover:stroke-slate-950"
          onClick={handleUpdate}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="tomato"
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="w-6 hover:stroke-slate-950 h-6 trash"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleTodo;
