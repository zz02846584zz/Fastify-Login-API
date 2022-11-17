import React from "react";

export default function Login() {
  return (
    <div className="flex">
      <form
        action=""
        className="mx-auto my-[10vw] px-10 pt-10 pb-24 bg-white rounded-md shadow-xl"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-600 pb-5">
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="block px-5 py-2 my-1 rounded-md bg-gray-100 outline-none focus:bg-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="block px-5 py-2 my-1 rounded-md bg-gray-100 outline-none focus:bg-gray-200"
        />
        <button
          type="submit"
          className="flex mx-auto my-7 text-center bg-violet-400 hover:bg-violet-500 text-white px-[41%] py-2 rounded-md transition-all duration-250 ease-in"
        >
          Login
        </button>
      </form>
    </div>
  );
}