// import { useEffect, useState } from "react";
import { ChildContainer } from "../styledReactGym";
// import { EffectOneStateType, ResourceType } from "./EffectTypes";
import { PostsContainer } from "./styledEffectOne";

export const EffectOne = () => {
  // Use effect will only work when the options inside the dependency array changed
  // if the same value being rendered many times, useEffect won't run, it should have a diffrent value
  // Example: a button changes a state from true to false, useEffect will run, but if I click on the button again,
  // the value is still false, the component will rerender but the useEffect won't run again until the value changes to
  // True again

  // const [resourceType, setResourceType] = useState<ResourceType>("Posts");
  // const [items, setItems] = useState<EffectOneStateType>([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  return (
    <ChildContainer>
      <h1>useEffect Example 1</h1>
      <PostsContainer>
        {/* <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button> */}
        {/* {items.map((item, index) => {
          return <pre key={index}>{JSON.stringify(item)}</pre>;
        })} */}
      </PostsContainer>
    </ChildContainer>
  );
};
