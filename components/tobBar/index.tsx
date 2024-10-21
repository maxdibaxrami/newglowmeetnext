import {
  Navbar,
  NavbarBrand,
  Badge,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { FireIcon, BellIcon } from "../icons/topBar";

const TopBar = () => {
  return (
    <Navbar disableAnimation isBordered className="">
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <FireIcon />
          <p className="font-bold text-inherit">Glow meet</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Badge color="danger" content="5" placement="bottom-left" size="sm">
            <Button isIconOnly aria-label="Like" color="primary">
              <BellIcon />
            </Button>
          </Badge>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
