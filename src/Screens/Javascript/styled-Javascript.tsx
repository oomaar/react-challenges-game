import styled from "styled-components/macro";

export const JavvascriptContainer = styled.div``;

export const JavaScriptTitle = styled.h1`
  font-size: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
`;

export const JavvascriptSubContainer = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.containerColor};

  ${JavaScriptTitle} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding-bottom: 16px;
  }
`;
