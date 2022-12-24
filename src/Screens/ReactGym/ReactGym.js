import { useState } from "react";
import {
  CounterButton,
  CounterButtons,
  CounterContainer,
  CounterText,
  GYMContainer,
} from "./styledReactGym";

export const ReactGym = () => {
  const [count, setCount] = useState(4);

  return (
    <GYMContainer>
      <CounterContainer>
        <CounterText>{count}</CounterText>
        <CounterButtons>
          <CounterButton>-</CounterButton>
          <CounterButton>+</CounterButton>
        </CounterButtons>
      </CounterContainer>
    </GYMContainer>
  );
};
