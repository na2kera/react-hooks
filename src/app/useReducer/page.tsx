"use client";

import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">useReducer</h1>
      <p className="mb-4">カウント：{state}</p>
      <div className="flex">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          ＋
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-blue-500 text-white p-2 rounded"
        >
          ー
        </button>
      </div>
    </div>
  );
};

export default App;
