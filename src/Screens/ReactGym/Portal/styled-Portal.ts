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

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

export const ModalForm = styled.div<{
  isModalOpen: boolean;
  width?: number;
  height?: number;
}>`
  position: relative;
  height: ${({ height }) => (height !== undefined ? `${height}px` : `550px`)};
  width: ${({ width }) => (width !== undefined ? `${width}px` : `550px`)};
  z-index: 1000;
  padding: 50px;
  align-items: center;
  background: ${({ theme }) => theme.colors.borderColor};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0px)" : "translateY(-1000000000000vh)"};
  transition: ${({ theme }) => theme.transition.fast};
`;

export const Overlay = styled.div<{ isModalOpen: boolean }>`
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0px)" : "translateY(-1000000000000vh)"};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transition: ${({ theme }) => theme.transition.medium};
`;
