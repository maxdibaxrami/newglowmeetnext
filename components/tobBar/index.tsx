import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import ExploreFilter from "../explore/exploreFilter";

const TopBar = ({ selectedTab }) => {
  return (
    <Navbar style={{ display: "flex", zIndex: 1000 }}>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          {selectedTab === "explore" && <ExploreFilter />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
