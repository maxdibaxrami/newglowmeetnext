import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Chip,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

import ExploreFilter from "../explore/exploreFilter";
import { ThemeSwitch } from "../theme-switch";
import { ChatIconSm } from "../icons/bottomMenuIcons";
import NearByFilter from "../naerby/NearByFilter";
import {
  FireIcon,
  ChatIcon,
  ProfileIcon,
  LocationIcon,
  LikeIcon,
} from "../icons/bottomMenuIcons";

const TopBar = ({ selectedTab }) => {
  const theme = useTheme();

  return (
    <Navbar
      className="top-0 fixed top-0 backdrop-blur-lg	"
      style={{ height: "4rem" }}
    >
      <NavbarBrand>
        {selectedTab === "explore" && <FireIcon fill="#a594f9" />}
        {selectedTab === "nearby" && (
          <LocationIcon
            fill="#a594f9"
            stroke={theme.theme === "light" ? "#000" : "#fff"}
          />
        )}
        {selectedTab === "chat" && <ChatIcon fill="#a594f9" />}
        {selectedTab === "likes" && <LikeIcon fill="#a594f9" />}
        {selectedTab === "profile" && <ProfileIcon fill="#a594f9" />}

        <p className="font-bold ml-1 text-inherit">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          {selectedTab === "nearby" && (
            <Chip
              className="mx-2 text-center background-drop--bluebase---darker backdrop-blur-sm	"
              color="default"
              startContent={<ChatIconSm />}
              variant="flat"
            >
              5
            </Chip>
          )}

          <ThemeSwitch />
          {selectedTab === "explore" && <ExploreFilter />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
