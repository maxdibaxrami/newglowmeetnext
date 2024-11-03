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
          ? { height: "57px", right: "10px",top:"calc(100% - 80px )", opacity:"1" }
          : { width: "57px", height: "284px", right:"10px", top: "150px", opacity:"1" }
      }
      
      className={"flex w-full flex-col fixed items-center	background-drop--bluebase---navbar"}
      style={{
        zIndex: "10",
        width: "57px",
        borderRadius: "14px",
        overflow: "hidden",
        justifyContent:"center",
        height:"284px",
        right:"10px",
        opacity:0,
        top:"-40px"
        
      }}
      transition={{ type: "tween" }}
    >
      <Tabs
        aria-label="Options"
        classNames={{
          tab: "p-3 h-auto color-white",
          tabList: "bg-transparent p-1 ",
          tabContent:
            "text-[#FFF] group-data-[selected=false]:text-[#ffffffbf]",
          base: "background-drop--bluebase---navbar flex items-center",
        }}
        isVertical={true}
        color="primary"
        selectedKey={selected}
        isSelected={true}
        size="lg"
        style={{
          zIndex: "10",
          width: "57px",
          borderRadius: "14px",
          top: "194px",
          overflow: "hidden",
          backgroundColor: "transparent",
          height:"300px",
          right:"10px",
          color:"#FFF"
        }}
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
