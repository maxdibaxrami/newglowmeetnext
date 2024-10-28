"use client";

import { useState } from "react";

import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import TopBar from "@/components/tobBar";
import BottomMenu from "@/components/bottomMenu/index";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  return (
    <main className="container mx-auto max-w-7xl flex-grow">
      <TopBar selectedTab={selectedTab} />

      <section className="flex flex-col items-center justify-center gap-4 md:py-10 app-background">
      {selectedTab === "explore" && <AnimatePresence mode="wait">
          <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}            >
               
              <ExplorePage />
          </motion.div>
        </AnimatePresence>}

        {selectedTab === "chat" && <AnimatePresence mode="wait">
          <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}            >
 <ChatPage />
          </motion.div>
        </AnimatePresence>}


        {selectedTab === "profile" && <AnimatePresence mode="wait">
          <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}            >
 <ProfilePage />

          </motion.div>
        </AnimatePresence>}

        {selectedTab === "back" && <AnimatePresence mode="wait">
          <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
            >
 <ExplorePage />
          </motion.div>
        </AnimatePresence>}
        <BottomMenu onChangeMenu={onChangeMenu} />

      </section>
    </main>
  );
}
