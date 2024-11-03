"use client";

import { useState, useRef, useEffect } from "react";
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
import ChatFiltermenu from "@/components/chat/chatFilterMenu";
import ExploreFilter from "@/components/explore/exploreFilter";
import { ArrowRight } from "@/components/icons/bottomMenuIcons";

import {useSearchParams} from "next/navigation";
import { useRouter } from 'next/navigation'

export default function Home() {
  const childRef = useRef();
  const childRefExplore = useRef();

  const pathname = useSearchParams();
  const router = useRouter()

  useEffect(() => {
    // Check if the current route is the root
    if (!pathname.get('page')) {
      // Redirect to /?page=chat
      router.replace('/?page=chat');
    }
  }, [pathname]);

  const handleOpenModal = () => {
    if (childRef.current) {
        childRef.current.openModal();
    }
};

const handleOpenModalExplore = () => {
  if (childRefExplore.current) {
      childRefExplore.current.openModal();
  }
};

  return (
    <main className="container relative w-full flex-grow">
      <TopBar selectedTab={pathname.get('page') || "chat"} />

      <section className="flex flex-col items-center justify-center gap-4 ">
        {pathname.get('page') === "explore" && (
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

        {pathname.get('page') === "nearby" && (
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

        {pathname.get('page') === "chat" && (
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

        {pathname.get('page') === "likes" && (
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

        {pathname.get('page') === "profile" && (
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

        {pathname.get('page') === "back" && (
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

        <AnimatePresence>
          {pathname.get('page') === "nearby"  && (
              <motion.div
                style={{zIndex:30}}
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
          {pathname.get('page') === "profile"  && (<>
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

        <AnimatePresence>
          {pathname.get('page') === "chat"  && (<>
                <motion.div
                  style={{zIndex:30, marginLeft:"17px"}}
                  className="fixed background-drop--bluebase p-2"
                  initial={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  animate={{ opacity: 1 , bottom:"43px", scale: 1.1 }}
                  exit={{ opacity: 0 , bottom:"-80px", scale: 0.5 }}
                  
                >
                  <ChatFiltermenu />
                </motion.div>
        
          
          </>)}
        </AnimatePresence>

        <AnimatePresence>
          {pathname.get('page') === "explore"  && (
              <motion.div
                style={{zIndex:30}}
                className="fixed background-drop--bluebase p-2"
                initial={{ opacity: 0 , left:"-80px", bottom:"-80px", scale: 0.5 }}
                animate={{ opacity: 1 , left:"20px" , bottom:"20px", scale: 1.1 }}
                exit={{ opacity: 0 , left:"-80px", bottom:"-80px", scale: 0.5 }}
                
              >
                <Button  className="color-white" onPress={handleOpenModalExplore} isIconOnly color="primary" style={{borderRadius:"20%"}} size="lg" aria-label="Like">
                  <FitlerIcon stroke="#FFF"/>
                </Button>  
              </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {pathname.get('page') === "explore"  && (
              <motion.div
                style={{zIndex:30}}
                className="fixed background-drop--bluebase p-2"
                initial={{ opacity: 0 , right:"-80px", bottom:"-80px", scale: 0.5 }}
                animate={{ opacity: 1 , right:"20px" , bottom:"20px", scale: 1.1 }}
                exit={{ opacity: 0 , right:"-80px", bottom:"-80px", scale: 0.5 }}
                
              >
                <Button className="color-white" onPress={e=> router.back()} isIconOnly color="primary" style={{borderRadius:"20%"}} size="lg" aria-label="Like">
                  <ArrowRight stroke="#FFF"/>
                </Button>  
              </motion.div>
          )}
        </AnimatePresence>



        <NearByFilter ref={childRef} />
        <ExploreFilter ref={childRefExplore}/>
        <BottomMenu />

      </section>
    </main>
  );
}
