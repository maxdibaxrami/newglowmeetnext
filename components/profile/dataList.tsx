import {
  Listbox,
  ListboxItem,
  CircularProgress,
  Chip,
} from "@nextui-org/react";

import {
  ProfileIcon,
  FlashIcon,
  LikeIcon,
  ViewIcon,
} from "../icons/profileIcon";

const DataList = () => {
  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox aria-label="Listbox menu with descriptions" variant="flat">
        <ListboxItem
          key="new"
          showDivider
          description="Edit profile"
          endContent={
            <CircularProgress
              aria-label="Loading..."
              color="primary"
              showValueLabel={true}
              size="lg"
              value={55}
            />
          }
          startContent={<ProfileIcon />}
        >
          Profile
        </ListboxItem>
        <ListboxItem
          key="copy"
          showDivider
          description="Boost profile"
          endContent={
            <CircularProgress
              aria-label="Loading..."
              color="success"
              showValueLabel={true}
              size="lg"
              value={100}
            />
          }
          startContent={<FlashIcon />}
        >
          Activity
        </ListboxItem>
        <ListboxItem
          key="edit"
          showDivider
          description="You can see who like your profile"
          endContent={<Chip>22</Chip>}
          startContent={<LikeIcon />}
        >
          Who like you
        </ListboxItem>
        <ListboxItem
          key="delete"
          description="You can see who see your profile"
          endContent={<Chip>33</Chip>}
          startContent={<ViewIcon />}
        >
          Who see your profile
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default DataList;
