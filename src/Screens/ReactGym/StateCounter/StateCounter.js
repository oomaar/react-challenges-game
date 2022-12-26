import { useState } from "react";
import { ChildContainer } from "../styledReactGym";
import {
  CounterButton,
  CounterButtons,
  CounterText,
} from "./styledStateCounter";

export const StateCounter = () => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    // Bad set for previous state
    // setCount(count - 1);

    // Good set for previous state
    setCount((prev) => prev - 1);

    // conc.. if we call setCount 2 times in a row with the bad set
    // it should dec. count by 2 but this wont happen, the 2 set counts will just override each other
    // if we call set count 2 time with good set.
    // now it will work as expected, it will dec by 2
  }

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <ChildContainer>
      <h1>useState Training</h1>
      <CounterText>{count}</CounterText>
      <CounterButtons>
        <CounterButton onClick={decrementCount}>-</CounterButton>
        <CounterButton onClick={incrementCount}>+</CounterButton>
      </CounterButtons>
    </ChildContainer>
  );
};
