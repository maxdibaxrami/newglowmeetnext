import { Card, CardBody, Image, User } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../../components/icons/profileIcon";

import ExploreCardOption from "./exploreCardOption";

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
              onClick={() => setSelectedId("1")}
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
