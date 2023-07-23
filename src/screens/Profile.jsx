import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center w-full md:mt-16 h-screen justify-center flex-col main-bg text-white">
      <h3 className="font-bold text-2xl justify-self-center mb-3">Profile</h3>
      <form className="flex flex-col space-y-3 p-20  relative self-center">
        <input
          type="text"
          placeholder="First name"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        <input
          type="text"
          placeholder="Last name"
          className="rounded px-3 text-white py-1 bg-blue-900 outline-none ring-2 "
        />
        <input
          type="text"
          placeholder="Your Job"
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
