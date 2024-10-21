import {Listbox, ListboxItem, CircularProgress, Chip} from "@nextui-org/react";

import {ProfileIcon, ProfilePlue, FlashIcon, LikeIcon, ViewIcon} from "../icons/profileIcon";

const DataList = () => {

  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
        <ListboxItem
          key="new"
          description="Create a new file"
          showDivider
          startContent={<ProfileIcon />}
          endContent={<CircularProgress
            aria-label="Loading..."
            size="lg"
            value={55}
            color="primary"
            showValueLabel={true}
          />}
        >
          Profile
        </ListboxItem>
        <ListboxItem
          key="copy"
          showDivider
          description="Copy the file link"
          startContent={<FlashIcon />}
          endContent={<CircularProgress
            aria-label="Loading..."
            size="lg"
            value={100}
            color="success"
            showValueLabel={true}
          />}
        >
          Activity
        </ListboxItem>
        <ListboxItem
          key="edit"
          showDivider
          description="Allows you to edit the file"
          startContent={<LikeIcon />}
          endContent={
            <Chip>22</Chip>
          }
        >
          Who like you
        </ListboxItem>
        <ListboxItem
          key="delete"
          description="Permanently delete the file"
          startContent={<ViewIcon />}
          endContent={
            <Chip>33</Chip>
          }
        >
          Views
        </ListboxItem>
      </Listbox>
    </div>
  );
}

export default DataList