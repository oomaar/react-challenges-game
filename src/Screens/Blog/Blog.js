import { useState } from "react";
import { BlogModal } from "./BlogModal/BlogModal";
import {
  BlogAddNewButton,
  BlogContainer,
  BlogPageHeader,
  BlogPostContainer,
  BlogPostTitle,
  BlogPostIcons,
  BlogPostHeader,
  BlogPostBody,
} from "./styledBlog";

export const Blog = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const addNewBlog = () => setShowAddModal(true);

  const posts = [
    {
      id: "1",
      title: "Blog Post 1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam earum possimus eius iste, libero maiores unde rerum architecto perferendis quas adipisci non eos quam repellendus molestias voluptatem dolor reprehenderit aliquid repudiandae odit error, mollitia rem id totam. Perspiciatis illo quo obcaecati ducimus ab impedit? Consequatur modi ipsum voluptates cumque officiis.",
    },
  ];

  return (
    <BlogContainer>
      <BlogPageHeader>
        <BlogAddNewButton onClick={addNewBlog}>Add a Blog</BlogAddNewButton>
      </BlogPageHeader>
      {posts.map((post) => (
        <BlogPostContainer key={post.id}>
          <BlogPostHeader>
            <BlogPostTitle>{post.title}</BlogPostTitle>
            <BlogPostIcons>
              <i className="bx bx-edit-alt" />
              <i className="bx bxs-trash" />
            </BlogPostIcons>
          </BlogPostHeader>
          <BlogPostBody>{post.body}</BlogPostBody>
        </BlogPostContainer>
      ))}
      {/*
      <h1>
        Header: left is bolg title and right is edit or delete or (show
        less/show more)
      </h1>
      <h1>Body: simply the blogs body</h1> */}
      <BlogModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
    </BlogContainer>
  );
};
