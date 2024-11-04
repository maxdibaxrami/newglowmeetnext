import React, { useEffect } from "react";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

import { BlurIn } from "../animte/blurIn";
import { SendMessage } from "../icons/exploreIcons";

import { MatchConfetti } from "@/components/explore/buttonEffect";

const NearByMatchModal = ({ isOpen, onClose, modalData }) => {
  
  useEffect(() => {
    if (isOpen) {
      MatchConfetti();
    }
  }, [isOpen]);

  return (
    <Modal
      hideCloseButton
      isOpen={isOpen}
      placement={"bottom-center"}
      className="z-100"
      size="full"
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <ModalContent>
        <>
          <ModalBody className="flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1.2, 1.2, 1],
                rotate: [0, 0, 5, -5, 0],
                borderRadius: ["50%", "50%", "50%", "50%", "50%"],
              }}
              className="box"
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image
                isBlurred
                alt="NextUI hero Image"
                src={modalData.avatar}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </motion.div>
            <BlurIn data={true}>
              <div className="mb-4 text-center mt-4">
                <p className="text-5xl text-center font-bold">It’s a match!</p>
              </div>
              <div className="text-center">
                {MatchText[
                  Math.floor(Math.random() * MatchText.length)
                ].replaceAll("[Name]", modalData.name)}
              </div>
            </BlurIn>

            <div className="flex gap-4 items-center">
              <Button color="default" variant="bordered" onClick={onClose}>
                keep swipping
              </Button>

              <Button
                color="primary"
                endContent={<SendMessage />}
                variant="solid"
              >
                Send Message
              </Button>
            </div>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default NearByMatchModal;

const MatchText = [
  "Hey [Name], swipe right for an adventure! What’s the most spontaneous thing you’ve done lately?",
  "We matched, [Name]! Now, what’s our first fun fact about each other?",
  "Quick—what’s your go-to karaoke song, [Name]?",
  "If you could travel anywhere right now, where would you go, [Name]?",
  "Looks like we’re stuck with each other, [Name]! What are your thoughts on pizza topping debates?",
  "Does this mean we’re dating now, [Name]? Because I’m totally ready for brunch dates!",
  "What’s one thing you’re really passionate about, [Name]?",
  "I’d love to know your favorite way to spend a weekend, [Name].",
  "Your profile caught my eye, [Name]—what’s something you’re really proud of?",
  "I’m intrigued by your taste in [interest from their profile], [Name]. Want to share more?",
  "Let’s skip the small talk, [Name]—what’s your favorite adventure you've been on?",
  "What’s the best thing that happened to you this week, [Name]?",
];
