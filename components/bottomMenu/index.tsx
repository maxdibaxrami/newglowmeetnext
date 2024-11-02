"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import {
  FireIcon,
  ChatIcon,
  ProfileIcon,
  ArrowRight,
  LocationIcon,
  LikeIcon,
} from "../icons/bottomMenuIcons";

const BottomMenu = ({ onChangeMenu }) => {
  const [selected, setSelected] = useState("chat");
  const theme = useTheme();

  useEffect(() => onChangeMenu(selected), [selected]);

  return (
    <motion.div
      animate={
        selected === "explore"
          ? { width: "57px", right: "20px" }
          : { width: "345px" }
      }
      className={"flex w-full flex-col fixed bottom-0 items-center	"}
      style={{
        zIndex: "10",
        width: "326px",
        borderRadius: "14px",
        bottom: "24px",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
      transition={{ type: "tween" }}
    >
      <Tabs
        aria-label="Options"
        style={{color:"#FFF"}}
        classNames={{
          tab: "p-3 h-auto color-white",
          tabList: "bg-transparent p-1",
          tabContent: "text-[#FFF] group-data-[selected=false]:text-[#ffffffbf]",
          base:"background-drop--bluebase---navbar"
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
          key="nearby"
          title={
            <div className="flex items-center space-x-2">
              <LocationIcon />
            </div>
          }
        />

        <Tab
          key="chat"
          style={
            selected === "explore"
              ? { backgroundColor: "#a594f9" }
              : { backgroundColor: "" }
          }
          title={
            <div className="flex items-center space-x-2">
              {selected === "explore" ? <ArrowRight /> : <ChatIcon />}
            </div>
          }
        />

        <Tab
          key="likes"
          title={
            <div className="flex items-center space-x-2">
              <LikeIcon />
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
