"use client";
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("hello hooks");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">useState, useEffect</h1>
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={handleClick}
        >
          ＋
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default App;
