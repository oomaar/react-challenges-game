import styled from "styled-components";

export const BlogContainer = styled.div``;

export const BlogHeader = styled.header`
  display: flex;
`;

export const BlogAddNewButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 5rem 0 auto;
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
