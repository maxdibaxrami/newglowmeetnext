"use client";

import { Image, Button } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";

import {
  PenIcon,
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  UserIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../../components/icons/profileIcon";

import TopBarPages from "@/components/tobBar/topBarPages";
import EditProfile from "@/components/profile/editProfile";
import EditMoreAboutMe from "@/components/profile/editMoreAboutMe";
import EditIntersting from "@/components/profile/editIntersting";
export default function EditProfilePage() {
  return (
    <div style={{overflow:"scroll", maxHeight:"calc(100vh)"}} className="container mx-auto max-w-7xl flex-grow">
              <TopBarPages />
      <section style={{marginTop:"2rem"}} className="flex flex-col items-center justify-center gap-4 app-background">
        <div  className="w-full h-full px-6 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="w-1/2 relative">
                <Image
                  alt="NextUI hero Image"
                  className="w-full h-full"
                  height={312}
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  style={{
                    objectFit: "cover",
                    borderRadius: "14px 0px 0px 14px",
                  }}
                />
              </div>

              <div className="w-1/2 flex flex-col">
                <div className="w-full relative">
                  <Image
                    alt="NextUI hero Image"
                    className="w-full h-full twin-profile"
                    height={156}
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0px 14px 0px 0px",
                    }}
                  />

                  <Button
                    isIconOnly
                    aria-label="Like"
                    className="absolute bottom-1 right-2 z-10"
                    color="default"
                  >
                    <PenIcon />
                  </Button>
                </div>
                <div className="w-full relative">
                  <Image
                    alt="NextUI hero Image"
                    className="w-full h-full twin-profile"
                    height={156}
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0px 0px 14px 0px",
                    }}
                  />

                  <Button
                    isIconOnly
                    aria-label="Like"
                    className="absolute bottom-1 right-2 z-10"
                    color="default"
                  >
                    <PenIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 w-full mb-4">
          <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            <Listbox aria-label="Listbox menu with sections" variant="solid">
              <ListboxSection showDivider className="relative" title="Profile">
                <ListboxItem
                  key="1"
                  description="Moscow, Russia"
                  startContent={<UserIcon />}
                >
                  mahdi bahrami . 24
                </ListboxItem>

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

                <ListboxItem
                  key="6"
                  className="absolute"
                  style={{
                    top: "-8px",
                    right: "0px",
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <EditProfile />
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

                <ListboxItem
                  key="12"
                  className="absolute"
                  style={{
                    top: "-8px",
                    right: "0px",
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <EditMoreAboutMe />
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
                >
                  <EditIntersting />
                </ListboxItem>
              </ListboxSection>
            </Listbox>
          </div>
        </div>
      </section>
    </div>
  );
}

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
