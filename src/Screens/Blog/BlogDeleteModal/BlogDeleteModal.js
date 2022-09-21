import {
  DeleteIcon,
  DeleteModalBackDrop,
  DeleteModalBody,
  DeleteModalContainer,
  DeleteModalFooter,
  DeleteModalButton,
  DeleteModalText,
} from "./styledBlogDeleteModal";

export const BlogDeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  handleDeletePost,
}) => {
  return (
    <DeleteModalContainer showDeleteModal={showDeleteModal}>
      <DeleteModalBackDrop
        showDeleteModal={showDeleteModal}
        onClick={() => setShowDeleteModal(false)}
      />
      <DeleteModalBody>
        <DeleteModalText>
          Are you sure you want to delete {`This`} Blog
          <DeleteIcon>
            <i className="bx bxs-trash" />
          </DeleteIcon>
        </DeleteModalText>
        <DeleteModalFooter>
          <DeleteModalButton className="confirm" onClick={handleDeletePost}>
            Confirm
          </DeleteModalButton>
          <DeleteModalButton
            className="cancel"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </DeleteModalButton>
        </DeleteModalFooter>
      </DeleteModalBody>
    </DeleteModalContainer>
  );
};
