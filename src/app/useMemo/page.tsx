"use client";

import { useMemo, useReducer, useState } from "react";

const App = () => {
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  //   const square = () => {
  //     let i = 0;
  //     while (i < 2000000000) {
  //       i++;
  //     }
  //     return count02 * count02;
  //   };
  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">useMemo</h1>
      <div className="mb-4">カウント1：{count01}</div>
      <div className="mb-4">カウント2：{count02}</div>
      <div className="mb-4">結果：{square}</div>
      <div className="flex">
        <button
          onClick={() => setCount01(count01 + 1)}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          ＋
        </button>
        <button
          onClick={() => setCount02(count02 + 1)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          ＋
        </button>
      </div>
    </div>
  );
};

export default App;
