import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BlockAndReport, MoreIcon, ReportIcon } from "../icons/exploreIcons";

const ExploreCardOption =() => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          isIconOnly
          variant="flat" 
          style={{position:"absolute",right:"20px",top:"33px"}}
        >
          <MoreIcon/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem 
            key="delete" 
            startContent={
                <ReportIcon/>
            }
            >
            Report
        </DropdownItem>
        
        <DropdownItem
         key="delete"
         className="text-danger" 
         color="danger"
         startContent={
            <BlockAndReport/>
          }
         >
          Block and report
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ExploreCardOption