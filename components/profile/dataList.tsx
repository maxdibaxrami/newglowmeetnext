import {Listbox, ListboxItem, CircularProgress, Chip} from "@nextui-org/react";

import {ProfileIcon, FlashIcon, LikeIcon, ViewIcon} from "../icons/profileIcon";

const DataList = () => {

  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
        <ListboxItem
          key="new"
          description="Edit profile"
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
          description="Boost profile"
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
          description="You can see who like your profile"
          startContent={<LikeIcon />}
          endContent={
            <Chip>22</Chip>
          }
        >
          Who like you
        </ListboxItem>
        <ListboxItem
          key="delete"
          description="You can see who see your profile"
          startContent={<ViewIcon />}
          endContent={
            <Chip>33</Chip>
          }
        >
          Who see your profile
        </ListboxItem>
      </Listbox>
    </div>
  );
}

export default DataList