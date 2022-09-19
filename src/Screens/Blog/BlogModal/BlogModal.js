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

export const BlogModal = ({ showAddModal, setShowAddModal }) => {
  const onPost = (e) => {
    e.preventDefault();
    setShowAddModal(false);
  };

  return (
    <BlogModalContainer showAddModal={showAddModal}>
      <BlogModalBackdrop onClick={() => setShowAddModal(false)} />
      <BlogModalForm onSubmit={onPost}>
        <BlogModalFormCloseIcon onClick={() => setShowAddModal(false)}>
          <i className="bx bx-x" />
        </BlogModalFormCloseIcon>

        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Title</BlogModalInputLabel>
          <BlogModalFormInput type="text" placeholder="Enter Blog Title..." />
        </BlogModalFormInputContainer>
        <BlogModalFormInputContainer>
          <BlogModalInputLabel>Body</BlogModalInputLabel>
          <textarea
            onChange={(event) => setHeight(event, "100px")}
            placeholder="Start typing..."
          ></textarea>
        </BlogModalFormInputContainer>
        <BlogFormFooter>
          <BlogSubmitButton type="submit">Post</BlogSubmitButton>
        </BlogFormFooter>
      </BlogModalForm>
    </BlogModalContainer>
  );
};
