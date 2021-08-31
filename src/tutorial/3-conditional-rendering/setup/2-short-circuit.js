import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("default");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world" && "return 3 third";

  return (
    <>
      <h2>short circuit</h2>
      <h3>text: {text}</h3>
      <h3>firstValue: {firstValue}</h3>
      <h3>secondValue: {secondValue}</h3>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? <h2>There is an Error...</h2> : <h2>No Error...</h2>}
    </>
  );
};

export default ShortCircuit;
