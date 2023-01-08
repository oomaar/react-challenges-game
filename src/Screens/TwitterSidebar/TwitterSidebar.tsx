import twitterSidebarData from "./twitterSidebarData.json";
import {
  TwitterAside,
  TwitterLogo,
  SidebarLinksList,
  SidebarLinksListItem,
  TweetButton,
  SidebarProfile,
  SidebarProfileImage,
  SidebarProfileTextContainer,
  SidebarProfileOptions,
  SidebarProfileOptionsHeader,
  SidebarProfileOptionsBody,
} from "./styledTwitterSidebar";
import { useState } from "react";

export const TwitterSidebar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const links = twitterSidebarData.map((link) => (
    <SidebarLinksListItem key={link.id}>
      <div
        className={
          link.name === "More"
            ? "more"
            : link.name === "Notifications"
            ? "notifications"
            : ""
        }
      >
        <i className={link.icon} />
      </div>
      <p>{link.name}</p>
    </SidebarLinksListItem>
  ));

  return (
    <TwitterAside>
      <TwitterLogo>
        <i className="bx bxl-twitter" />
      </TwitterLogo>
      <SidebarLinksList>{links}</SidebarLinksList>
      <TweetButton>Tweet</TweetButton>
      <SidebarProfile onClick={() => setShowProfileOptions((state) => !state)}>
        <SidebarProfileImage>
          <i className="bx bx-user" />
        </SidebarProfileImage>
        <SidebarProfileTextContainer>
          <h3>Full Name</h3>
          <p>@username</p>
        </SidebarProfileTextContainer>
        <div>
          <i className="bx bx-dots-horizontal-rounded" />
        </div>
      </SidebarProfile>

      <SidebarProfileOptions showProfileOptions={showProfileOptions}>
        <SidebarProfileOptionsHeader>
          <SidebarProfileImage>
            <i className="bx bx-user" />
          </SidebarProfileImage>
          <SidebarProfileTextContainer>
            <h3>Full Name</h3>
            <p>@username</p>
          </SidebarProfileTextContainer>
          <div>
            <i className="bx bx-check" />
          </div>
        </SidebarProfileOptionsHeader>
        <SidebarProfileOptionsBody>
          <p>Add an existing account</p>
          <p>Log out @username</p>
        </SidebarProfileOptionsBody>
      </SidebarProfileOptions>
    </TwitterAside>
  );
};
