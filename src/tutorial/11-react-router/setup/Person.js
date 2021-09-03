import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  useEffect(() => {
    const person = data.find((person) => person.id === parseInt(id));
    if (person) {
      setName(person.name);
    }
  }, []);
  return (
    <div>
      <h2>person</h2>
      <h3>{name}</h3>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
