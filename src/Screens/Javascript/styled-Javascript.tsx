import styled from "styled-components/macro";

export const JavvascriptContainer = styled.div``;

export const JavascriptContainerHeader = styled.header`
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 24px;
`;

export const JavascriptContainerHeaderUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 24px;
`;

export const JavascriptContainerHeaderLI = styled.li`
  button {
    border: 1px solid transparent;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.success};
    transition: ${({ theme }) => theme.transition.fast};

    :hover {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

export const JavaScriptTitle = styled.h1`
  font-size: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
`;

export const JavascriptSubContainer = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.containerColor};

  ${JavaScriptTitle} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding-bottom: 16px;
  }
`;
