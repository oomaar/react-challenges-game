import styled from "styled-components";

export const BlogModalContainer = styled.div`
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
  height: ${({ showAddModal }) => (showAddModal ? "100vh" : "0vh")};
  overflow: ${({ showAddModal }) => (showAddModal ? "visible" : "hidden")};
`;

export const BlogModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
`;

export const BlogModalForm = styled.form`
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.3rem;
  width: 500px;
`;

export const BlogModalErrorText = styled.p`
  color: ${({ theme }) => theme.colors.alert};
  font-size: 1rem;
`;

export const BlogModalFormCloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.alert};
  cursor: pointer;
`;

export const BlogModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;

  ::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.success};
    transition: ${({ theme }) => theme.transition.fast};
  }

  :focus-within:after {
    width: 100%;
  }
`;

export const BlogModalInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 1.6rem;
  font-weight: 700;
  transition: ${({ theme }) => theme.transition.fast};
`;

export const BlogModalFormInput = styled.input`
  border: 1px solid
    ${({ formValidation, theme }) =>
      formValidation ? theme.colors.alert : theme.colors.primaryColor};
  border-radius: 0.3rem;
  background: transparent;
  padding: 1rem 0.4rem;
  outline: 0;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  transition: ${({ theme }) => theme.transition.fast};

  :focus {
    border: 1px solid transparent;
    outline: 0;
  }
`;

export const BlogModalFormTextArea = styled.textarea`
  outline: 0;
  border: 1px solid
    ${({ formValidation, theme }) =>
      formValidation ? theme.colors.alert : theme.colors.primaryColor};
  border-radius: 0.3rem;
  background: transparent;
  resize: none;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  height: 100px;
  padding: 1rem 0.4rem;
  transition: ${({ theme }) => theme.transition.fast};

  :focus {
    border: 1px solid transparent;
  }
`;

export const BlogFormFooter = styled.footer`
  display: flex;
`;

export const BlogSubmitButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0 0 auto;
  border-radius: 0.3rem;
  font-size: 1.25rem;
  letter-spacing: 0.02rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.titleColor};
  transition: ${({ theme }) => theme.transition.fast};

  :hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.titleColor};
    color: #000;
  }
`;
