import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTodos as createTodo } from "../features/todoSlice";
import { toast } from "react-toastify";
const Main = () => {
  const [todo, setTodo] = useState({
    title: "",
    author: "",
    task: "",
    popular: false,
    bookmark: false,
    completed: false,
  });
  const userInfo = useSelector((state) => state.todo.userInfo);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleBookmark = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      bookmark: !bookmark,
    }));
  };
  const handleLike = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      popular: !popular,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!todo.title || !todo.author) {
      toast.error("please fill up your title and author");
      return null;
    }
    await dispatch(createTodo({ ...todo }));
    setTodo({
      title: "",
      author: "",
      task: "",
      popular: false,
      bookmark: false,
      completed: false,
    });
  };
  if (!userInfo) {
    return (
      <div className="flex items-center w-full md:mt-16 h-screen justify-center space-y-3 flex-col main-bg text-white">
        <h3 className="p-2 bg-red-500 text-white rounded font-bold">
          First Create Account
        </h3>
        <Link to={`/profile`} className="underline">
          Lets Create
        </Link>
      </div>
    );
  }
  const { title, author, task, popular, bookmark } = todo;
  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl flex items-center space-x-2 justify-self-center mb-3">
        <span>Write a task</span>
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </h3>
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-3 p-20  relative self-center"
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        {todo.title ? <Emojie2 /> : <Emoji />}
        <input
          type="text"
          value={author}
          onChange={(e) => handleChange(e)}
          name="author"
          placeholder="Author"
          className="rounded px-3 py-1 outline-none ring-2 text-white bg-blue-900 self-center"
        />
        <input
          type="text"
          value={task}
          name="task"
          onChange={(e) => handleChange(e)}
          placeholder="Write your task"
          className="rounded px-3 py-1 outline-none font-extrabold bg-slate-50 text-blue-900 ring-2 self-center"
        />
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={bookmark ? `#202030` : `none`}
            viewBox="0 0 24 24"
            onClick={(e) => handleBookmark(e)}
            strokeWidth={1.5}
            name="bookmark"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          {/* Heart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={popular ? "tomato" : "none"}
            viewBox="0 0 24 24"
            onClick={(e) => handleLike(e)}
            strokeWidth={1.5}
            stroke={popular ? "tomato" : "currentColor"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>

        <button className="rounded bg-blue-300 font-bold text-xl outline-none py-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default Main;

const Emoji = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="tomato"
      className="w-6 h-6 absolute top-[70px] z-10 right-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    </svg>
  );
};

const Emojie2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="lightgreen"
      className="w-6 h-6 absolute top-[70px] z-10 right-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    </svg>
  );
};
