import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import { BackMenu } from "../icons/chatIcon";
import UserModal from "../profile/userModal";

import ChatDetailMenu from "./chatDetailMenu";

const ChatProfileSection = () => {
  return (
    <div>
      <Navbar disableAnimation className="absolute top-0">
        <NavbarContent justify="start">
          <NavbarItem className="lg:flex">
            <Link href="/">
              <Button
                isIconOnly
                aria-label="Like"
                className="mr-2"
                color="primary"
              >
                <BackMenu />
              </Button>
            </Link>
          </NavbarItem>

          <NavbarItem className="">
            <UserModal />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <ChatDetailMenu />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default ChatProfileSection;
