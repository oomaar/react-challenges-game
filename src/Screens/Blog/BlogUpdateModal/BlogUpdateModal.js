import { useState } from "react";
import setHeight from "../../../utils/setTextAreaHeight";
import {
  BlogFormFooter,
  BlogModalForm,
  BlogModalFormCloseIcon,
  BlogModalFormInput,
  BlogModalFormInputContainer,
  BlogModalFormTextArea,
  BlogModalInputLabel,
  BlogSubmitButton,
} from "../BlogModal/styledBlogModal";
import {
  BlogUpdateModalBackdrop,
  BlogUpdateModalContainer,
} from "./styledBlogUpdateModal";

const BlogUpdateModal = ({
  showUpdateModal,
  updatePostTitle,
  updatePostBody,
  setShowUpdateModal,
  setPosts,
}) => {
  const [postTitle, setPostTitle] = useState(updatePostTitle);
  const [postBody, setPostBody] = useState(updatePostBody);

  const newPost = [
    {
      title: postTitle,
      body: postBody,
    },
  ];

  const onUpdate = () => {
    setShowUpdateModal(false);
    setPosts(newPost);
  };

  const onTitleInputChange = (event) => {
    setPostTitle(event.target.value);
  };

  const onBodyInputChange = (event) => {
    setHeight(event, "100px");
    setPostBody(event.target.value);
  };

  return (
    <BlogUpdateModalContainer showUpdateModal={showUpdateModal}>
      <BlogUpdateModalBackdrop
        onClick={() => setShowUpdateModal(false)}
        showUpdateModal={showUpdateModal}
      />
      <BlogModalForm onSubmit={(e) => e.preventDefault()}>
        <BlogModalFormCloseIcon onClick={() => setShowUpdateModal(false)}>
          <i className="bx bx-x" />
        </BlogModalFormCloseIcon>

        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Title</BlogModalInputLabel>
          <BlogModalFormInput
            value={postTitle}
            type="text"
            onChange={onTitleInputChange}
          />
        </BlogModalFormInputContainer>
        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Body</BlogModalInputLabel>
          <BlogModalFormTextArea
            value={postBody}
            onChange={onBodyInputChange}
          ></BlogModalFormTextArea>
        </BlogModalFormInputContainer>
        <BlogFormFooter>
          <BlogSubmitButton type="submit" onClick={onUpdate}>
            Update
          </BlogSubmitButton>
        </BlogFormFooter>
      </BlogModalForm>
    </BlogUpdateModalContainer>
  );
};

export default BlogUpdateModal;
