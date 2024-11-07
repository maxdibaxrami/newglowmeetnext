import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import {Pagination, User} from "@nextui-org/react";
import { HeartIcon, VerifyIcon } from "../icons/profileIcon";
import { LocationIcon } from "../icons/exploreIcons";

import ExploreCardImage from './exploreCardImage'
import { useSwiper } from "swiper/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import ExploreCardOption from "./exploreCardOption";

import {
  SearchIcon,
  HashtagIcon,
  AboutMeIcon,
  WorkAndStudyIcon,
  WhyYouAreHereIcon,
} from "../icons/profileIcon";
import { useTheme } from "next-themes";

const ExploreCard = (props) => {
    const [exitX, setExitX] = useState(0);
    const [ActiveSlide, setActiveSlide] = useState(1); // Starting from slide 1

    const theme = useTheme()

    const x = useMotionValue(0);

    const scale = useTransform(x, [-80, 0, 80], [0.8, 1, 0.8],{
      clamp:true
    });

    const rotate = useTransform(x, [-20, 0, 20], [-15, 0, 15], {
        clamp: true
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 55, opacity: 0 },
        animate: { scale: 0.9, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -50) {
            setExitX(-60);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 50) {
            setExitX(60);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                maxHeight: "100%",
                overflow:"scroll",
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >
              <motion.div
                style={{
                    width: "calc(100vw - 26px)",
                    borderRadius: 16,
                    padding:"12px",
                    left:0,
                    right:0,
                    margin:"auto",
                    marginTop:"1.5rem",
                    scale,
                    backgroundColor:theme.theme==="dark" ? "#090031":"#e8e3ff"        
                }}
                className="backdrop-blur"
            >
              
              <div className="relative">
                <ExploreCardOption/>
              <Pagination
                  disableAnimation
                  classNames={{ wrapper: "flex-col flex", item: "exploreSipwePagination" }}
                  className="absolute z-50 right-2"
                  style={{ top: "40%" }}
                  total={3}
                  page={ActiveSlide + 1}
                  initialPage={1}
                  size={"sm"}
                />

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                  allowTouchMove={false}
                  onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Update ActiveSlide on slide change

                  
                >
                  <SwiperSlide >
                    <ExploreCardImage
                      classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                      className="w-full"
                      alt="NextUI hero Image"
                      src={props.profile.mainImage}
                      style={{height:"100%",width:"100%"}}

                    />
                  </SwiperSlide>
                  <SwiperSlide>    
                    <ExploreCardImage
                        className="w-full"
                        classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                        alt="NextUI hero Image"
                        src={props.profile.secondImage}
                        style={{height:"100%",width:"100%"}}

                      />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ExploreCardImage
                        className="w-full"
                        alt="NextUI hero Image"
                        classNames={{wrapper:"max-w-none w-full h-full bg-transparent"}}
                        src={props.profile.thirdImage}
                        style={{height:"100%",width:"100%"}}
                      />    
                  </SwiperSlide>
                </Swiper>

                <div style={{zIndex:10,marginLeft:"8px",padding:"8px",marginBottom:"6px"}} className="w-[calc(100%_-_16px)] flex flex-col justify-cente items-start gap-1 absolute background-drop--bluebase backdrop-blur-sm	 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1  shadow-small z-10">
                  <h4 className="flex items-center text-small text-white font-semibold leading-none text-default-600">{props.profile.name} {props.profile.age} <VerifyIcon stroke="#fff"/></h4>
                  <h5 className="flex items-center text-small text-white tracking-tight text-default-400"><LocationIcon fill="#fff"/> {props.profile.location} </h5>
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
                      description={props.profile.workAndEducation}
                      startContent={<WorkAndStudyIcon />}
                    >
                      Work and education
                    </ListboxItem>

                    <ListboxItem
                      key="3"
                      isReadOnly
                      description={props.profile.whyHere}
                      startContent={<WhyYouAreHereIcon />}
                    >
                      Why you are here?
                    </ListboxItem>

                    <ListboxItem
                      key="4"
                      isReadOnly
                      description={props.profile.aboutMe}
                      startContent={<AboutMeIcon />}
                    >
                      About me
                    </ListboxItem>

                    <ListboxItem
                      key="5"
                      isReadOnly
                      description={props.profile.lookingFor}
                      startContent={<SearchIcon />}
                    >
                      Looking for?
                    </ListboxItem>
                  </ListboxSection>

                  <ListboxSection className="relative" title="More about me!">
                    <ListboxItem
                      key="7"
                      isReadOnly
                      description={props.profile.relationStatus}
                    >
                      Relation status
                    </ListboxItem>
                    <ListboxItem
                      key="8"
                      isReadOnly
                      description={props.profile.height}
                    >
                      Height
                    </ListboxItem>
                    <ListboxItem
                      key="9"
                      isReadOnly
                      description={props.profile.kids}
                    >
                      Kids
                    </ListboxItem>
                    <ListboxItem
                      key="10"
                      isReadOnly
                      description={props.profile.language}
                    >
                      Language
                    </ListboxItem>
                    <ListboxItem
                      key="11"
                      isReadOnly
                      description={props.profile.sexuality}
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
                        {Array.isArray(props.profile.interests) &&
                        props.profile.interests.length > 0
                          ? props.profile.interests.map((value, index) => (
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

            </motion.div>
        </motion.div>
    );
}


export default ExploreCard
