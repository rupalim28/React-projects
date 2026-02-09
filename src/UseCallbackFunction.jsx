import { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onAdd={increment} />;
}

function Child({ onAdd }) {
  console.log("Child rendered");
  return <button onClick={onAdd}>Add</button>;
}

export default Parent;
