import React, { useState } from "react";

function HookCounter2() {
  let initialvalue = 0;
  const [count, setCount] = useState(initialvalue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <div>count : {count}</div>
      <button onClick={() => setCount(initialvalue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>

      <button onClick={incrementFive}>Increment By 5</button>
    </div>
  );
}

export default HookCounter2;
