"use client";

import { useState } from "react";

import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import BottomMenu from "@/components/bottomMenu/index";
import TopBar from "@/components/tobBar";
export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  return (
    <section style={{height:"100vh"}} className=" flex flex-col items-center justify-center gap-4 md:py-10 app-background">
      {selectedTab === "explore" && <ExplorePage />}
      {selectedTab === "chat" && <ChatPage />}
      {selectedTab === "profile" && <ProfilePage />}
      
      <BottomMenu onChangeMenu={onChangeMenu} />
    </section>
  );
}
