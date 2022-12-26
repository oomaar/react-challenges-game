import { useEffect, useState } from "react";
import { PostsContainer } from "./styledEffectOne";

export const EffectOne = () => {
  // Use effect will only work when the options inside the dependency array changed
  // if the same value being rendered many times, useEffect won't run, it should have a diffrent value
  // Example: a button changes a state from true to false, useEffect will run, but if I click on the button again,
  // the value is still false, the component will rerender but the useEffect won't run again until the value changes to
  // True again

  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <PostsContainer>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </PostsContainer>
  );
};
