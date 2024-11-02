import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { BlockAndReport, MoreIcon, ReportIcon } from "../icons/exploreIcons";

const ExploreCardOption = ({ page }) => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          isIconOnly
          color="primary"
          style={{
            position: "absolute",
            right: "32px",
            top: "33px"
          }}
          variant="flat"
        >
          <MoreIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="solid">
        <DropdownItem key="delete" startContent={<ReportIcon />}>
          Report
        </DropdownItem>

        <DropdownItem
          key="delete"
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

export default ExploreCardOption;
