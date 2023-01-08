import styled from "styled-components/macro";
import { lgScreen, NavbarHeight, xlScreen } from "../../Global/GlobalStyles";

export const NavNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  height: ${NavbarHeight};

  @media screen and (max-width: ${xlScreen}) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled.div`
  cursor: pointer;

  h1 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.titleColor};
    transition: ${({ theme }) => theme.transition.fast};
    margin: 0;

    i {
      margin-right: 0.3rem;
      transition: ${({ theme }) => theme.transition.fast};
      position: relative;
    }

    :hover i {
      transform: rotate(360deg);
    }

    span {
      overflow: hidden;
      opacity: 0;
      transition: ${({ theme }) => theme.transition.fast};
    }

    :hover span {
      width: auto;
      overflow: visible;
      opacity: 1;
    }
  }
`;

export const NavNavButton = styled.div`
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

export const NavLinksList = styled.ul<{ showMenu: boolean }>`
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

export const NavLinksListItem = styled.li`
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

export const ThemeIcon = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
`;
