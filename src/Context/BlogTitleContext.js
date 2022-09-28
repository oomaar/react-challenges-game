import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const BlogTitleContext = createContext();
const BlogTitleContextChange = createContext();

export const useBlogTitle = () => useContext(BlogTitleContext);
export const useBlogTitleChange = () => useContext(BlogTitleContextChange);

export const BlogTitleContextProvider = ({ children }) => {
  const [postTitle, setPostTitle] = useState("");

  const handlePostTitleChange = (e) => setPostTitle(e.target.value);

  return (
    <BlogTitleContext.Provider value={postTitle}>
      <BlogTitleContextChange.Provider value={handlePostTitleChange}>
        {children}
      </BlogTitleContextChange.Provider>
    </BlogTitleContext.Provider>
  );
};
