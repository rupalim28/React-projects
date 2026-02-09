import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

//we didnt able to notice this bcoz its very small and instant 
//   console.log("Calculating...");
//   const double = count * 2;

//try this instead 
// const double = (() => {
//   console.log("Calculating...");
//   let result = 0;
//   for (let i = 0; i < 1_000_000_000; i++) {
//     result += count;
//   }
//   return result;
// })();

// Click Toggle Theme
// UI will freeze
// Console will log again


  return (
    <>
      <p>Double: {double}</p>
      <button onClick={() => setCount(c => c + 1)}>Add</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </>
  );
}

export default ExpensiveCalc;
