import { StateCounter } from "./StateCounter/StateCounter";
import { EffectOne } from "./Effect/EffectOne";
import { GYMContainer } from "./styledReactGym";
import { EffectTwo } from "./Effect/EffectTwo";
import { Memo } from "./Memo/Memo";
import { Portal } from "./Portal/Portal";

export const ReactGym = () => {
  return (
    <GYMContainer>
      <StateCounter />
      <EffectOne />
      <EffectTwo />
      <Memo />
      <Portal />
    </GYMContainer>
  );
};
