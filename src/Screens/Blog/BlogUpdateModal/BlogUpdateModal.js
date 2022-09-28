import { useState } from "react";
import {
  useBlogTitle,
  useBlogTitleChange,
} from "../../../Context/BlogTitleContext";
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

export const BlogUpdateModal = ({
  showUpdateModal,
  updatePostTitle,
  updatePostBody,
  setShowUpdateModal,
  setPosts,
}) => {
  const postTitle = useBlogTitle();
  const setPostTitle = useBlogTitleChange();
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
    setPostTitle(event);
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
