import styled from "styled-components/macro";

export const CounterContainer = styled.div`
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
`;

export const CounterText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
`;

export const CounterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0rem 5rem;
`;

export const CounterButton = styled.button`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.titleColor};
  background: ${({ theme }) => theme.colors.scrollBarColor};
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  transition: all 0.4s ease;
`;
