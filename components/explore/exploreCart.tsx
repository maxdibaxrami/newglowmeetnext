import { Card, CardBody, Image, User } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../../components/icons/profileIcon";

import ExploreCardOption from "./exploreCardOption";

const ExploreCard = ({profileData}) => {
  return (
    <Card style={{ overflow: "scroll", maxHeight: "100vh" }}>
      <CardBody>
        <div className="flex mb-4 justify-between items-center">
          <div className="flex flex-col">
            <div className="w-full">
              <Image
                alt="Profile hero Image"
                className="w-full h-full"
                classNames={{
                  wrapper: "w-full",
                }}
                src={profileData.mainImage} // dynamic image URL
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
                  alt="Profile hero Image"
                  className="w-full h-full twin-profile"
                  height={156}
                  src={profileData.secondImage} // dynamic image URL
                  style={{
                    objectFit: "cover",
                    borderRadius: "0px 0px 0px 14px",
                    height: "26vh",
                  }}
                />
              </div>
              <div className="w-full">
                <Image
                  alt="Profile hero Image"
                  className="w-full h-full twin-profile"
                  height={156}
                  src={profileData.thirdImage} // dynamic image URL
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
            src: profileData.avatar,
            className: "hidden",
          }}
          className="mt-2 justify-start"
          description={profileData.location}
          name={`${profileData.name}, ${profileData.age}`}
        />

        <div className="w-full mb-4 mt-2">
          <Listbox  aria-label="Listbox menu with sections" variant="solid">
            <ListboxSection  showDivider className="relative" title="Profile">
              <ListboxItem
                isReadOnly
                key="2"
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
              <ListboxItem isReadOnly key="7" description={profileData.relationStatus}>
                Relation status
              </ListboxItem>
              <ListboxItem isReadOnly key="8" description={profileData.height}>
                Height
              </ListboxItem>
              <ListboxItem isReadOnly key="9" description={profileData.kids}>
                Kids
              </ListboxItem>
              <ListboxItem isReadOnly key="10" description={profileData.language}>
                Language
              </ListboxItem>
              <ListboxItem isReadOnly key="11" description={profileData.sexuality}>
                Sexuality
              </ListboxItem>
            </ListboxSection>

            <ListboxSection className="relative" title="Interesting">
              <ListboxItem isReadOnly>
                <div className="flex flex-wrap" style={{ paddingBottom: "40px" }}>
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
