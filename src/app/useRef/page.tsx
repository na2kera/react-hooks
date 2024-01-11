"use client";

import { useRef, useState } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handleRef = () => {
    if (ref.current) {
      console.log(ref.current.value);
      console.log("24:34");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">useRef</h1>
      <input type="text" ref={ref} className="border p-2 rounded mb-4" />
      <button
        onClick={handleRef}
        className="bg-blue-500 text-white p-2 rounded"
      >
        UseRef
      </button>
    </div>
  );
};

export default App;
