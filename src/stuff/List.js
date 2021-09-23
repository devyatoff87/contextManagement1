import React, { useContext } from "react";
import Context from "./Context";

const List = () => {
  const context = useContext(Context);
  return (
    <ul className="list-group">
      {context.people.map((person, i) => {
        return (
          <li key={i} className="list-group-item">
            <strong>{person.name}</strong>
            <div>E-Mail: {person.email}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
