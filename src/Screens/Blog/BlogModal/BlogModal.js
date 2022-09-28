import { useState } from "react";
import {
  useBlogTitle,
  useBlogTitleChange,
} from "../../../Context/BlogTitleContext";
import setHeight from "../../../utils/setTextAreaHeight";
import {
  BlogFormFooter,
  BlogModalBackdrop,
  BlogModalContainer,
  BlogModalErrorText,
  BlogModalForm,
  BlogModalFormCloseIcon,
  BlogModalFormInput,
  BlogModalFormInputContainer,
  BlogModalFormTextArea,
  BlogModalInputLabel,
  BlogSubmitButton,
} from "./styledBlogModal";

export const BlogModal = ({ showAddModal, setShowAddModal, setPosts }) => {
  const postTitle = useBlogTitle();
  const setPostTitle = useBlogTitleChange();
  const [postBody, setPostBody] = useState("");
  const [formValidation, setFormValidation] = useState({
    error: false,
    message: "",
  });
  const resetFormValidation = () =>
    setFormValidation({ error: false, message: "" });

  const newPost = [
    {
      title: postTitle,
      body: postBody,
    },
  ];

  const handleCloseModal = () => {
    resetFormValidation();
    setShowAddModal(false);
  };

  const onPost = () => {
    if (postBody !== "" && postTitle === "") {
      setFormValidation({ error: true, message: "Enter a title for the post" });
    } else if (postBody === "" && postTitle !== "") {
      setFormValidation({ error: true, message: "Enter a body for the post" });
    } else if (postBody === "" && postTitle === "") {
      setFormValidation({
        error: true,
        message: "Enter Title & Body for the post",
      });
    } else if (postBody !== "" && postTitle !== "" && !formValidation.error) {
      resetFormValidation();
      setShowAddModal(false);
      setPosts(newPost);
    }
  };

  const onTitleInputChange = (event) => {
    setPostTitle(event);
    resetFormValidation();
  };

  const onBodyInputChange = (event) => {
    setHeight(event, "100px");
    setPostBody(event.target.value);
    resetFormValidation();
  };

  return (
    <BlogModalContainer showAddModal={showAddModal}>
      <BlogModalBackdrop onClick={handleCloseModal} />
      <BlogModalForm onSubmit={(e) => e.preventDefault()}>
        <BlogModalFormCloseIcon onClick={handleCloseModal}>
          <i className="bx bx-x" />
        </BlogModalFormCloseIcon>

        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Title</BlogModalInputLabel>
          <BlogModalFormInput
            formValidation={formValidation.error}
            type="text"
            placeholder="Enter Blog Title..."
            onChange={onTitleInputChange}
          />
        </BlogModalFormInputContainer>
        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Body</BlogModalInputLabel>
          <BlogModalFormTextArea
            formValidation={formValidation.error}
            onChange={onBodyInputChange}
            placeholder="Start typing..."
          ></BlogModalFormTextArea>
        </BlogModalFormInputContainer>
        <BlogFormFooter>
          {formValidation.error && (
            <BlogModalErrorText>{formValidation.message}</BlogModalErrorText>
          )}
          <BlogSubmitButton type="submit" onClick={onPost}>
            Post
          </BlogSubmitButton>
        </BlogFormFooter>
      </BlogModalForm>
    </BlogModalContainer>
  );
};
