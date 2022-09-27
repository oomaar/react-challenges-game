import styled from "styled-components";
import { lgScreen, xlScreen } from "../../Global/GlobalStyles";

export const BlogContainer = styled.div``;

export const BlogPageHeader = styled.header`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 1rem;
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
  color: ${({ theme }) => theme.colors.buttonColor};
  transition: ${({ theme }) => theme.transition.fast};

  :hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: ${xlScreen}) {
    margin: 0 2rem 0 auto;
  }

  @media screen and (max-width: ${lgScreen}) {
    margin: 0 1rem 0 auto;
    font-size: 1rem;
  }
`;

export const BlogPostContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin: 1rem auto;
  border-radius: 0.3rem;
  padding: 0 1rem 1rem;
  width: 1000px;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
  }
`;

export const BlogPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const BlogPostTitle = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const BlogPostIcons = styled.div`
  display: flex;
  gap: 0rem 1rem;
  font-size: 1.5rem;

  .bx-edit-alt {
    color: ${({ theme }) => theme.colors.warning};
    cursor: pointer;
  }

  .bxs-trash {
    color: ${({ theme }) => theme.colors.alert};
    cursor: pointer;
  }
`;

export const BlogPostBody = styled.div``;
