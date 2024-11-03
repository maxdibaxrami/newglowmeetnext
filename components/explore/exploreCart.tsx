import { Card, CardBody, Image, User } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";
import { VerifyIcon } from "../../components/icons/profileIcon";
import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../../components/icons/profileIcon";

import { Swiper, SwiperSlide } from "swiper/react";

import ExploreCardOption from "./exploreCardOption";
import { LocationIcon } from "../icons/NearByMeIcons";

const ExploreCard = ({ profileData }) => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Card
      style={
        theme.theme === "light"
          ? {
              overflow: "scroll",
              boxShadow: "unset",
              maxHeight: "100%",
              backgroundColor: "rgb(165 148 249 / 6%)",
            }
          : {
              overflow: "scroll",
              maxHeight: "100%",
              backgroundColor: "rgb(165 148 249 / 15%)",
            }
      }
    >
      <CardBody className="mb-4">
        <div className="flex mb-4 justify-between items-center">
          <div className="flex flex-col">
            <Swiper
              className="mySwiper w-full relative"
              style={{ height: "calc(90vh - 4rem)" }}
              loop={true}
            >
              <SwiperSlide style={{width:"calc(100)"}}>
                <Image       
                    alt="Profile hero Image"
                    className="w-full h-full"
                    classNames={{
                      wrapper: "w-full h-full",
                    }}
                    loading="lazy"
                    src={profileData.mainImage} // dynamic image URL
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover",
                      height: "100%",
                      margin: "0px 10px 10px 10px",
                      width: "calc(100% - 45px)"
                    }}
                  />
                      
              </SwiperSlide>

              <SwiperSlide>
                <Image       
                    alt="Profile hero Image"
                    className="w-full h-full"
                    classNames={{
                      wrapper: "w-full h-full",
                    }}
                    loading="lazy"
                    src={profileData.secondImage} // dynamic image URL
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover",
                      height: "100%",
                      margin: "0px 10px 10px 10px",
                      width: "calc(100% - 45px)"
                    }}
                  />
              </SwiperSlide>

              <SwiperSlide>
                <Image       
                    alt="Profile hero Image"
                    className="w-full h-full"
                    classNames={{
                      wrapper: "w-full h-full",
                    }}
                    loading="lazy"
                    src={profileData.thirdImage} // dynamic image URL
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover",
                      height: "100%",
                      margin: "0px 10px 10px 10px",
                      width: "calc(100% - 45px)"
                    }}
                  />
              </SwiperSlide>

               <div style={{left:"18px", bottom:"121px",width:"calc(100% - 71px)", borderRadius:"13px",height:"61px"}} className=" background-drop--bluebase border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_16px)] shadow-small ml-1 z-10">
                  <div className=" w-full">
                    <div className="flex  justify-between items-center">
                      <User
                        avatarProps={{
                          src: profileData.avatar,
                          className: "hidden",
                        }}
                        classNames={{"name":"text-white","description":"text-white text-tiny","base":"pl-2"}}
                        className="mt-1 justify-start px-2"
                        description={<span className="flex items-center" style={{fontWeight:"400"}}><LocationIcon fill="#FFF"/> {profileData.location}</span>}
                        name={<span className="flex items-center">{profileData.name} {profileData.age} <VerifyIcon stroke="#FFF"/> </span>}
                      />
                      
                    </div>
                  </div>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="w-full mb-4 mt-2">
          <Listbox aria-label="Listbox menu with sections" variant="solid">
            <ListboxSection showDivider className="relative" title="Profile">
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
              <ListboxItem key="8" isReadOnly description={profileData.height}>
                Height
              </ListboxItem>
              <ListboxItem key="9" isReadOnly description={profileData.kids}>
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
              <ListboxItem isReadOnly>
                <div
                  className="flex flex-wrap"
                  style={{ paddingBottom: "40px" }}
                >
                  {profileData.interests.map((value, index) => (
                    <Chip
                      key={index}
                      className="m-1"
                      color="success"
                      startContent={<HashtagIcon />}
                      variant="solid"
                    >
                      {value}
                    </Chip>
                  ))}
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
  );
};

export default ExploreCard;

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
