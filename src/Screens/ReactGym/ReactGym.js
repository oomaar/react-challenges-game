import { StateCounter } from "./StateCounter/StateCounter";
import { EffectOne } from "./Effect/EffectOne";
import { GYMContainer } from "./styledReactGym";
import { useEffect, useState } from "react";

export const ReactGym = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Return in the useEffect is used to clean up what happened in the last mount,
  // Return is called first then whatever inside the block of the useEffect will be executed
  // conc. return is called when we unmount the component or when the component mounts

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GYMContainer>
      <StateCounter />
      {/* <EffectOne /> */}
      <div>{windowWidth}</div>
    </GYMContainer>
  );
};
