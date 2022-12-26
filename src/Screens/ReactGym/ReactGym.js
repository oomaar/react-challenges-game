import { StateCounter } from "./StateCounter/StateCounter";
import { EffectOne } from "./Effect/EffectOne";
import { GYMContainer } from "./styledReactGym";
import { EffectTwo } from "./Effect/EffectTwo";

export const ReactGym = () => {
  return (
    <GYMContainer>
      <StateCounter />
      <EffectOne />
      <EffectTwo />
    </GYMContainer>
  );
};
