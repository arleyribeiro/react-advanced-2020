import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState, useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  const handleClick = () => {
    const title = "Hello world";
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
