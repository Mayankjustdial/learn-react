import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect - updating document title");
    document.title = `you clicked ${count} tmes`;
  }, [count]);

  function handleCLick() {
    setCount(count + 1);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCLick}>Count:{count}</button>
    </div>
  );
}

export default HookCounterOne;
