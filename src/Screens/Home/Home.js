import { Link } from "react-router-dom";
import {
  HomeContainer,
  HomeNavbar,
  HomeLogo,
  HomeLinksList,
  HomeLinksListItem,
} from "./styledHome";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeNavbar>
        <HomeLogo>
          <h1>React Games</h1>
        </HomeLogo>
        <HomeLinksList>
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
