import styled from "styled-components/macro";

export const PaginationContainer = styled.div`
  display: flex;
  margin: 1rem 0rem;
  justify-content: flex-end;
`;

export const PaginationButton = styled.button<{ active: boolean }>`
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.titleColor};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primaryColor : theme.colors.scrollBarThumb};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  margin: 0 0.1rem;
  font-size: 1rem;
  cursor: pointer;
`;
