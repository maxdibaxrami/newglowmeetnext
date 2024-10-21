import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { FilterButton } from "../icons/chatIcon";
import { NewIcon, Favorite } from "../icons/chatIcon";
const ChatFiltermenu = () => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button isIconOnly aria-label="Like" color="primary" size="sm">
          <FilterButton />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded">
        <DropdownItem key="new" startContent={<NewIcon />}>
          New
        </DropdownItem>
        <DropdownItem key="Favorite" startContent={<Favorite status={false} />}>
          Favorite
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatFiltermenu;
