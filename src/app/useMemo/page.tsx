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
    <>
      <h1>useMemo</h1>
      <div>カウント1：{count01}</div>
      <div>カウント2：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>
    </>
  );
};

export default App;
