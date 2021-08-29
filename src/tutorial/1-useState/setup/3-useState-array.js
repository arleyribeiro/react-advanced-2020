import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeolpe] = React.useState(data);
  const removeItem = (id) => {
    const items = people.filter((person) => person.id !== id);
    setPeolpe(items);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeolpe([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
