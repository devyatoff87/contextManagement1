import React, { useContext } from "react";
import Context from "./Context";

const PeopleCount = () => {
  const context = useContext(Context);
  return (
    <div className="jumbotron">
      <h3>People counter: {context.people.length}</h3>
    </div>
  );
};

export default PeopleCount;
