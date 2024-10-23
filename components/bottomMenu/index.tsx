"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import { FireIcon, ChatIcon, ProfileIcon, ArrowRight } from "../icons/bottomMenuIcons";

import { motion } from "framer-motion"

const BottomMenu = ({ onChangeMenu }) => {

  const [selected, setSelected] = useState("explore");

  useEffect(() => onChangeMenu(selected),[selected]);      

  return (
    <motion.div 
      className="flex w-full flex-col fixed bottom-0 backdrop-blur-sm	items-center"
      style={{ zIndex: "10", width:"170px",borderRadius:"14px", bottom:"24px",overflow:"hidden",border:"1px #ffffff87 solid"}}
      animate={selected==="explore"?{ width: "56px", right:"20px" }:{ width: "170px" }}
    >
      <Tabs
        aria-label="Options"
        color="primary"
        selectedKey={selected}
        classNames={{
          tab:"p-3 h-auto",
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
              {selected === "explore"? <ArrowRight/> : <ChatIcon />}
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

    </motion.div >
  );
};

export default BottomMenu;
