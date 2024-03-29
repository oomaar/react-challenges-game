import styled from "styled-components/macro";
import { flexCol } from "../../Global/GlobalStyles";

export const GYMContainer = styled.div`
  ${flexCol};
  gap: 2rem 0rem;
`;

export const ChildContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem 0rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;

  h1 {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.success};
  }
`;
