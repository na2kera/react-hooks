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
    <>
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ー</button>
    </>
  );
};

export default App;
