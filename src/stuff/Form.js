import React, { useState, useContext } from "react";
import Context from "./Context";

const Form = () => {
  const context = useContext(Context);

  const initVal = { name: "", email: "" };

  const [person, setPerson] = useState(initVal);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let name = person.name.trim();
    let email = person.email.trim();

    if ((name == "" && name.length < 2) || (email == "" && email.length < 6)) {
      alert("Complete the form correctly, please");
      return;
    }

    const newPerson = {
      name: name,
      email: email,
    };

    context.addPerson(newPerson);

    setPerson(initVal);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">First and last name</label>
        <input
          value={person.name}
          name="name"
          onChange={onChange}
          type="text"
          className="form-control"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          value={person.email}
          name="email"
          onChange={onChange}
          type="email"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add person
      </button>
    </form>
  );
};

export default Form;
