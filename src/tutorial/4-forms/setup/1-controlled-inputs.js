import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log("submit", firstName, email, e);
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    }
  };
  return (
    <>
      <h1>controlled inputs</h1>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <span>{firstName} </span>
              <span>{email}</span>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
