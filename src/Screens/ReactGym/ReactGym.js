import { StateCounter } from "./StateCounter/StateCounter";
import { EffectOne } from "./Effect/EffectOne";
import { GYMContainer } from "./styledReactGym";

export const ReactGym = () => {
  return (
    <GYMContainer>
      <StateCounter />
      <EffectOne />
    </GYMContainer>
  );
};
