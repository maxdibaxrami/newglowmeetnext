import {Avatar, AvatarGroup} from "@nextui-org/react";

const MatchList = () => {
    return <AvatarGroup
    isBordered
    max={12}
    total={10}
    renderCount={(count) => (
      <p className="text-small text-foreground font-medium ms-2">+{count} others</p>
    )}
  >
    <Avatar color="primary" isBordered radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    <Avatar color="primary"  isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
    <Avatar color="primary"  isBordered radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
    <Avatar color="primary"  isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    <Avatar color="primary"  isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
    <Avatar color="primary"  isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
  </AvatarGroup>
}

export default MatchList