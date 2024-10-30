import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import ExploreFilter from "../explore/exploreFilter";
import { ThemeSwitch } from "../theme-switch";
import { FireIcon } from "../icons/bottomMenuIcons";
import NearByFilter from "../naerby/NearByFilter";

const TopBar = ({ selectedTab }) => {
  return (
    <Navbar style={{ display: "flex", zIndex: 50 }}>
      <NavbarBrand>
        <FireIcon />
        <p className="font-bold text-inherit">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
          {selectedTab === "explore" && <ExploreFilter />}
          {selectedTab === "nearby" && <NearByFilter />}

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
