import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { DeleteChatIcon, Favorite, MoreIcon } from "../icons/chatIcon";
import { BlockAndReport } from "../icons/exploreIcons";

const ChatItemMenu = () => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="Like"
          color="default"
          size="sm"
          variant="light"
        >
          <MoreIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem key="favorite" startContent={<Favorite status={false} />}>
          Add to favorite
        </DropdownItem>
        <DropdownItem
          key="deletechat"
          className="text-danger"
          color="danger"
          startContent={<DeleteChatIcon />}
        >
          Delete chat
        </DropdownItem>
        <DropdownItem
          key="blockandreport"
          className="text-danger"
          color="danger"
          startContent={<BlockAndReport />}
        >
          Block and report
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatItemMenu;
