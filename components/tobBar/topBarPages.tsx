import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";

import { BackMenu } from "../icons/topBar";

const TopBarPages = () => {
  return (
    <Navbar disableAnimation isBordered className="">
      <NavbarContent justify="start">
        <NavbarItem>
          <Link href={"/"}>
            <Button isIconOnly aria-label="Like" color="default">
              <BackMenu />
            </Button>
          </Link>
        </NavbarItem>

        <NavbarItem className="flex items-center justify-center">
          <p className="font-bold text-inherit">Glow meet</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBarPages;
