import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

import { BackMenu } from "../icons/topBar";

const TopBarPages = () => {
  const router = useRouter()

  return (
    <Navbar disableAnimation isBordered className="">
      <NavbarContent justify="start">
        <NavbarItem>
            <Button onPress={e=> router.back()} isIconOnly aria-label="Like" color="default">
              <BackMenu />
            </Button>
        </NavbarItem>

        <NavbarItem className="flex items-center justify-center">
          <p className="font-bold text-inherit">Glow meet</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBarPages;
