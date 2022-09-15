import styled from "styled-components";
import { lgScreen, xlScreen } from "../../Global/GlobalStyles";

export const HomeContainer = styled.div``;

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media screen and (max-width: ${xlScreen}) {
    justify-content: space-between;
  }
`;

export const HomeLogo = styled.div`
  h1 {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.titleColor};

    i {
      margin-right: 0.3rem;
    }
  }
`;

export const HomeNavButton = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.titleColor};
  cursor: pointer;
  display: none;

  @media screen and (max-width: ${lgScreen}) {
    display: block;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.alert};
  display: none;

  @media screen and (max-width: ${lgScreen}) {
    display: block;
  }
`;

export const HomeLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem 0rem;
    position: fixed;
    inset: 0;
    opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
    transition: ${({ theme }) => theme.transition.fast};
    height: ${({ showMenu }) => (showMenu ? "100vh" : "0")};
    background-color: ${({ theme }) => theme.colors.bodyColor};
    overflow: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
    z-index: ${({ theme }) => theme.index.top};
  }
`;

export const HomeLinksListItem = styled.li`
  padding: 0.3rem 0.5rem;
  font-size: 1.3rem;
  transition: ${({ theme }) => theme.transition.fast};
  transition: ${({ theme }) => theme.transition.fast};

  :hover a {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  a {
    position: relative;
    transition: ${({ theme }) => theme.transition.fast};

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 0.2rem;
      border-radius: 0.3rem;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      transition: ${({ theme }) => theme.transition.fast};
    }

    :hover:after {
      width: 100%;
    }
  }
`;
