"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/prediction/${inputVal}`);
  };
  return (
    <div className="pt-8 min-h-screen flex items-start justify-center bg-gray-100">
    <div className="p-4 shadow-md bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">
        Enter Your Name
      </h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
        className="w-full p-2 border border-gray-300 rounded text-black"
          type="text"
          placeholder="Type a name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
 <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Predict
          </button>
        </form>
      </div>
    </div>
  );
}
