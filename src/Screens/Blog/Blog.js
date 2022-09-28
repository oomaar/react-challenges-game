import { useState } from "react";
import { BlogDeleteModal } from "./BlogDeleteModal/BlogDeleteModal";
import { BlogModal } from "./BlogModal/BlogModal";
import { BlogUpdateModal } from "./BlogUpdateModal/BlogUpdateModal";
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatePostTitle, setUpdatePostTitle] = useState("");
  const [updatePostBody, setUpdatePostBody] = useState("");
  const [posts, setPosts] = useState([
    {
      title: "Blog Post 1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam earum possimus eius iste, libero maiores unde rerum architecto perferendis quas adipisci non eos quam repellendus molestias voluptatem dolor reprehenderit aliquid repudiandae odit error, mollitia rem id totam. Perspiciatis illo quo obcaecati ducimus ab impedit? Consequatur modi ipsum voluptates cumque officiis.",
    },
  ]);

  const addNewBlog = () => setShowAddModal(true);

  const handleDeletePost = () => {
    setPosts([]);
    setShowDeleteModal(false);
  };

  const handleUpdatePost = (title, body) => {
    setUpdatePostTitle(title);
    setUpdatePostBody(body);
    setShowUpdateModal(true);
  };

  return (
    <BlogContainer>
      <BlogPageHeader>
        <BlogAddNewButton onClick={addNewBlog}>Add a Blog</BlogAddNewButton>
      </BlogPageHeader>
      {posts.map((post, id) => (
        <BlogPostContainer key={id}>
          <BlogPostHeader>
            <BlogPostTitle>{post.title}</BlogPostTitle>
            <BlogPostIcons>
              <i
                className="bx bx-edit-alt"
                onClick={() => handleUpdatePost(post.title, post.body)}
              />
              <i
                className="bx bxs-trash"
                onClick={() => setShowDeleteModal(true)}
              />
            </BlogPostIcons>
          </BlogPostHeader>
          <BlogPostBody>{post.body}</BlogPostBody>
        </BlogPostContainer>
      ))}
      <>
        <BlogModal
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          setPosts={setPosts}
        />
        <BlogDeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          handleDeletePost={handleDeletePost}
        />
        <BlogUpdateModal
          showUpdateModal={showUpdateModal}
          updatePostTitle={updatePostTitle}
          updatePostBody={updatePostBody}
          setShowUpdateModal={setShowUpdateModal}
          setPosts={setPosts}
        />
      </>
    </BlogContainer>
  );
};
