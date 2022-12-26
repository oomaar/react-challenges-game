import { useEffect, useState } from "react";
import { ChildContainer } from "../styledReactGym";

export const EffectTwo = () => {
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
    <ChildContainer>
      <h1>useEffect Example 2</h1>
      <div>screen width = {windowWidth}</div>
    </ChildContainer>
  );
};
