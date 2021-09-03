import React, { useState } from "react";
import { data } from "./../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Person key={person.id} person={person} removePerson={removePerson} />
        );
      })}
    </>
  );
};

const Person = ({ person, removePerson }) => {
  const { name } = person;
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(person.id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
