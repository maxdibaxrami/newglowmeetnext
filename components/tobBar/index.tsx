import {Navbar, NavbarBrand, Badge, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FireIcon, BellIcon } from "../icons/topBar";

const TopBar =() =>{


  return (
    <Navbar className="" disableAnimation isBordered>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <FireIcon />
          <p className="font-bold text-inherit">Glow meet</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
             <Badge size="sm" content="5" color="danger" placement="bottom-left">
                <Button isIconOnly color="primary" aria-label="Like">
                 <BellIcon />
             </Button> 

            </Badge>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
}

export default TopBar