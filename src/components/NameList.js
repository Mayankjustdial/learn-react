import React from "react";
import Person from "./Person";

function NameList() {
  // const names = ["Bruce", "Clark", "Diana"];

  const persons = [
    {
      id: 1,
      name: "Mayank",
      age: 22,
      skill: "C++",
    },
    {
      id: 2,
      name: "Kumar",
      age: 21,
      skill: "Java",
    },
    {
      id: 3,
      name: "Sittu",
      age: 22,
      skill: "React",
    },
    {
      id: 4,
      name: "John",
      age: 22,
      skill: "JavaScript",
    },
    {
      id: 5,
      name: "Doe",
      age: 19,
      skill: "php",
    },
  ];

  //   const nameList = names.map((name) => <h2>{name}</h2>);

  const personList = persons.map((person) => (
    // <h3>
    //   I am {person.name}. I am {person.age} years old and I know {person.skill}
    // </h3>
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {personList}
      {/* {nameList} */}
    </div>
  );
}

export default NameList;
