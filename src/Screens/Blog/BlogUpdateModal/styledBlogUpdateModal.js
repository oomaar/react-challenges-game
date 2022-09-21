import styled from "styled-components";

export const BlogUpdateModalContainer = styled.div`
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
  height: ${({ showUpdateModal }) => (showUpdateModal ? "100vh" : "0vh")};
  overflow: ${({ showUpdateModal }) =>
    showUpdateModal ? "visible" : "hidden"};
`;

export const BlogUpdateModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
`;
