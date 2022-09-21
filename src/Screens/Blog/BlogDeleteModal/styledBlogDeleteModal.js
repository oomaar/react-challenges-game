import styled from "styled-components";

export const DeleteModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.index.top};
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transition.fast};
  height: ${({ showDeleteModal }) => (showDeleteModal ? "100vh" : "0vh")};
  overflow: ${({ showDeleteModal }) =>
    showDeleteModal ? "visible" : "hidden"};
`;

export const DeleteModalBackDrop = styled.div`
  position: fixed;
  inset: 0;
`;

export const DeleteModalBody = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.3rem;
  width: 500px;
`;

export const DeleteModalText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 1rem 0;
`;

export const DeleteIcon = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.titleColor};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const DeleteModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DeleteModalButton = styled.button`
  border: 1px solid transparent;
  outline: 0;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  transition: ${({ theme }) => theme.transition.fast};
  color: ${({ theme }) => theme.colors.titleColor};

  &.confirm {
    background: ${({ theme }) => theme.colors.alert};

    :hover {
      background: transparent;
      border-color: ${({ theme }) => theme.colors.alert};
      color: ${({ theme }) => theme.colors.alert};
    }
  }

  &.cancel {
    background: transparent;

    :hover {
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;
