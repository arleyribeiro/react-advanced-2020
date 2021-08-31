import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", e);
  };
  return (
    <>
      <h1>controlled inputs</h1>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
