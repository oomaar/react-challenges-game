import styled from "styled-components/macro";

export const PortalHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PortalButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryColor};
  transition: ${({ theme }) => theme.transition.medium};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.buttonColor};
  padding: 0.5rem 1rem;
  margin: 0px 16px;
`;

export const PortalBody = styled.div`
  padding: 1rem;
  border-top: 4px solid ${({ theme }) => theme.colors.borderColor};
  z-index: 1;
`;

export const ModalContainer = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  padding: 50px;
  background: ${({ theme }) => theme.colors.borderColor};
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
