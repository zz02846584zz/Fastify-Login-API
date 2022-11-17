import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Login from "./login";
import Register from "./register";

export default function Home() {
  const [api, setApi] = useState();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300 h-screen">
        <Login />
      </main>
    </div>
  );
}
