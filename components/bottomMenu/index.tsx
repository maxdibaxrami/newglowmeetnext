"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import { FireIcon, ChatIcon, ProfileIcon } from "../icons/bottomMenuIcons";

const BottomMenu = ({ onChangeMenu }) => {
  const [selected, setSelected] = useState("photos");

  useEffect(() => onChangeMenu(selected), [selected]);

  return (
    <div
      className="flex w-full flex-col fixed bottom-0 items-center justify-center menu-background"
      style={{ height: "80px", zIndex: "1000" }}
    >
      <Tabs
        aria-label="Options"
        color="primary"
        selectedKey={selected}
        size="lg"
        variant="bordered"
        onSelectionChange={setSelected}
      >
        <Tab
          key="explore"
          title={
            <div className="flex items-center space-x-2">
              <FireIcon />
            </div>
          }
        />
        <Tab
          key="chat"
          title={
            <div className="flex items-center space-x-2">
              <ChatIcon />
            </div>
          }
        />
        <Tab
          key="profile"
          title={
            <div className="flex items-center space-x-2">
              <ProfileIcon />
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default BottomMenu;
