import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log(name);
      setIsShowModal(false);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setIsShowModal(true);
    }
  };
  return (
    <>
      <h2>useReducer</h2>
      {isShowModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          add
        </button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id} className="itema">
            <h4>{person.name}</h4>
            <button className="btn">remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
