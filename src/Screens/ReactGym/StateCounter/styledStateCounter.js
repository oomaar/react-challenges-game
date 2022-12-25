import styled from "styled-components/macro";

export const CounterContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem 0rem;
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
