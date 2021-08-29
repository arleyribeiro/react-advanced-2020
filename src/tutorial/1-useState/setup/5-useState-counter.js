import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <>
      <section>
        <h2>useState counter example</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => decrease()}>
          decrease
        </button>
        <button className="btn" onClick={() => reset()}>
          reset
        </button>
        <button className="btn" onClick={() => increase()}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
