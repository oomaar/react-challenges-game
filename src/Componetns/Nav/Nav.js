import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavNavbar,
  NavLogo,
  NavLinksList,
  NavLinksListItem,
  NavNavButton,
  CloseButton,
} from "./styledNav";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <NavNavbar>
        <NavLogo>
          <h1>
            <i className="bx bxl-react" />
            <span>Games</span>
          </h1>
        </NavLogo>
        <NavNavButton onClick={() => setShowMenu(true)}>
          <i className="bx bx-menu" />
        </NavNavButton>
        <NavLinksList showMenu={showMenu}>
          <CloseButton>
            <i className="bx bx-x" onClick={() => setShowMenu(false)} />
          </CloseButton>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/twitter`}>Twitter Sidebar</Link>
          </NavLinksListItem>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/`}>Link 2</Link>
          </NavLinksListItem>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/`}>Link 3</Link>
          </NavLinksListItem>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/`}>Link 4</Link>
          </NavLinksListItem>
        </NavLinksList>
      </NavNavbar>
    </div>
  );
};
