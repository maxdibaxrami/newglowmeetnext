"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import { FireIcon, ChatIcon, ProfileIcon } from "../icons/bottomMenuIcons";

const BottomMenu = ({ onChangeMenu }) => {

  const [selected, setSelected] = useState("chat");
  const [active, SetActive ] = useState(selected === "explore" ? true : false)

  useEffect(() => {
    onChangeMenu(selected)
    if(selected ==="explore"){
      SetActive(true)
      return
    }
    SetActive(false)
    
  }, [selected]);

  return (
    <div
          className="flex w-full flex-col fixed bottom-0 backdrop-blur-sm items-center"
          style={{ height: "68px", zIndex: "1000", width:"193px",borderRadius:"14px", bottom:"24px",overflow:"hidden",border:"1px #ffffff87 solid"}}
        >

      <Tabs
        aria-label="Options"
        color="primary"
        selectedKey={selected}
        classNames={{
          tab:"px-4 py-4 h-auto",
          tabList:""
        }}
        size="lg"
        variant="light"
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
