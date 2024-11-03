"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/button";
import ProfilePage from "../components/profile/index";
import ChatPage from "../components/chat/index";
import ExplorePage from "../components/explore/index";

import LikesPage from "./likes/page";
import NearByPage from "./nearby/page";

import TopBar from "@/components/tobBar";
import BottomMenu from "@/components/bottomMenu/index";
import { FitlerIcon } from "@/components/icons/NearByMeIcons";
import NearByFilter from "@/components/naerby/NearByFilter";
import { EditProfileIcon, SettingIcon } from "@/components/icons/profileIcon";
import Link from "next/link";

export default function Home() {
  const childRef = useRef();

  const [selectedTab, setSelectedTab] = useState("chat");

  const onChangeMenu = (value) => {
    setSelectedTab(value);
  };

  const handleOpenModal = () => {
    if (childRef.current) {
        childRef.current.openModal();
    }
};

  return (
    <main className="container relative w-full flex-grow">
      <TopBar selectedTab={selectedTab} />

      <section className="flex flex-col items-center justify-center gap-4 ">
        {selectedTab === "explore" && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              style={{ marginTop: "2rem" }}
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
              style={{width:"100%"}}
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
              style={{width:"100%"}}

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

        <AnimatePresence>
          {selectedTab === "nearby"  && (
              <motion.div
                style={{zIndex:30, marginRight:"51px"}}
                className="fixed background-drop--bluebase p-2"
                initial={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                animate={{ opacity: 1 , bottom:"43px", scale: 1.1 }}
                exit={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                
              >
                <Button className="color-white" onPress={handleOpenModal} isIconOnly color="primary" style={{borderRadius:"20%"}} size="lg" aria-label="Like">
                  <FitlerIcon stroke="#FFF"/>
                </Button>  
              </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedTab === "profile"  && (<>
                <motion.div
                  style={{zIndex:30,marginRight:"80px"}}
                  className="fixed background-drop--bluebase p-2"
                  initial={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  animate={{ opacity: 1 , bottom:"43px", scale: 1.1 }}
                  exit={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  
                >
                  <Button as={Link} href="/editprofile" className="color-white" isIconOnly color="primary" style={{borderRadius:"20%"}} size="lg">
                    <EditProfileIcon stroke="#FFF"/>
                  </Button> 
                </motion.div>
          
              <motion.div
                  style={{zIndex:30,marginLeft:"80px"}}
                  className="fixed background-drop--bluebase p-2"
                  initial={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  animate={{ opacity: 1 , bottom:"43px", scale: 1.1 }}
                  exit={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  
                >
                  <Button as={Link} href="/setting" className="color-white" isIconOnly color="primary" style={{borderRadius:"20%"}} size="lg">
                    <SettingIcon stroke="#FFF"/>
                  </Button> 
                </motion.div>
          
          </>)}
        </AnimatePresence>
        <NearByFilter ref={childRef} />

      </section>
    </main>
  );
}
