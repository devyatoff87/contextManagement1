import React, { useEffect, useContext } from "react";
import PeopleCount from "./PeopleCount";
import Context from "./Context";

const NewestPerosn = () => {
  const context = useContext(Context);
  const newestPerson = context.people[context.people.length - 1];

  useEffect(() => {
    const newestPeronName = newestPerson.name;
    document.title = newestPeronName;
  }, [newestPerson]);
  return (
    <div className={"mt-4"}>
      <h3>Newest Person: {newestPerson.name}</h3>
      <PeopleCount />
    </div>
  );
};

export default NewestPerosn;
