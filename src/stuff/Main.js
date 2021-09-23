import React, { useReducer, useState } from "react";
import Form from "./Form";
import List from "./List";
import reducer from "./reducer";
import Context from "./Context";
import NewestPerson from "./NewestPerson";
import { TYPES } from "./TYPES";

const UseContextUseReducer = () => {
  const initVal = {
    people: [
      { name: "Johe Mamaka", email: "joe@makaka.de" },
      { name: "Lue Sisi", email: "bigtits89@gmail.com" },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initVal);

  const addPerson = (person) => {
    dispatch({ type: TYPES.ADD_PERSON, payload: person });
  };

  return (
    <Context.Provider value={{ people: state.people, addPerson }}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Add a person</h3>
            <Form />
          </div>
          <div className="col-6">
            <h3>Persons</h3>
            <List />
          </div>
        </div>
        <NewestPerson />
      </div>
    </Context.Provider>
  );
};

export default UseContextUseReducer;
