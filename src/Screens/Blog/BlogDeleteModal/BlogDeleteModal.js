import {
  DeleteIcon,
  DeleteModalBackDrop,
  DeleteModalBody,
  DeleteModalContainer,
  DeleteModalFooter,
  DeleteModalButton,
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
        <p>
          Are you sure you want to delete {`This`} Blog
          <DeleteIcon>
            <i className="bx bxs-trash" />
          </DeleteIcon>
        </p>
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
