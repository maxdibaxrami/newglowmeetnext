"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import LikesPage from "./likes/page";
import NearByPage from "./nearby/page";
import TopBar from "@/components/tobBar";
import BottomMenu from "@/components/bottomMenu/index";

export default function Home() {

  const [selectedTab, setSelectedTab] = useState("chat");

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  return (
    <main className="container relative w-full flex-grow">
      <TopBar selectedTab={selectedTab} />

      <section  className="flex flex-col items-center justify-center gap-4 ">
        {selectedTab === "explore" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <ExplorePage />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === "nearby" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <NearByPage />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === "chat" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              style={{ width: "100%" }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <ChatPage />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === "likes" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <LikesPage />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === "profile" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <ProfilePage />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === "back" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
            >
              <ExplorePage />
            </motion.div>
          </AnimatePresence>
        )}
        <BottomMenu onChangeMenu={onChangeMenu} />
      </section>
    </main>
  );
}
