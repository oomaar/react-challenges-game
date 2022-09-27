import styled from "styled-components";
import { mdScreen, NavbarHeight } from "../../Global/GlobalStyles";

export const TwitterAside = styled.aside`
  width: 250px;
  height: calc(100vh - ${NavbarHeight});
  padding: 0.5rem;
  border-right: 2px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.titleColor};
  position: fixed;
  top: ${NavbarHeight};
  left: 0;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  z-index: ${({ theme }) => theme.index.middle};
  overflow-y: scroll;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
    right: 0;
  }
`;

export const TwitterLogo = styled.div`
  font-size: 2rem;
  padding: 0 0.5rem;
`;

export const SidebarLinksList = styled.ul``;

export const SidebarLinksListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: ${({ theme }) => theme.transition.fast};

  i {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  div.more {
    border: 1px solid ${({ theme }) => theme.colors.titleColor};
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.notifications {
    position: relative;

    ::after {
      content: "20+";
      background: ${({ theme }) => theme.colors.primaryColor};
      width: 35px;
      font-size: 0.6rem;
      border-radius: 30%;
      text-align: center;
      position: absolute;
      left: 0;
      top: -4px;
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const TweetButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonColor};
  background: ${({ theme }) => theme.colors.primaryColor};
  transition: ${({ theme }) => theme.transition.fast};
  border: 0;
  outline: 0;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.2rem;
  margin-top: 2rem;

  :hover {
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem auto 0;
  justify-content: space-around;
  width: 200px;
  transition: ${({ theme }) => theme.transition.fast};
  cursor: pointer;
  border-radius: 0.5rem;

  :hover {
    background: ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const SidebarProfileImage = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.titleColor};
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const SidebarProfileTextContainer = styled.div`
  h3 {
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.textColor};
    margin: 0;
  }
`;

export const SidebarProfileOptions = styled.div`
  position: fixed;
  top: unset;
  bottom: 5rem;
  width: 230px;
  padding: 0.3rem 0.5rem;
  z-index: ${({ theme }) => theme.index.top};
  transition: ${({ theme }) => theme.transition.fast};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  opacity: ${({ showProfileOptions }) => (showProfileOptions ? "1" : "0")};
  overflow: ${({ showProfileOptions }) =>
    showProfileOptions ? "visible" : "hidden"};

  ::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.borderColor};
    position: absolute;
    left: 40%;
  }
`;

export const SidebarProfileOptionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  i.bx-check {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.5rem;
  }
`;

export const SidebarProfileOptionsBody = styled.div`
  p {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textColor};
    transition: ${({ theme }) => theme.transition.fast};

    :hover {
      color: ${({ theme }) => theme.colors.titleColor};
    }
  }
`;
