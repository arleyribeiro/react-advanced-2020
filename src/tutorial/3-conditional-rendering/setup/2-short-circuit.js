import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("default");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world" && "return 3 third";

  return (
    <>
      <h2>short circuit</h2>
      <h3>text: {text}</h3>
      <h3>firstValue: {firstValue}</h3>
      <h3>secondValue: {secondValue}</h3>
    </>
  );
};

export default ShortCircuit;
