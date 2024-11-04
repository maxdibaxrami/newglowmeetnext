import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Button, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import {useRef} from 'react'
import { BackMenu } from "../icons/chatIcon";
import UserModal from "../profile/userModal";

import ChatDetailMenu from "./chatDetailMenu";

const ChatProfileSection = () => {
  const router = useRouter()

  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.callChildFunction(); // Call the function in the child
    }
  };
  
  return (
    <div>
      <Navbar
        disableAnimation
        className="absolute top-0"
        classNames={{ wrapper: "px-4" }}
      >
        <NavbarContent justify="start">
          <NavbarItem className="lg:flex">
              <Button
                isIconOnly
                aria-label="Like"
                className="mr-2"
                color="primary"
                onPress={e=> router.back()}
              >
                <BackMenu />
              </Button>
          </NavbarItem>

          <NavbarItem className="">
            <button className="lg:flex flex items-center" onClick={handleClick}>
              <Avatar
                isBordered
                className="mr-2"
                color="default"
                radius="sm"
                size="md"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
              <div className="flex flex-col ml-2 text-left">
                <span className="text-large bold">{"Mahdi Bahrmai"}</span>
                <span className="text-small bold" style={{ color: "#22c55e" }}>
                  {"Online"}
                </span>
              </div>
            </button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <ChatDetailMenu  />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <UserModal ref={childRef}/>
    </div>
  );
};

export default ChatProfileSection;
