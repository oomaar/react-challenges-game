import { StateCounter } from "./StateCounter/StateCounter";
import { GYMContainer, PostsContainer } from "./styledReactGym";

export const ReactGym = () => {
  return (
    <GYMContainer>
      <StateCounter />
      <PostsContainer>Use Effect</PostsContainer>
    </GYMContainer>
  );
};
