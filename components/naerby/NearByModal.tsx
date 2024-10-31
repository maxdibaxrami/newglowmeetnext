"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Card, CardBody, Image, User } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { forwardRef, useImperativeHandle } from "react";
import { useTheme } from "next-themes";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../icons/profileIcon";

import { HeartEyesImoji, NotLikeImoji, ChatIconImoji } from "./NearByMotionIcons";
import NearByMatchModal from "./NearByMatchModal";

import ExploreCardOption from "@/components/explore/exploreCardOption";

const getAnimationProps = () => {
  return {
    whileTap: {
      scale: 0.85,
    },
  };
};

const getAnimationProps2 = () => {
  return {
    whileTap: {
      rotate: -18, // Rotate to 348 degrees
    },
  };
};

const NearByUserModal = forwardRef((props, ref) => {
  const theme = useTheme();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useImperativeHandle(ref, () => ({
    callChildFunction: onOpen,
  }));

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody className="p-1">
          <Card
            style={
              theme.theme === "light"
                ? {
                    overflow: "scroll",
                    boxShadow: "unset",
                    maxHeight: "calc(100vh - 4rem)",
                    backgroundColor: "rgb(246 246 246)",
                    marginTop: "1.4rem",
                  }
                : {
                    overflow: "scroll",
                    maxHeight: "calc(100vh - 4rem)",
                    marginTop: "1.4rem",
                  }
            }
          >
            <CardBody>
              <div className="flex mb-4 justify-between items-center">
                <div className="flex flex-col">
                  <motion.div
                    className="w-full"
                    layoutId={"1"}
                    style={{ height: "calc(61vh - 4rem)" }}
                  >
                    <Image
                      removeWrapper
                      alt="Profile hero Image"
                      className="w-full h-full"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      loading="lazy"
                      src={props.profileData.mainImage} // dynamic image URL
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                        height: "100%",
                        padding: "10px 10px 5px 10px",
                      }}
                    />
                  </motion.div>

                  <div className="flex">
                    <div className="w-full">
                      <Image
                        alt="Profile hero Image"
                        className="w-full h-full"
                        src={props.profileData.secondImage} // dynamic image URL
                        style={{
                          objectFit: "cover",
                          borderRadius: "20px",
                          padding: "5px 5px 10px 10px",
                          height: "calc(34vh - 4rem)",
                        }}
                      />
                    </div>
                    <div className="w-full">
                      <Image
                        alt="Profile hero Image"
                        className="w-full h-full"
                        loading="lazy"
                        src={props.profileData.thirdImage} // dynamic image URL
                        style={{
                          objectFit: "cover",
                          borderRadius: "20px",
                          padding: "5px 10px 10px 5px",
                          height: "calc(34vh - 4rem)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <User
                avatarProps={{
                  src: props.profileData.avatar,
                  className: "hidden",
                }}
                className="mt-2 justify-start px-2"
                description={props.profileData.location}
                name={`${props.profileData.name}, ${props.profileData.age}`}
              />

              <div className="w-full mb-4 mt-2">
                <Listbox
                  aria-label="Listbox menu with sections"
                  variant="solid"
                >
                  <ListboxSection
                    showDivider
                    className="relative"
                    title="Profile"
                  >
                    <ListboxItem
                      key="2"
                      isReadOnly
                      description={props.profileData.workAndEducation}
                      startContent={<WorkAndStudyIcon />}
                    >
                      Work and education
                    </ListboxItem>

                    <ListboxItem
                      key="3"
                      isReadOnly
                      description={props.profileData.whyHere}
                      startContent={<WhyYouAreHereIcon />}
                    >
                      Why you are here?
                    </ListboxItem>

                    <ListboxItem
                      key="4"
                      isReadOnly
                      description={props.profileData.aboutMe}
                      startContent={<AboutMeIcon />}
                    >
                      About me
                    </ListboxItem>

                    <ListboxItem
                      key="5"
                      isReadOnly
                      description={props.profileData.lookingFor}
                      startContent={<SearchIcon />}
                    >
                      Looking for?
                    </ListboxItem>
                  </ListboxSection>

                  <ListboxSection className="relative" title="More about me!">
                    <ListboxItem
                      key="7"
                      isReadOnly
                      description={props.profileData.relationStatus}
                    >
                      Relation status
                    </ListboxItem>
                    <ListboxItem
                      key="8"
                      isReadOnly
                      description={props.profileData.height}
                    >
                      Height
                    </ListboxItem>
                    <ListboxItem
                      key="9"
                      isReadOnly
                      description={props.profileData.kids}
                    >
                      Kids
                    </ListboxItem>
                    <ListboxItem
                      key="10"
                      isReadOnly
                      description={props.profileData.language}
                    >
                      Language
                    </ListboxItem>
                    <ListboxItem
                      key="11"
                      isReadOnly
                      description={props.profileData.sexuality}
                    >
                      Sexuality
                    </ListboxItem>
                  </ListboxSection>

                  <ListboxSection className="relative" title="Interesting">
                    <ListboxItem key={"1"} isReadOnly>
                      <div
                        className="flex flex-wrap"
                        style={{ paddingBottom: "40px" }}
                      >
                        {Array.isArray(props.profileData.interests) &&
                        props.profileData.interests.length > 0
                          ? props.profileData.interests.map((value, index) => (
                              <Chip
                                key={index}
                                className="m-1"
                                color="success"
                                startContent={<HashtagIcon />}
                                variant="solid"
                              >
                                {value}
                              </Chip>
                            ))
                          : null}
                      </div>
                    </ListboxItem>
                    <ListboxItem
                      key="13"
                      isReadOnly
                      className="absolute"
                      style={{
                        top: "-8px",
                        right: "0px",
                        width: "45px",
                        height: "45px",
                      }}
                    />
                  </ListboxSection>
                </Listbox>
              </div>
            </CardBody>
            <ExploreCardOption page={"explore"} />
          </Card>
        </ModalBody>
        <motion.div
          animate={{ bottom: "120px", zIndex: "1000" }}
          className="backdrop-blur-md flex justify-center footerswipcard--nearbypage before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
        >
          <motion.div
            className="card"
            transition={{ type: "tween" }}
            {...getAnimationProps2()}
          >
            <NotLikeImoji dataId={props.profileData.id} />
          </motion.div>

          <motion.div
            className="card"
            transition={{ type: "tween" }}
            {...getAnimationProps()}
          >
            <ChatIconImoji/>
          </motion.div>

          <motion.div
            className="card"
            transition={{ type: "tween" }}
            {...getAnimationProps()}
          >
            <HeartEyesImoji
              closeModal={onClose}
              dataId={props.profileData.id}
              openModal={openModal}
            />
          </motion.div>
          
        </motion.div>
      </ModalContent>
      <NearByMatchModal
        isOpen={isModalOpen}
        modalData={props.profileData}
        onClose={closeModal}
      />
    </Modal>
  );
});

NearByUserModal.displayName = "NearByUserModal";

export default NearByUserModal;
