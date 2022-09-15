import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  HomeNavbar,
  HomeLogo,
  HomeLinksList,
  HomeLinksListItem,
  HomeNavButton,
  CloseButton,
} from "./styledHome";

export const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HomeContainer>
      <HomeNavbar>
        <HomeLogo>
          <h1>React Games</h1>
        </HomeLogo>
        <HomeNavButton onClick={() => setShowMenu(true)}>
          <i className="bx bx-menu" />
        </HomeNavButton>
        <HomeLinksList showMenu={showMenu}>
          <CloseButton>
            <i className="bx bx-x" onClick={() => setShowMenu(false)} />
          </CloseButton>
          <HomeLinksListItem>
            <Link to={`/twitter`}>Twitter Sidebar</Link>
          </HomeLinksListItem>
          <HomeLinksListItem>
            <Link to={`/`}>Link 2</Link>
          </HomeLinksListItem>
          <HomeLinksListItem>
            <Link to={`/`}>Link 3</Link>
          </HomeLinksListItem>
          <HomeLinksListItem>
            <Link to={`/`}>Link 4</Link>
          </HomeLinksListItem>
        </HomeLinksList>
      </HomeNavbar>
    </HomeContainer>
  );
};
