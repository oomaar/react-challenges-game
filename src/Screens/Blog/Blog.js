import { BlogAddNewButton, BlogContainer, BlogHeader } from "./styledBlog";

export const Blog = () => {
  return (
    <BlogContainer>
      <BlogHeader>
        <BlogAddNewButton>Add a Blog</BlogAddNewButton>
      </BlogHeader>
      {/* <h1>Blog</h1>
      <h1>
        Page Header: Add new blog button: opens a model with a form to add title
        and body of the blog
      </h1>
      <h1>
        Header: left is bolg title and right is edit or delete or (show
        less/show more)
      </h1>
      <h1>Body: simply the blogs body</h1> */}
    </BlogContainer>
  );
};
