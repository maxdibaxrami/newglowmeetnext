"use client";

import { useState } from "react";

import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import TopBar from "@/components/tobBar";
import BottomMenu from "@/components/bottomMenu/index";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  return (
    <main className="container mx-auto max-w-7xl flex-grow">
      <TopBar selectedTab={selectedTab} />
      <section style={selectedTab==="back" || selectedTab ==="explore"?{marginTop:"4rem"}:{marginTop:"0rem"}} className="flex relative flex-col items-center justify-center gap-4 md:py-10 app-background">
        {selectedTab === "explore" && <ExplorePage />}
        {selectedTab === "chat" && <ChatPage />}
        {selectedTab === "profile" && <ProfilePage />}
        {selectedTab === "back" && <ExplorePage />}

        <BottomMenu onChangeMenu={onChangeMenu} />
      </section>
    </main>
  );
}
