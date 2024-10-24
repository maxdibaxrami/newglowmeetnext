import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Card, CardBody, Image, User, Avatar } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";

import { CloseIcon } from "../icons/exploreIcons";
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
              style={{
                overflow: "scroll",
                maxHeight: "98vh",
                position: "relative",
              }}
            >
              <CardBody>
                <div className="flex mb-4 mt-2 justify-between items-center">
                  <div className="flex flex-col	">
                    <div className="w-full">
                      <Image
                        alt="NextUI hero Image"
                        className="w-full h-full"
                        classNames={{
                          wrapper: "w-full",
                        }}
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        style={{
                          borderRadius: "14px 14px 0px 0px",
                          objectFit: "cover",
                          height: "57vh",
                        }}
                      />
                    </div>

                    <div className="flex">
                      <div className="w-full">
                        <Image
                          alt="NextUI hero Image"
                          className="w-full h-full twin-profile"
                          height={156}
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          style={{
                            objectFit: "cover",
                            borderRadius: "0px 0px 0px 14px",
                            height: "26vh",
                          }}
                        />
                      </div>
                      <div className="w-full ">
                        <Image
                          alt="NextUI hero Image"
                          className="w-full h-full twin-profile"
                          height={156}
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          style={{
                            objectFit: "cover",
                            height: "26vh",
                            borderRadius: "0px 0px 14px 0px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <User
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    className: "hidden",
                  }}
                  className="mt-2 justify-start	"
                  description="moscow, russia"
                  name="Mahdi bahrami , 24"
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
                        description="sechinov university , programmer"
                        startContent={<WorkAndStudyIcon />}
                      >
                        Work and education
                      </ListboxItem>

                      <ListboxItem
                        key="3"
                        description="just chat"
                        startContent={<WhyYouAreHereIcon />}
                      >
                        Why you are here?
                      </ListboxItem>

                      <ListboxItem
                        key="4"
                        description="jfkksd ojjfnsdjf j fjiwe in fwj jfwe jfiwef wef "
                        startContent={<AboutMeIcon />}
                      >
                        About me
                      </ListboxItem>

                      <ListboxItem
                        key="5"
                        description="Girl "
                        startContent={<SearchIcon />}
                      >
                        Looking for ?
                      </ListboxItem>
                    </ListboxSection>
                    <ListboxSection className="relative" title="More about me!">
                      <ListboxItem key="7" description="Single ">
                        Relation status
                      </ListboxItem>

                      <ListboxItem key="8" description="183cm ">
                        Height
                      </ListboxItem>

                      <ListboxItem key="9" description="183cm ">
                        Kids
                      </ListboxItem>

                      <ListboxItem key="10" description="183cm ">
                        Language
                      </ListboxItem>
                      <ListboxItem key="11" description="183cm ">
                        Sexuality
                      </ListboxItem>
                    </ListboxSection>
                    <ListboxSection className="relative" title="Intersting">
                      <ListboxItem>
                        <div className="flex flex-wrap">
                          {humanInterests.map((value, index) => {
                            return (
                              <Chip
                                key={index}
                                className="m-1"
                                color="success"
                                startContent={<HashtagIcon />}
                                variant="solid"
                              >
                                {value}
                              </Chip>
                            );
                          })}
                        </div>
                      </ListboxItem>
                      <ListboxItem
                        key="13"
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
              <ExploreCardOption page={"chat"} />
              <Button
                isIconOnly
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "28px",
                  zIndex: 100,
                }}
                variant="solid"
                onPress={onClose}
              >
                <CloseIcon />
              </Button>
            </Card>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;

const humanInterests = [
  "Space Exploration",
  "Artificial Intelligence",
  "Quantum Computing",
  "Ancient Civilizations",
  "Psychology of Dreams",
  "Human Evolution",
  "Environmental Sustainability",
  "Cognitive Science",
  "Neuroscience of Emotions",
  "Cultural Anthropology",
  "Philosophy of Mind",
  "Genetic Engineering",
  "Virtual Reality",
  "Ethical Dilemmas",
  "Music and Sound Perception",
];
