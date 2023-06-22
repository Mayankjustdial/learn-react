import React from "react";

// destructuring props
const GreetFunction = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <p>
        Hello {name} form Function component {heroName}
      </p>
      {props.children}
    </div>
  );
};

export default GreetFunction;
