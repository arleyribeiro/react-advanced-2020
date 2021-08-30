import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = value > 1 ? `New Messages(${value})` : "Title";
  });
  console.log("render component");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        change value
      </button>
    </>
  );
};

export default UseEffectBasics;
