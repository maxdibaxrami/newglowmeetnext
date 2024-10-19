import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { MoreIcon,Favorite, Block } from "../icons/chatIcon";
const ChatDetailMenu =()=> {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
            <Button className="m-1" size="md" isIconOnly color="primary" aria-label="Like">
                    <MoreIcon/>
                </Button> 
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem startContent={<Favorite status={false}/>} key="new">Add to favorite</DropdownItem>
        <DropdownItem startContent={<Block/>} key="delete" className="text-danger" color="danger">
          Block and report
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ChatDetailMenu