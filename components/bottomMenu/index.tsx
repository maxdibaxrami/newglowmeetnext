"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion"

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
    <motion.div
          className="flex w-full flex-col fixed bottom-0 backdrop-blur-sm items-center"
          style={{ height: "68px", zIndex: "1000", width:"193px",borderRadius:"14px", bottom:"24px",overflow:"hidden",border:"1px #ffffff87 solid"}}
          animate={active
            ? { width: "54px",right:"12px",bottom:"14px",height:"99px"}  // Move to bottom-right (right-2 and bottom-2)
            : { width: "193px",bottom:"24px",height: "68px"}}
        >

      <Tabs
        aria-label="Options"
        color="primary"
        selectedKey={selected}
        classNames={{
          tab:active?"px-2 py-2 h-auto":"px-4 py-4 h-auto",
          tabList:active? "flex-col-reverse": ""
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

        </motion.div>
  );
};

export default BottomMenu;
