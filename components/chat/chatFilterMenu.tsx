import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { FilterButton } from "../icons/chatIcon";
const ChatFiltermenu =() => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button size="sm" isIconOnly color="primary" aria-label="Like">
            <FilterButton />
        </Button> 
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ChatFiltermenu