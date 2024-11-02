import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Card, CardBody, Image, User, Avatar } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../../components/icons/profileIcon";
import ExploreCardOption from "../explore/exploreCardOption";

const UserModal = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const theme = useTheme();

  return (
    <>
      <button className="lg:flex flex items-center" onClick={onOpen}>
        <Avatar
          isBordered
          className="mr-2"
          color="default"
          radius="sm"
          size="md"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <div className="flex flex-col ml-2 text-left">
          <span className="text-large bold">{"Mahdi Bahrmai"}</span>
          <span className="text-small bold" style={{ color: "#22c55e" }}>
            {"Online"}
          </span>
        </div>
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalBody className="p-1">
            <Card
              style={
                theme.theme === "light"
                  ? {
                      overflow: "scroll",
                      boxShadow: "unset",
                      maxHeight: "calc(90vh)",
                      marginTop: "2rem",
                      backgroundColor: "rgb(165 148 249 / 6%)",
                    }
                  : {
                      overflow: "scroll",
                      maxHeight: "calc(90vh)",
                      backgroundColor: "rgb(165 148 249 / 15%)",
                      marginTop: "2rem",
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
                        src={profileData.mainImage} // dynamic image URL
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
                          src={profileData.secondImage} // dynamic image URL
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
                          src={profileData.thirdImage} // dynamic image URL
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
                    src: profileData.avatar,
                    className: "hidden",
                  }}
                  className="mt-2 justify-start px-2"
                  description={profileData.location}
                  name={`${profileData.name}, ${profileData.age}`}
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
                        description={profileData.workAndEducation}
                        startContent={<WorkAndStudyIcon />}
                      >
                        Work and education
                      </ListboxItem>

                      <ListboxItem
                        key="3"
                        isReadOnly
                        description={profileData.whyHere}
                        startContent={<WhyYouAreHereIcon />}
                      >
                        Why you are here?
                      </ListboxItem>

                      <ListboxItem
                        key="4"
                        isReadOnly
                        description={profileData.aboutMe}
                        startContent={<AboutMeIcon />}
                      >
                        About me
                      </ListboxItem>

                      <ListboxItem
                        key="5"
                        isReadOnly
                        description={profileData.lookingFor}
                        startContent={<SearchIcon />}
                      >
                        Looking for?
                      </ListboxItem>
                    </ListboxSection>

                    <ListboxSection className="relative" title="More about me!">
                      <ListboxItem
                        key="7"
                        isReadOnly
                        description={profileData.relationStatus}
                      >
                        Relation status
                      </ListboxItem>
                      <ListboxItem
                        key="8"
                        isReadOnly
                        description={profileData.height}
                      >
                        Height
                      </ListboxItem>
                      <ListboxItem
                        key="9"
                        isReadOnly
                        description={profileData.kids}
                      >
                        Kids
                      </ListboxItem>
                      <ListboxItem
                        key="10"
                        isReadOnly
                        description={profileData.language}
                      >
                        Language
                      </ListboxItem>
                      <ListboxItem
                        key="11"
                        isReadOnly
                        description={profileData.sexuality}
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
                          {Array.isArray(profileData.interests) &&
                          profileData.interests.length > 0
                            ? profileData.interests.map((value, index) => (
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
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;

const profileData = {
  id: 1,
  name: "Mahdi Bahrami",
  age: 24,
  location: "Moscow, Russia",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  workAndEducation: "Sechinov University, Programmer",
  whyHere: "Just chat",
  aboutMe: "Aspiring programmer and coffee enthusiast.",
  lookingFor: "Friendship",
  relationStatus: "Single",
  height: "183 cm",
  kids: "None",
  language: "Russian, English",
  sexuality: "Straight",
  interests: ["Coding", "Photography", "Hiking", "Gaming"],
  mainImage: "https://i.pravatar.cc/300?u=1",
  secondImage: "https://i.pravatar.cc/300?u=2",
  thirdImage: "https://i.pravatar.cc/300?u=3",
};
