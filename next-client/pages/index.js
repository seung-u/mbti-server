// pages/index.js
import React from "react";
import Link from "next/link";
``;

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Welcome to Your Survey App
      </h1>
      <p className="text-lg text-blue-600 mb-4">
        Click the button below to start the survey:
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded transition duration-300"
        href="/survey"
      >
        Start Survey
      </Link>
    </div>
  );
}
