import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { FilterButton } from "../icons/chatIcon";
import {NewIcon, Favorite} from '../icons/chatIcon'
const ChatFiltermenu =() => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button size="sm" isIconOnly color="primary" aria-label="Like">
            <FilterButton />
        </Button> 
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem startContent={<NewIcon />}  key="new">New</DropdownItem>
        <DropdownItem startContent={<Favorite status={false} />} key="Favorite">Favorite</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ChatFiltermenu