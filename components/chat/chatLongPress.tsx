import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { Favorite, DeleteChatIcon, Block } from "../icons/chatIcon";

const ChatLongPress = ({ children }) => {
  return (
    <Dropdown backdrop="blur" trigger="longPress">
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="solid">
        <DropdownItem key="favorite" startContent={<Favorite status={false} />}>
          Add to favorite
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<DeleteChatIcon />}
        >
          Delete chat
        </DropdownItem>

        <DropdownItem
          key="block"
          className="text-danger"
          color="danger"
          startContent={<Block />}
        >
          Block
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatLongPress;
