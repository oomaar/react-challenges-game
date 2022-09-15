import styled from "styled-components";

export const HomeContainer = styled.div``;

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const HomeLogo = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const HomeLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;
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
