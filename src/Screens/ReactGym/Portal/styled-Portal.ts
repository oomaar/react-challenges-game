import styled from "styled-components/macro";

export const PortalHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background: ${({ theme }) => theme.colors.primaryColor};
    transition: ${({ theme }) => theme.transition.medium};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.buttonColor};
    padding: 0.5rem 1rem;
    margin: 0px 16px;
  }
`;

export const PortalBody = styled.div`
  padding: 1rem;
  border-top: 4px solid ${({ theme }) => theme.colors.borderColor};
`;
