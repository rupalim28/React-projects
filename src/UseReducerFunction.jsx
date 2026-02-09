import { useReducer } from "react";

// 1️⃣ reducer decides how state changes
function reducer(state, action) {
  if (action === "add") return state + 1;
  if (action === "sub") return state - 1;
  return state;
}

function Counter() {
  // 2️⃣ useReducer gives state + dispatch
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("sub")}>-</button>
    </>
  );
}

export default Counter;


// Button clicked → dispatch("add")
// React calls reducer(count, "add")
// Reducer returns count + 1
// UI re-renders with new count