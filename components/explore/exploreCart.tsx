import { useState, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Image, User} from "@nextui-org/react";
import { HeartIcon, VerifyIcon } from "../icons/profileIcon";
import { LocationIcon } from "../icons/exploreIcons";
import { height, width } from "@telegram-apps/sdk/dist/dts/scopes/components/viewport/signals";
import { DatingIcon,ExploreChat } from "../icons/exploreIcons";

const ExploreCard = (props) => {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
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
                    width: "calc(100vw - 64px)",
                    height: "calc(100vh - 100px)",
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    padding:"12px",
                    left:0,
                    right:0,
                    margin:"auto",
                    scale
                }}
            >
              
              <div className="relative">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image
                        classNames={{wrapper:"max-w-none w-full h-full"}}
                        className="w-full"
                      alt="NextUI hero Image"
                      src={props.profile.mainImage}
                      style={{height:"100%",width:"100%"}}

                    />
                  </SwiperSlide>
                  <SwiperSlide>    
                    <Image
                        className="w-full"
                        classNames={{wrapper:"max-w-none w-full h-full"}}
                        alt="NextUI hero Image"
                        src={props.profile.secondImage}
                        style={{height:"100%",width:"100%"}}

                      />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                        className="w-full"
                        alt="NextUI hero Image"
                        classNames={{wrapper:"max-w-none w-full h-full"}}
                        src={props.profile.secondImage}
                        style={{height:"100%",width:"100%"}}
                      />    
                  </SwiperSlide>
                </Swiper>

                <div style={{zIndex:10,marginLeft:"8px",padding:"8px",marginBottom:"6px"}} className="w-[calc(100%_-_16px)] flex flex-col justify-cente items-start gap-1 absolute background-drop--bluebase border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1  shadow-small z-10">
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
            </motion.div>
        </motion.div>
    );
}


export default ExploreCard
