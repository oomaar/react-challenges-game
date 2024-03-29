import { useState, useMemo, useEffect } from "react";
import { ChildContainer } from "../styledReactGym";

export const Memo = () => {
  // useMemo: memo stands for memoization, which is the idea of caching a value so you
  // Don't have to recompute it every single time
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  //   const doubleNumber = slowFunction(number);

  // With useMemo we can cach the value executed from slowFunction so we don't have to execute the function
  // every single time our component renders, so the slowFunction will only run when we update the number
  // before useMemo, the function will be executed when any state changes (dark state) or every time the component
  // Renders

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // re-cap: we run a piece of code when we have to and not running it when we don't need to
  // The reason we don't want to use useMemo everywhere is because it dose gives a performance overhead
  //   & memory overhead
  // example: Performance: in every render the useMemo function will be called
  // example: Memory: it saves a value in memory
  // We use useMemo only when we need the performance benfits so when we call a super slow function
  // Then, useMemo is the best solution

  // Another case where we will need to use useMemo is refrence change...
  // example: each time dark state is changed the themeStyles object will change
  // to test this we will have a useEffect that will run every time themeStyles change

  // Code before memoization theme styles

  // const themeStyles = {
  //   width: "100%",
  //   backgroundColor: dark ? "#00c19f" : "#fff",
  //   color: dark ? "#000" : "#f00",
  // };

  // useEffect(() => console.log("Theme styles changed"), [themeStyles]);

  // Code before memoization theme styles

  // Here we will notice that this useEffect runs every time themeStyles change,
  // but also when we change the number state
  // if we want to avoid this from happening, we need to wrap theme styles value in a useMemo hook

  const themeStyles = useMemo(() => {
    return {
      width: "100%",
      backgroundColor: dark ? "#00c19f" : "#fff",
      color: dark ? "#000" : "#f00",
    };
  }, [dark]);
  useEffect(() => console.log("Theme styles changed"), [themeStyles]);

  return (
    <ChildContainer>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((state) => !state)}>Change Theme</button>
      <p style={themeStyles}>{doubleNumber}</p>
    </ChildContainer>
  );
};

// Just defining a super slow function to simulate a performance problem
function slowFunction(number: number) {
  //   console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}

  return number * 2;
}
