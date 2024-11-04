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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HeartIcon, VerifyIcon } from "../icons/profileIcon";
import { LocationIcon } from "../icons/exploreIcons";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../icons/profileIcon";

import NearByMatchModal from "./nearByModalImage";

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
    <Modal backdrop="transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent style={{height:"90vh"}} className="bg-white">
        <ModalBody style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "100%",
                        overflow:"scroll",
                        position: "absolute",
                        top: 0,
                        cursor: "grab"
                      }}>
              <div
                  style={{
                      width: "100%",
                      borderRadius: 16,
                      left:0,
                      right:0,
                      margin:"auto",
                      marginTop:"2rem",                    
                      
                  }}
                  className="background-drop--bluebase---card"
              >
                
                <div className="relative">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    loop
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    allowTouchMove={false}
                    
                  >
                    <SwiperSlide >
                      <NearByMatchModal
                        classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                        className="w-full"
                        alt="NextUI hero Image"
                        src={props.profileData.mainImage}
                        style={{height:"100%",width:"100%"}}

                      />
                    </SwiperSlide>
                    <SwiperSlide>    
                      <NearByMatchModal
                          className="w-full"
                          classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                          alt="NextUI hero Image"
                          src={props.profileData.secondImage}
                          style={{height:"100%",width:"100%"}}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                      <NearByMatchModal
                          className="w-full"
                          alt="NextUI hero Image"
                          classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                          src={props.profileData.thirdImage}
                          style={{height:"100%",width:"100%"}}
                        />    
                    </SwiperSlide>
                  </Swiper>

                  <div style={{zIndex:10,marginLeft:"8px",padding:"8px",marginBottom:"6px"}} className="w-[calc(100%_-_16px)] flex flex-col justify-cente items-start gap-1 absolute background-drop--bluebase border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1  shadow-small z-10">
                    <h4 className="flex items-center text-small text-white font-semibold leading-none text-default-600">{props.profileData.name} {props.profileData.age} <VerifyIcon stroke="#fff"/></h4>
                    <h5 className="flex items-center text-small text-white tracking-tight text-default-400"><LocationIcon fill="#fff"/> {props.profileData.location} </h5>
                  </div>
                </div>

                <div>
                  <User   
                    name="Ready for relationship"
                    classNames={{"wrapper":"py-3","base":"px-1"}}
                    description={
                        "@jrgarciadev"
                    }
                    avatarProps={{
                      color:"secondary",
                      icon:<HeartIcon stroke="#fff" fill="#FFF"/>
                    }}
                  />
                </div>
                
              {/*
                <div>
                  <User   
                    name="Here to date"
                    classNames={{"wrapper":"py-3","base":"px-1"}}
                    description={
                        "@jrgarciadev"
                    }
                    avatarProps={{
                      color:"success",
                      icon:<DatingIcon fill="#FFF" stroke="#fff"/>
                    }}
                  />
                </div>

                <div>
                  <User   
                    name="Open to chat"
                    classNames={{"wrapper":"py-3","base":"px-1"}}
                    description={
                        "@jrgarciadev"
                    }
                    avatarProps={{
                      color:"warning",
                      icon:<ExploreChat fill="#fff"/>
                    }}
                  />
                </div>
              
              
              */}

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

              </div>
        </ModalBody>
      </ModalContent>
      <NearByMatchModal
        isOpen={isModalOpen}
        modalData={props}
        onClose={closeModal}
      />
    </Modal>
  );
});

NearByUserModal.displayName = "NearByUserModal";

export default NearByUserModal;
