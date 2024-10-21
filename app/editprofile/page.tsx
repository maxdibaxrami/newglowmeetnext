"use client"

import {Image, Button} from '@nextui-org/react'
import {Listbox, ListboxItem, ListboxSection, Chip} from "@nextui-org/react";
import TopBarPages from "@/components/tobBar/topBarPages";
import EditProfileLayout from "./layout";
import { EditProfileIcon } from "../../components/icons/profileIcon";
import { PenIcon, SearchIcon, HashtagIcon , AboutMeIcon, UserIcon, WorkAndStudyIcon, WhyYouAreHereIcon} from '../../components/icons/profileIcon';
import EditProfile from '@/components/profile/editProfile';
import EditMoreAboutMe from '@/components/profile/editMoreAboutMe';
import EditIntersting from '@/components/profile/editIntersting';
export default function EditProfilePage() {
  return (
    <div className="container mx-auto max-w-7xl flex-grow">
      <section className="flex flex-col items-center justify-center gap-4 app-background">
          <TopBarPages/>
          <div className='w-full h-full px-6 pb-4'>
          <div className="flex justify-between items-center">
                    <div className="flex">
                <div className="w-1/2 relative">
                    <Image
                        className="w-full h-full"
                        alt="NextUI hero Image"
                        height={312}
                        style={{objectFit:"cover",borderRadius:"14px 0px 0px 14px"}}
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />
                        
                </div>

                <div className="w-1/2 flex flex-col">
                    <div className="w-full relative">
                        <Image
                        className="w-full h-full twin-profile"
                        alt="NextUI hero Image"
                        height={156}

                        style={{objectFit:"cover",borderRadius:"0px 14px 0px 0px"}}
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />

                      <Button className='absolute bottom-1 right-2 z-10' isIconOnly color="default" aria-label="Like">
                        <PenIcon />
                        </Button>  
                    </div>
                    <div className="w-full relative">
                    <Image
                        className="w-full h-full twin-profile"
                        style={{objectFit:"cover",borderRadius:"0px 0px 14px 0px"}}
                        alt="NextUI hero Image"
                        height={156}

                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />

                        <Button className='absolute bottom-1 right-2 z-10' isIconOnly color="default" aria-label="Like">
                          <PenIcon />
                        </Button>  
                    </div>
                </div>

                    </div>
                    
                </div>
          </div>

          <div className='px-6 w-full mb-4'>
            <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
              <Listbox variant="flat" aria-label="Listbox menu with sections">
                <ListboxSection className='relative' title="Profile" showDivider>  
                  <ListboxItem
                    key="new"
                    description="Moscow, Russia"
                    startContent={<UserIcon/>}
                  >
                    mahdi bahrami . 24
                  </ListboxItem>

                  <ListboxItem
                    key="copy"
                    description="sechinov university , programmer"
                    startContent={<WorkAndStudyIcon  />}
                  >
                    Work and education
                  </ListboxItem>

                  <ListboxItem
                    key="edit"
                    description="just chat"
                    startContent={<WhyYouAreHereIcon />}
                  >
                    Why you are here?
                  </ListboxItem>

                  <ListboxItem
                    key="edit"
                    description="jfkksd ojjfnsdjf j fjiwe in fwj jfwe jfiwef wef "
                    startContent={<AboutMeIcon />}
                  >
                    About me
                  </ListboxItem>

                  <ListboxItem
                    key="ma"
                    description="Girl "
                    startContent={<SearchIcon />}
                  >
                    Looking for ?
                  </ListboxItem>

                  <ListboxItem
                    key="edit"
                    className='absolute'
                    style={{top:"-8px",right:"0px" ,width:"45px" ,height:"45px"}}
                  >
                    <EditProfile/>
                  </ListboxItem>

                </ListboxSection> 
                <ListboxSection className='relative' title="More about me!">  
                  <ListboxItem
                      key="edit"
                      description="Single "
                    >
                      Relation status
                    </ListboxItem>

                  <ListboxItem
                      key="edit"
                      description="183cm "
                    >
                      Height
                    </ListboxItem>

                    <ListboxItem
                      key="edit"
                      description="183cm "
                    >
                      Kids
                    </ListboxItem>

                    <ListboxItem
                      key="edit"
                      description="183cm "
                    >
                      Language
                    </ListboxItem>
                    <ListboxItem
                      key="edit"
                      description="183cm "
                    >
                      Sexuality
                    </ListboxItem>

                    <ListboxItem
                      key="edit"
                      className='absolute'
                      style={{top:"-8px",right:"0px" ,width:"45px" ,height:"45px"}}
                    >
                      <EditMoreAboutMe/>
                    </ListboxItem>

                </ListboxSection> 
                <ListboxSection className='relative' title="Intersting">   
                    <ListboxItem>
                      <div className='flex flex-wrap'>
                        {humanInterests.map((value)=>{
                          return <Chip
                          startContent={<HashtagIcon />}
                          variant="flat"
                          className='m-1'
                          color="success"
                        >
                          {value}
                        </Chip>
                        })}
                        
                      </div>
                    </ListboxItem>
                      <ListboxItem
                        key="edit"
                        className='absolute'
                        style={{top:"-8px",right:"0px" ,width:"45px" ,height:"45px"}}
                      >
                        <EditIntersting/>
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
  "Music and Sound Perception"
];