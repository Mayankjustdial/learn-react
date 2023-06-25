import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} tmes`;
  });

  function handleCLick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleCLick}>Count:{count}</button>
    </div>
  );
}

export default HookCounterOne;
