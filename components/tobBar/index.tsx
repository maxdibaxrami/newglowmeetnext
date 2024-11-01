import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Chip
} from "@nextui-org/react";

import ExploreFilter from "../explore/exploreFilter";
import { ThemeSwitch } from "../theme-switch";
import { FireIcon, ChatIconSm } from "../icons/bottomMenuIcons";
import NearByFilter from "../naerby/NearByFilter";

const TopBar = ({ selectedTab }) => {
  return (
    <Navbar style={{height:"4rem"}} className="top-0 fixed top-0 backdrop-blur-lg	">
      <NavbarBrand>

        <p className="font-bold text-inherit">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </p>
      </NavbarBrand>
      

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
        {selectedTab === "nearby" && (
           <Chip
            startContent={<ChatIconSm />}
            variant="flat"
            color="default"
            className="mx-2 text-center background-drop--bluebase---darker"
          >
            5
          </Chip>
        )}

         
          <ThemeSwitch />
          {selectedTab === "explore" && <ExploreFilter />}
          {selectedTab === "nearby" && <NearByFilter />}

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
