"use client";

import { Image, Button } from "@nextui-org/react";
import { Listbox, ListboxItem, Switch, cn, ListboxSection } from "@nextui-org/react";

import {
  LogOutIcon,
  DeleteAcoontIcon,
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
    <div className="container mx-auto max-w-7xl flex-grow">
      <section className="flex flex-col items-center justify-center gap-4 app-background">
        <TopBarPages />
        <div className="w-full h-full px-6 pb-4">
          <Switch
          defaultChecked={true}
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-primary",
          ),
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn("w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-primary",
            //selected
            "group-data-[selected=true]:ml-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ml-4",
          ),
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-medium">Profile visibility</p>
          <p className="text-tiny text-default-400">
            Show profile on explore status
          </p>
        </div>
           </Switch>

           <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
           <Listbox  variant="flat" aria-label="Listbox menu with descriptions">
            <ListboxSection title="Setting">
            <ListboxItem
                    key="delete"
                    className="text-danger"
                    description="Delete accont for evey. all data will be remove"
                    startContent={<DeleteAcoontIcon />}
                  >
                    Delete account
                  </ListboxItem>

                  <ListboxItem
                    key="logout"
                    description="Logout from account"
                    startContent={<LogOutIcon  />}
                  >
                    Logout
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
