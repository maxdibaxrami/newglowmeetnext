import { useState, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Image} from "@nextui-org/react";

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
                    width={300}
                    alt="NextUI hero Image"
                    src={props.profile.mainImage}
                  />
                </SwiperSlide>
                <SwiperSlide>    
                  <Image
                      width={300}
                      alt="NextUI hero Image"
                      src={props.profile.secondImage}
                    />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      width={300}
                      alt="NextUI hero Image"
                      src={props.profile.secondImage}
                    />    
                </SwiperSlide>
              </Swiper>

              <p>dsads</p>
            </motion.div>
        </motion.div>
    );
}


export default ExploreCard
