import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const people = [...state.people, action.payload];
    return {
      ...state,
      people: people,
      isShowModal: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isShowModal: true,
      modalContent: "please enter value",
    };
  }
  throw new Error("no matching action type");
};
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
  return (
    <>
      <h2>useReducer</h2>
      {state.isShowModal && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button className="btn">remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
