"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function GoBackBtn() {
  const { push } = useRouter();
  return (
    <button
      className="h-1/4 mt-4 py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      onClick={() => push("/")}
    >
      Go Back
    </button>
  );
}
