"use client";

import { useState } from "react";

import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import TopBar from "@/components/tobBar";
import BottomMenu from "@/components/bottomMenu/index";

import { useTheme } from "next-themes";


export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");
  const Theme = useTheme();

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  return (
    <main className="container relative mx-auto max-w-7xl flex-grow">
      <TopBar selectedTab={selectedTab} />
      <section className=" flex relative flex-col items-center justify-center gap-4 md:py-10 app-background">
        {selectedTab === "explore" && <ExplorePage />}
        {selectedTab === "chat" && <ChatPage />}
        {selectedTab === "profile" && <ProfilePage />}
        {selectedTab === "back" && <ExplorePage />}

        <BottomMenu onChangeMenu={onChangeMenu} />
      </section>
    </main>
  );
}
