import styled, { keyframes } from "styled-components";
import { lgScreen, mdScreen } from "../../Global/GlobalStyles";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
  }
`;

export const HeroTextContainer = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};

  h1 {
    font-size: 3rem;
    width: 350px;
    margin: 0 0 1rem;
    line-height: 4rem;

    span {
      color: ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: ${mdScreen}) {
      font-size: 2rem;
      width: 100%;
    }
  }

  p {
    margin: 0;
    font-size: 1.5rem;
    width: 350px;

    a {
      color: ${({ theme }) => theme.colors.primaryColor};

      :hover {
        text-decoration: underline;
      }
    }

    @media screen and (max-width: ${mdScreen}) {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: ${lgScreen}) {
    text-align: center;
  }
`;

export const HeroIconContainer = styled.div`
  font-size: 15rem;
  color: ${({ theme }) => theme.colors.success};
  transform-origin: center center;
  -moz-animation: ${rotate} 5s infinite linear;
  -webkit-animation: ${rotate} 5s infinite linear;
  animation: ${rotate} 10s infinite linear;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 150px;
    height: 150px;
    margin-top: 1rem;
  }
`;
