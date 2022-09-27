import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme, useThemeUpdate } from "../../Context/ThemeContext";
import {
  NavNavbar,
  NavLogo,
  NavLinksList,
  NavLinksListItem,
  NavNavButton,
  CloseButton,
  ThemeIcon,
} from "./styledNav";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const darkThemeValue = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <NavNavbar>
        <NavLogo>
          <Link to={`/`}>
            <h1>
              <i className="bx bxl-react" />
              <span>Games</span>
            </h1>
          </Link>
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
            <Link to={`/blog`}>Blog</Link>
          </NavLinksListItem>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/third-party`}>Deal with APIs</Link>
          </NavLinksListItem>
          <NavLinksListItem onClick={() => setShowMenu(false)}>
            <Link to={`/`}>Link 4</Link>
          </NavLinksListItem>
          <NavLinksListItem>
            <ThemeIcon>
              {darkThemeValue ? (
                <i className="bx bxs-sun" onClick={toggleTheme} />
              ) : (
                <i className="bx bx-moon" onClick={toggleTheme} />
              )}
            </ThemeIcon>
          </NavLinksListItem>
        </NavLinksList>
      </NavNavbar>
    </div>
  );
};
