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
          ? { width: "56px", right: "20px" }
          : { width: "281px" }
      }
      className="flex w-full flex-col fixed bottom-0 backdrop-blur-2xl items-center"
      style={{
        zIndex: "10",
        width: "281px",
        borderRadius: "14px",
        bottom: "24px",
        overflow: "hidden",
        backgroundColor: "transparent",
        border:
          theme.theme === "light"
            ? "1px #0000005c solid"
            : "1px #ffffff87 solid",
      }}
      transition={{ type: "tween" }}
    >
      <Tabs
        aria-label="Options"
        classNames={{
          tab: "p-3 h-auto",
          tabList: "bg-transparent",
        }}
        color="primary"
        selectedKey={selected}
        size="lg"
        style={{ backgroundColor: "transparent" }}
        variant="solid"
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
              ? { backgroundColor: "#016fee" }
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
