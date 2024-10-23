"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";

import {
  FireIcon,
  ChatIcon,
  ProfileIcon,
  ArrowRight,
} from "../icons/bottomMenuIcons";

const BottomMenu = ({ onChangeMenu }) => {
  const [selected, setSelected] = useState("chat");

  useEffect(() => onChangeMenu(selected), [selected]);

  return (
    <motion.div
      animate={
        selected === "explore"
          ? { width: "56px", right: "20px" }
          : { width: "170px" }
      }
      className="flex w-full flex-col fixed bottom-0 backdrop-blur-sm	items-center"
      style={{
        zIndex: "10",
        width: "170px",
        borderRadius: "14px",
        bottom: "24px",
        overflow: "hidden",
        border: "1px #ffffff87 solid",
      }}
    >
      <Tabs
        aria-label="Options"
        classNames={{
          tab: "p-3 h-auto",
          tabList: "",
        }}
        color="primary"
        selectedKey={selected}
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
              {selected === "explore" ? <ArrowRight /> : <ChatIcon />}
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
