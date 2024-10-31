"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroPage from "@/components/auth/introPage";
import { LettersPullUp } from "@/components/animte/letterPullUp";
import BottomController from "@/components/auth/BottonController";
import { BlurIn } from "@/components/animte/blurIn";
import ProfileDataAuth from "@/components/auth/ProfileDataAuth";
import ProfileDataAuth2 from "@/components/auth/ProfileDataAuth2";
import AboutMeAuth from "@/components/auth/aboutMeAuth";
import InterestingAuth from "@/components/auth/interstingAuth";
import ImageDataAuth from "@/components/auth/ProfileIMagesAuth";
import FinalStepAuth from "@/components/auth/finalStep";

export default function SignupPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [languageSelected, setLanguageSelected] = useState(false);

  const NextPage = () => setSelectedTab(selectedTab + 1);
  const prevPage = () => setSelectedTab(selectedTab - 1);

  const setLanguage = () => setLanguageSelected(true);

  const setAnimate = () => {
    if(selectedTab === 0){
      return { marginTop: "4rem" }
    }
    if(selectedTab != 0 && selectedTab != 6){
      return { marginTop: "1.5rem" }
    }
    if(selectedTab === 6){
      return { marginTop: "8rem" }
    }
  }
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <motion.div
        animate={setAnimate}
        className="flex items-baseline mb-2"
        style={{ marginTop: "4rem" }}
      >
        <motion.p className="text-6xl">🔥</motion.p>
        <LettersPullUp className="text-5xl" text="Glow meet!" />
      </motion.div>

      <div className="w-full">
        {selectedTab === 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IntroPage nextPage={NextPage} setLanguage={setLanguage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 1 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProfileDataAuth nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 2 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProfileDataAuth2 nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 3 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AboutMeAuth nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 4 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <InterestingAuth nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 5 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ImageDataAuth nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}

        {selectedTab === 6 && (
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FinalStepAuth nextPage={NextPage} prevPage={prevPage} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
        {selectedTab !== 6 && (
          <BlurIn data={languageSelected}>
            <BottomController
              nextPage={NextPage}
              prevPage={prevPage}
              selectedTab={selectedTab}
            />
          </BlurIn>
        )}
      
    </div>
  );
}
