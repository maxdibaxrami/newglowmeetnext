import {Navbar, Avatar, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { BackMenu } from "../icons/chatIcon";
import ChatDetailMenu from "./chatDetailMenu";
import Link from 'next/link'

const ChatProfileSection = () => {
    return <div>
        <Navbar className="absolute top-0" disableAnimation>
    <NavbarContent justify="start">
        <NavbarItem className="lg:flex">
    
                <Link  href="/">
                    <Button className="mr-2" isIconOnly color="default" aria-label="Like">
                        <BackMenu />
                    </Button> 
                </Link>
            </NavbarItem>
        </NavbarContent>
    <NavbarContent className="sm:flex gap-4" justify="center">
    <NavbarItem className="lg:flex flex items-center">
    
    <Avatar className="mr-2" color="primary" isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <div className="flex flex-col ml-2">
                        <span className="text-large bold">{"mahdi barami"}</span>
                    </div>
                    </NavbarItem>
    
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="lg:flex">
        <ChatDetailMenu/>
      </NavbarItem>
    </NavbarContent>
    </Navbar>
    </div>
}

export default ChatProfileSection


