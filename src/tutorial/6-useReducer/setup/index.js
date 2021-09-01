import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isShowModal: false,
  modalContent: "hello",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log(name);
      const item = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: item });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const removePerson = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };
  return (
    <>
      <h2>useReducer</h2>
      {state.isShowModal && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn">
          add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => removePerson(person)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
