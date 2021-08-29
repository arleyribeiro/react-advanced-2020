import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState, useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const randomTitle = "random title";
  const [text, setText] = useState(randomTitle);
  const handleClick = () => {
    const title = text === randomTitle ? "Hello world" : randomTitle;
    setText(title);
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
