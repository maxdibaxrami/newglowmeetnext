import { Avatar, AvatarGroup } from "@nextui-org/react";

const MatchList = () => {
  return (
    <AvatarGroup
      isBordered
      max={4}
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ms-2">
          +{count} others
        </p>
      )}
      total={10}
    >
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a042581f4e29026024d"
      />
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a04258a2462d826712d"
      />
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a042581f4e29026704d"
      />
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a04258114e29026302d"
      />
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a04258114e29026702d"
      />
      <Avatar
        isBordered
        color="primary"
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/?u=a04258114e29026708c"
      />
    </AvatarGroup>
  );
};

export default MatchList;
