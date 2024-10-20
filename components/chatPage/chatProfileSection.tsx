import {Listbox, ListboxItem, Avatar} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { BackMenu } from "../icons/chatIcon";
import ChatDetailMenu from "./chatDetailMenu";
import Link from 'next/link'

const ChatProfileSection = () => {
    return <div className="flex w-full px-2 py-2 justify-between items-center"> 
            <div className="flex gap-2 items-center">
            <Link  href="/">
                <Button className="mr-2" isIconOnly color="default" aria-label="Like">
                    <BackMenu />
                </Button> 
            </Link>
                <Avatar className="mr-2" color="primary" isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <div className="flex flex-col ml-2">
                    <span className="text-large bold">{"mahdi barami"}</span>
                </div>
            </div>
            <div>
             <ChatDetailMenu/>
                
            </div>
    </div>
}

export default ChatProfileSection