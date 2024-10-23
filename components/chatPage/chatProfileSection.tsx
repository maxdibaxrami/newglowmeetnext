import { Navbar, Avatar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import { BackMenu } from "../icons/chatIcon";

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

          <NavbarItem className="lg:flex flex items-center">
            <Avatar
              isBordered
              className="mr-2"
              color="default"
              radius="sm"
              size="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <div className="flex flex-col ml-2">
              <span className="text-large bold">{"Mahdi Bahrmai"}</span>
              <span className="text-small bold" style={{ color: "#22c55e" }}>
                {"Online"}
              </span>
            </div>
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
