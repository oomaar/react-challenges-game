import { useState } from "react";
import setHeight from "../../../utils/setTextAreaHeight";
import {
  BlogFormFooter,
  BlogModalBackdrop,
  BlogModalContainer,
  BlogModalForm,
  BlogModalFormCloseIcon,
  BlogModalFormInput,
  BlogModalFormInputContainer,
  BlogModalInputLabel,
  BlogSubmitButton,
} from "./styledBlogModal";

export const BlogModal = ({ showAddModal, setShowAddModal, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const newPost = [
    {
      title: postTitle,
      body: postBody,
    },
  ];

  const onPost = () => {
    setShowAddModal(false);
    setPosts(newPost);
  };

  return (
    <BlogModalContainer showAddModal={showAddModal}>
      <BlogModalBackdrop onClick={() => setShowAddModal(false)} />
      <BlogModalForm onSubmit={(e) => e.preventDefault()}>
        <BlogModalFormCloseIcon onClick={() => setShowAddModal(false)}>
          <i className="bx bx-x" />
        </BlogModalFormCloseIcon>

        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Title</BlogModalInputLabel>
          <BlogModalFormInput
            type="text"
            placeholder="Enter Blog Title..."
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </BlogModalFormInputContainer>
        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Body</BlogModalInputLabel>
          <textarea
            onChange={(event) => {
              setHeight(event, "100px");
              setPostBody(event.target.value);
            }}
            placeholder="Start typing..."
          ></textarea>
        </BlogModalFormInputContainer>
        <BlogFormFooter>
          <BlogSubmitButton type="submit" onClick={onPost}>
            Post
          </BlogSubmitButton>
        </BlogFormFooter>
      </BlogModalForm>
    </BlogModalContainer>
  );
};
