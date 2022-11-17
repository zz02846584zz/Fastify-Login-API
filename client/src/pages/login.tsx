import React, { useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    try {
      signIn(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="bg-gray-300 h-screen">
      <main className="flex">
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="mx-auto my-[10vw] px-10 pt-10 pb-14 bg-white rounded-md shadow-xl"
        >
          <h1 className="text-center text-2xl font-semibold text-gray-600 pb-5">
            Login
          </h1>
          <input
            {...register("username")}
            type="text"
            name="username"
            placeholder="Username"
            className="block px-5 py-2 my-1 rounded-md bg-gray-100 outline-none focus:bg-gray-200 text-gray-500"
          />
          <input
            {...register("password")}
            type="password"
            name="password"
            placeholder="Password"
            className="block px-5 py-2 my-1 rounded-md bg-gray-100 outline-none focus:bg-gray-200 text-gray-500"
          />
          <button
            type="submit"
            className="flex mx-auto my-7 text-center bg-violet-400 hover:bg-violet-500 text-white px-[41%] py-2 rounded-md transition-all duration-250 ease-in"
          >
            Login
          </button>
          <p className="text-sm mt-14 text-center">
            {"Don't have an account yet? "}{" "}
            <Link href="/register" className="text-violet-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
