import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../features/todoSlice";
import { Link } from "react-router-dom";
const Profile = () => {
  const [user, setUserState] = useState({
    firstName: "",
    lastName: "",
    job: "",
  });
  const userInfo = useSelector((state) => state.todo.userInfo);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName) {
      return alert("please write ");
    }
    dispatch(setUser({ ...user }));
  };
  if (userInfo) {
    return (
      <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
        <h3 className="font-bold text-2xl justify-self-center mb-3">
          Your Profile
        </h3>
        <div className="flex flex-col justify-center">
          <div className="flex space-x-3">
            <h2>{userInfo.firstName}</h2>
            <h3>{userInfo.lastName}</h3>
          </div>
          <div className="flex space-x-1">
            <span>Job:</span> <h3>{userInfo.job}</h3>
          </div>
        </div>
        <div className="flex space-x-3 mt-4">
          <Link to={`/popular`} className="bg-blue-500 p-2 rounded">
            Popular task
          </Link>
          <Link to={`/bookmarks`} className="bg-blue-500 p-2 rounded">
            Bookmarks task
          </Link>
          <Link to={`/home`} className="bg-blue-500 p-2 rounded">
            write a task
          </Link>
        </div>
        <button
          className="bg-red-500 rounded p-2 mt-2"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
        <Link
          to={"/statistics"}
          className="bg-blue-500 p-2 rounded block md:hidden my-3"
        >
          All Todos
        </Link>
      </div>
    );
  }
  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl justify-self-center mb-3">Profile</h3>
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-3 p-20  relative self-center"
      >
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => handleChange(e)}
          placeholder="First name"
          name="firstName"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => handleChange(e)}
          placeholder="Last name"
          name="lastName"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        <input
          type="text"
          value={user.job}
          onChange={(e) => handleChange(e)}
          placeholder="Your Job"
          name="job"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        <button className="rounded bg-blue-300 font-bold text-xl outline-none py-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Profile;
